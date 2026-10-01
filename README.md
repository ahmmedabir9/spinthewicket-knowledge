# Spin The Wicket Knowledge Base

The player-facing knowledge base for **Spin The Wicket (STW)**, a multiplayer cricket management game. It explains every part of the game in organised markdown files. The Discord help agent reads these files to answer player questions, and the same files are useful as a reference for the team.

## How it fits together

```
In-app help guides (informationModules.ts)  --sync-->  knowledge/en + knowledge/bn
Hand-written topic pages                     ------->  knowledge/en
                                                         |
                                                         v
                                              Hermes agent in Discord help channel
                                              (uses agent/system-prompt.md)
```

- The **in-app guides** stay the source of truth for the topics they cover. A script copies them here, in English and Bangla.
- **Hand-written pages** cover everything else: overview, new player guide, rules, training, XP, tournaments, FAQ, glossary and app navigation.
- Keeping the app and the knowledge base in step means the agent always gives the same answer the app does.

## Folder layout

```
knowledge/
  INDEX.md                  every file with a summary (generated)
  en/                       English knowledge files
    00-start-here/          overview, how the game works, new player guide
    01-team/                Playing XI, squad and league rules, player ratings
    02-market/              Signing Market, pool quotas, retention, transfers
    03-matches/             Quick Match, league match, preparation, scoring
    04-tactics/             field setting, stadiums and pitches
    05-progression/         training, XP, tournaments and seasons
    06-reference/           glossary, FAQ, app navigation, not yet documented
    07-screens/             screenshot walk-throughs with written descriptions of each screen
  bn/                       Bangla versions (same paths as en/)
agent/
  system-prompt.md          instructions for the Discord help agent
  eval-questions.md         questions to test the agent after changes
screenshots/                app screenshots, compressed WebP (see screenshots/README.md)
scripts/                    sync, index and validation tools
docs/open-questions.md      things to verify with the game team (not read by the agent)
```

## Every file has front matter

```yaml
---
title: "Playing XI"
summary: "One or two sentences on what the page answers."
keywords: ["playing xi", "auto build", "captain"]
language: en
audience: players
source: hand-written        # or: in-app-guide
last_updated: 2026-10-02
---
```

The summary and keywords help the agent find the right file quickly.

## Updating the knowledge base

See [CONTRIBUTING.md](CONTRIBUTING.md). In short:

| Change | What to do |
|---|---|
| An in-app guide changed | Run `npm run sync -- path/to/informationModules.ts`, then `npm run index` |
| A hand-written page changed | Edit the file, update `last_updated`, run `npm run index` |
| New page | Copy the front matter from another file, add the page, run `npm run index` |
| Check everything | `npm run check` |
| Game update | Add a line to [CHANGELOG.md](CHANGELOG.md) |

The `Check knowledge base` GitHub Action runs the same checks on every pull request.

## Using it with the agent

See [agent/README.md](agent/README.md).

## Requirements

Node.js 18 or newer. There are no dependencies to install.
