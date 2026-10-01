#!/usr/bin/env node
/**
 * Validate the knowledge base.
 *
 *   node scripts/validate.js
 *
 * Errors (exit code 1):
 *   - missing or incomplete front matter
 *   - language field not matching the folder (en/bn)
 *   - last_updated not in YYYY-MM-DD format
 *   - broken relative links or missing images
 * Warnings:
 *   - English file with no Bangla version
 *   - file with no summary keywords
 */
const fs = require("fs");
const path = require("path");
const { ROOT, KNOWLEDGE, markdownFiles, parseFrontMatter } = require("./lib");

const REQUIRED = ["title", "summary", "keywords", "language", "audience", "source", "last_updated"];
const errors = [];
const warnings = [];

const files = markdownFiles(KNOWLEDGE).filter((f) => path.basename(f) !== "INDEX.md");

for (const file of files) {
  const rel = path.relative(ROOT, file);
  const text = fs.readFileSync(file, "utf8");
  const { data, body } = parseFrontMatter(text);

  if (!data) {
    errors.push(`${rel}: missing front matter`);
    continue;
  }
  for (const key of REQUIRED) {
    if (data[key] === undefined || data[key] === "" || (Array.isArray(data[key]) && !data[key].length)) {
      errors.push(`${rel}: front matter field "${key}" is missing or empty`);
    }
  }
  const lang = path.relative(KNOWLEDGE, file).split(path.sep)[0];
  if (data.language && data.language !== lang) {
    errors.push(`${rel}: language "${data.language}" does not match folder "${lang}"`);
  }
  if (data.last_updated && !/^\d{4}-\d{2}-\d{2}$/.test(String(data.last_updated))) {
    errors.push(`${rel}: last_updated must be YYYY-MM-DD`);
  }

  // Links and images (ignore code blocks and external links).
  const stripped = body.replace(/```[\s\S]*?```/g, "");
  const linkRe = /!?\[[^\]]*\]\(([^)\s]+)\)/g;
  let m;
  while ((m = linkRe.exec(stripped))) {
    const target = m[1].split("#")[0];
    if (!target || /^[a-z]+:/i.test(target)) continue;
    const resolved = path.resolve(path.dirname(file), target);
    if (!fs.existsSync(resolved)) errors.push(`${rel}: broken link -> ${m[1]}`);
  }

  if (lang === "en") {
    const bn = path.join(KNOWLEDGE, "bn", path.relative(path.join(KNOWLEDGE, "en"), file));
    if (!fs.existsSync(bn)) warnings.push(`${rel}: no Bangla version yet`);
  }
}

if (warnings.length) {
  console.log(`Warnings (${warnings.length}):`);
  warnings.forEach((w) => console.log("  - " + w));
}
if (errors.length) {
  console.error(`\nErrors (${errors.length}):`);
  errors.forEach((e) => console.error("  - " + e));
  process.exit(1);
}
console.log(`\nOK: ${files.length} knowledge files checked.`);
