---
title: "Training"
summary: "How player training works: levels 0-5, +1 rating per level, performance points and coin costs, eligibility stats, how training wears off, bench penalties and level loss."
keywords: ["training", "train", "training level", "ability", "decay", "performance points", "eligibility", "bench", "training lab", "level 5", "cost"]
language: en
audience: players
source: hand-written
last_updated: 2026-10-02
---

# Training

Training makes a player stronger for as long as the training lasts. It is done **per league**, so a player's training in one league does not carry to another.

## Levels

A player can be trained for batting and for bowling, each from **level 0 to level 5**. Each level adds **+1 to the player's rating** in that skill, on top of their base rating.

## What it costs

To move up a level you need both:

1. **Performance points**: the player must have earned enough from matches ([how points are earned](../03-matches/match-formats-and-scoring.md)).
2. **Coins**: 10% of the player's base price, multiplied by the level you are training to (for example, level 3 costs 30% of their base price). Expensive players cost more to train.

| Level | Performance points needed |
|---|---|
| 1 | 200 |
| 2 | 350 |
| 3 | 500 |
| 4 | 800 |
| 5 | 1,500 |

Training also earns your team **+150 XP** ([XP and levels](xp-and-levels.md)).

## Who can be trained: eligibility

The player must have good enough career stats for the target level.

**Batting**

| Stat | L1 | L2 | L3 | L4 | L5 |
|---|---|---|---|---|---|
| Runs (min) | 800 | 2,000 | 3,000 | 5,000 | 8,000 |
| Average (min) | 15 | 20 | 25 | 35 | 40 |
| Strike rate (min) | 200 | 210 | 220 | 230 | 250 |
| Half-centuries (min) | 5 | 10 | 15 | 20 | 30 |
| Centuries (min) | 0 | 0 | 0 | 1 | 3 |
| Sixes (min) | 20 | 50 | 100 | 150 | 200 |
| Fours (min) | 30 | 70 | 120 | 180 | 300 |
| Batting rank (best allowed) | 50 | 35 | 20 | 10 | 5 |

**Bowling**

| Stat | L1 | L2 | L3 | L4 | L5 |
|---|---|---|---|---|---|
| Wickets (min) | 20 | 35 | 70 | 120 | 150 |
| Economy (max) | 17 | 16 | 14 | 13 | 11 |
| Bowling rank (best allowed) | 50 | 35 | 20 | 10 | 5 |

You must finish each level before the next one.

## Ability: training wears off

Each trained skill has an **ability** score from 0 to 100. A new training starts at 100. After every match the player's ability drops:

| Reason | Ability lost |
|---|---|
| Played the match | -5 |
| Their team lost | -2 more |
| Poor personal form | -2 more |
| Stats fell below the eligibility threshold | -20 more |

**Benched players lose more.** If a squad player sits out the Playing XI for **3 matches in a row**, their trained ability drops by **20**. Playing again resets the count.

When ability reaches **0**, the player **loses one training level**.

## Training Lab

The Training Lab screen in the app (Team tab) shows your training tokens, training slots, players ready to claim and eligible players. It also shows timers on active training and an option to finish early. The rules for tokens, slots and timers are not covered in this guide yet.

## Tips

- Train players who start regularly. Benching them wastes the investment.
- Check eligibility first. Higher levels need a strong career record and a top ranking, so not every player can reach level 5.
- Training is one of the six [Match Preparation](../03-matches/match-preparation.md) tasks: train 4 players to earn +0.25 Focus Boost.

## The Training Lab screen

The Training Lab shows your **tokens**, the number of **training slots** in use (for example 1/4), how many players are **ready to claim** and how many are **eligible**. A training slot shows a countdown timer, and a **Finish now** button with a token price lets you skip the wait. The exact rules for tokens, slots and timers are not documented yet; see [the screen](../07-screens/team-and-player-screens.md) for a picture and [Not yet documented](../06-reference/not-yet-documented.md).
