# Using this knowledge base with the Hermes agent

## What to give the agent

1. **System prompt:** the text in [`system-prompt.md`](system-prompt.md) (everything below the line).
2. **Knowledge:** the `knowledge/` folder. You have two options.

### Option A - load everything into context (simplest)

The English knowledge base is small (roughly 13,000 words in total, a few tens of thousands of tokens). Many models can take it all in one go. Concatenate the files in `knowledge/en/` (and `knowledge/bn/` if you want the Bangla wording), and place them after the system prompt. This avoids retrieval mistakes completely.

### Option B - retrieve only the relevant files

If you prefer to keep prompts small:

1. Give the agent `knowledge/INDEX.md` so it knows what exists.
2. Index each file by its `title`, `summary` and `keywords` front matter plus its body.
3. For each question, retrieve the top 2-4 files and pass them to the model.

Whichever you choose, keep the rule "answer only from these files" in the prompt.

## Keeping the agent current

The agent should read from the repo's `main` branch. Typical setups:

- A GitHub Action or webhook that tells the agent to re-pull the repo on every push to `main`.
- A scheduled `git pull` on the machine that runs the agent, followed by a re-index.

After a big update, run through [`eval-questions.md`](eval-questions.md).

## Do not include in the knowledge base

Anything the agent should never say: unreleased features, admin tools, internal formulas, server or database details. The agent can only leak what it can read, so keep those in a private repo.

## Discord setup suggestions

- Give the agent access to the help channel only.
- Ask it to reply in a thread or as a reply to the question, to keep the channel tidy.
- Make sure moderators are easy to mention. The prompt tells the agent to point players to them for account, payment and bug issues.
- Log questions the agent could not answer. They show which pages to write or improve next.
