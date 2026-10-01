#!/usr/bin/env node
/**
 * Shared helpers for reading knowledge files.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const KNOWLEDGE = path.join(ROOT, "knowledge");

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : [p];
  });
}

function markdownFiles(dir) {
  return walk(dir).filter((f) => f.endsWith(".md"));
}

/** Parse the simple front matter used in this repo (key: value, with JSON-style strings and arrays). */
function parseFrontMatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) return { data: null, body: text };
  const data = {};
  for (const line of m[1].split("\n")) {
    const i = line.indexOf(":");
    if (i < 0) continue;
    const key = line.slice(0, i).trim();
    const raw = line.slice(i + 1).trim();
    try {
      data[key] = JSON.parse(raw);
    } catch {
      data[key] = raw;
    }
  }
  return { data, body: text.slice(m[0].length) };
}

module.exports = { ROOT, KNOWLEDGE, walk, markdownFiles, parseFrontMatter };
