#!/usr/bin/env node
/**
 * Sync the in-app help guides into this knowledge base.
 *
 * Usage:
 *   node scripts/sync-guides.js path/to/informationModules.ts [--date YYYY-MM-DD]
 *
 * The app's informationModules.ts is the source of truth for the guides listed in
 * scripts/guide-meta.json. This script turns each module into a markdown file with
 * front matter in knowledge/en/ and knowledge/bn/. Files whose body did not change
 * are left alone, so `last_updated` only moves when the guide really changed.
 */
const fs = require("fs");
const path = require("path");

const [, , srcArg, ...rest] = process.argv;
if (!srcArg) {
  console.error("Usage: node scripts/sync-guides.js path/to/informationModules.ts [--date YYYY-MM-DD]");
  process.exit(1);
}
const dateIdx = rest.indexOf("--date");
const today = dateIdx >= 0 ? rest[dateIdx + 1] : new Date().toISOString().slice(0, 10);

const root = path.resolve(__dirname, "..");
const meta = JSON.parse(fs.readFileSync(path.join(__dirname, "guide-meta.json"), "utf8"));

// Turn the TypeScript module into plain JS we can evaluate.
let code = fs.readFileSync(path.resolve(srcArg), "utf8");
code = code
  .replace(/export type InfoLanguage[^;]*;/, "")
  .replace(/export const INFORMATION_MODULE_CONTENT\s*:[^=]*=/, "const INFORMATION_MODULE_CONTENT =");
const modules = new Function(`${code}; return INFORMATION_MODULE_CONTENT;`)();

const quote = (s) => JSON.stringify(s);

function frontMatter(m, key, lang, date) {
  return [
    "---",
    `title: ${quote(m.title)}`,
    `summary: ${quote(m.summary)}`,
    `keywords: [${m.keywords.map(quote).join(", ")}]`,
    `language: ${lang}`,
    "audience: players",
    "source: in-app-guide",
    `source_key: ${key}`,
    `last_updated: ${date}`,
    "---",
    "",
  ].join("\n");
}

const NOTE =
  "<!-- This file is generated from the in-app help guide by scripts/sync-guides.js. " +
  "Do not edit it by hand: change the guide in the app, then re-run the script. -->\n\n";

let written = 0;
let unchanged = 0;
const missing = [];

for (const [key, m] of Object.entries(meta)) {
  const mod = modules[key];
  if (!mod) {
    missing.push(key);
    continue;
  }
  for (const lang of ["en", "bn"]) {
    const body = (mod[lang] || "").trim() + "\n";
    if (!mod[lang]) {
      missing.push(`${key} (${lang})`);
      continue;
    }
    const out = path.join(root, "knowledge", lang, `${m.path}.md`);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    let date = today;
    if (fs.existsSync(out)) {
      const old = fs.readFileSync(out, "utf8");
      const oldBody = old.split("-->\n\n").slice(1).join("-->\n\n");
      if (oldBody === body) {
        unchanged++;
        continue;
      }
    }
    fs.writeFileSync(out, frontMatter(m, key, lang, date) + NOTE + body);
    written++;
  }
}

const unmapped = Object.keys(modules).filter((k) => !meta[k]);
console.log(`Written: ${written}, unchanged: ${unchanged}`);
if (missing.length) console.log("Missing in source:", missing.join(", "));
if (unmapped.length) console.log("Modules in the app with no entry in scripts/guide-meta.json:", unmapped.join(", "));
