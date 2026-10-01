# Contributing

This knowledge base is read by players (and by the help agent), so accuracy matters more than length.

## Golden rules

1. **Write for players.** Use the words players see in the app. Leave out code, database names, file paths, internal formulas that players cannot see, and unreleased features.
2. **One topic per file.** Short files with a clear summary are found more reliably than long ones.
3. **Don't state what you haven't verified.** If you are unsure, put it in `docs/open-questions.md` and leave it out of the knowledge files, or add it to `knowledge/en/06-reference/not-yet-documented.md`.
4. **Mark league-specific values.** Say "set by the league" for anything a league admin can change.
5. **Keep English and Bangla in step** where a Bangla file exists.

## Updating after a game change

1. Decide which file(s) the change affects. Search the repo for the old behaviour (for example `grep -ri "72 hours" knowledge`).
2. Edit the file, or re-sync it if it comes from an in-app guide (see below).
3. Update `last_updated` in the front matter.
4. Run `npm run index` to refresh `knowledge/INDEX.md`, then `npm run check`.
5. Add a line to `CHANGELOG.md` under "Unreleased".
6. Open a pull request. The GitHub Action re-runs the checks.
7. After merging, re-test the agent with `agent/eval-questions.md`.

## Files generated from the app

These files come from `informationModules.ts` in the app and must not be edited by hand:

`03-matches/quick-match`, `03-matches/league-match`, `03-matches/match-preparation`, `01-team/playing-xi`, `04-tactics/field-setting`, `04-tactics/stadiums-and-pitches`, `02-market/signing-market` (English and Bangla).

To update them:

```bash
node scripts/sync-guides.js /path/to/informationModules.ts
npm run index
```

The script only rewrites a file when its content really changed, so `last_updated` stays accurate. If you add a new guide module in the app, add an entry for it in `scripts/guide-meta.json` (path, title, summary, keywords). The script warns when a module in the app has no entry.

## Adding a new page

1. Pick the right folder. Use a lowercase, hyphenated file name.
2. Start with front matter (copy from an existing file).
3. Link to related pages with relative links, for example `[Training](../05-progression/training.md)`.
4. Run `npm run index` and `npm run check`.

## Screenshots

See `screenshots/README.md`. Always add a written description next to an image so the agent can use it.

## Style

- Plain, short sentences. Explain a game term the first time you use it.
- Use the exact button and tab names from the app, in bold on first use.
- Tables for comparisons, numbered lists for steps.
- English first; Bangla can follow the wording of the existing Bangla guides.
