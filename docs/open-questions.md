# Open questions

Things to check with the game team before relying on them in the knowledge base. **This file is for maintainers; the help agent should not read it.**

## Contradictions between sources

| # | Topic | What the sources say | Used in the knowledge base | To do |
|---|---|---|---|---|
| 1 | Squad size cap | The in-app Signing Market guide says a full squad is 25 players. The league settings default (technical docs) is 16. A test league showed 17 in a squad. | Cap described as "set by the league", with a note that the Signing Market guide refers to 25. | Confirm the real default and how leagues set it. |
| 2 | Signing Market model | Earlier design notes describe round-based batch resolution. The current in-app guide describes a continuous market with 5-20 minute decision windows. | The in-app guide (continuous model). | Confirm that the continuous model is live and the old live auction is retired or still available in some leagues. |
| 3 | Training | Technical docs describe performance points plus coin cost. The Training Lab shows tokens, slots and timers with a "finish now" cost. | Points and coin rules documented. The token and slot rules are listed as not yet documented. | Write a Training Lab guide and merge the two descriptions. |
| 4 | Play style names | Playing XI uses Conservative / Standard / Attacking. Live matches use Conservative / Standard / Aggressive (DEF / BAL / AGG in the UI). | Both sets are mentioned in the FAQ. | Confirm whether these are two separate settings or the same one with different labels. |
| 5 | Quick Match stats | Technical notes disagree on whether quick-match results count toward player stats. | Not stated in the knowledge base. | Confirm and add to the Quick Match guide. |
| 6 | Autoplay scoring | Technical notes mention an "autoplay penalty" that affects performance scoring. | Not stated. | Confirm what players should know. |

## Details to confirm

- Exact tie-break after a tied Super Over (boundary count, or a declared tie).
- Whether pool boundaries and quotas shown in the app match the "1 / 1 / 2 / 3 / rest" shape described in the Pool quotas page.
- Which game modes exist in the mode picker (6 seen, only Quick Match and The Global Cup identified).
- Whether the "league level requirement" for some players is something players see.
- Transfer tile rules (limits, timing).

## Features to keep out until they ship

Anything designed but not yet live (check your internal feature tracker) must stay out of the knowledge base until it ships, because the agent can repeat whatever it reads. Don't list unreleased feature names in this repo if it is public.

## Ideas for next pages

- Training Lab guide (once the token and slot rules are written)
- Game modes guide (once all modes are known)
- League admin guide, in a separate admin-only repo
- Bangla versions of the hand-written pages
