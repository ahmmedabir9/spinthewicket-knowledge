# Screenshots

App screenshots live here and are shown inside knowledge pages for human readers.

## Folders

Group by area, matching the knowledge folders:

```
screenshots/
  start/        first-run flow, team wizard, checklist
  team/         Playing XI, squad, formation
  market/       Signing Market, Scout, History, retention
  matches/      pre-match, live match, results
  tactics/      field setting, pitches
  progression/  training, XP
  league/       tournaments, rankings, teams pages
```

## File names

Lowercase, hyphenated, in the order a player would see them:

`playing-xi-pitch-view.webp`, `signing-market-recommended.webp`, `match-preparation-tasks.webp`

Use WebP, 640 px wide (about 40-60 KB each). Keep each image under about 400 KB and crop to the phone screen. **Never commit screenshots that show real names, emails, account handles, session lists or private chat.** Blur or leave them out. The first batch (80 screens) was taken on a test league: names were blurred and the account, settings and chat screens were left out.

## Add a text description every time

The help agent reads text, not pictures. Next to every image in a knowledge page, add a short written description of what the screen shows and what each important button does. Use this pattern:

```markdown
![Playing XI page showing the Auto Build and Reserve buttons](../../../screenshots/team/playing-xi-overview.png)

**What you see:** the Playing XI page with the team level meters at the top, the Auto Build
and Reserve buttons, then the Tactical Balance meter and the 11 player cards.
```

The `alt` text (inside the square brackets) should also describe the screen, in one sentence. The relative path depends on the page's depth: from `knowledge/en/<folder>/page.md` the path starts with `../../../screenshots/`.

## Screens worth capturing first

These match the topics already documented:

1. Playing XI (batting tab, bowling tab, Tactical Balance modal, formation selector)
2. Signing Market (Recommended, player modal Signing tab, decision window, History, Ready to Add card)
3. Match Preparation tasks page
4. Live match (spinner and play styles), Scorecard tab
5. Field Setting presets
6. Training Lab
7. Tournament pages (Home, Matches, Points)

The validation script checks that every image linked from a knowledge page exists.

## What is already here

The first batch of screenshots (October 2026) is described in `knowledge/en/07-screens/`, one page per area (first launch, home, team and player, market, match day, league and tournaments). To add or replace a screen, drop the WebP in the right folder, then add or edit the description in the matching page.
