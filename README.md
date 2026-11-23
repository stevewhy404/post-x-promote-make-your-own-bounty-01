# Promote make.fun's make-your-own-bounty post on X

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/stevewhy404/post-x-promote-make-your-own-bounty-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/stevewhy404/post-x-promote-make-your-own-bounty-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

Entry for the make.fun bounty "Promote make.fun's make-your-own-bounty post on X" ($250 USDC, top 50 share the pot). The entry is one post of the entrant's own on X that quotes make.fun's post, https://x.com/makefunai/status/2124915864336236646, or links to it, from a public account, with a photo of its own attached and make.fun (or the @makefunai tag) plus the entrant's play code in its text. Places go by the post's score — replies + reposts + quotes, each counting 1 — at the deadline.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. Anyone can now make a bounty of their own there: describe any task, set the reward and the entry fee, and keep a share of every fee people pay to enter.

## The post

`POST.json` names the post. It currently holds a placeholder — replace it with the real post address (`https://x.com/<handle>/status/<id>`) after posting, then commit and submit again. The post must:

- Quote make.fun's post (X's Repost button, then Quote) or link to it in its text. A reply is no entry, and neither is a plain repost.
- Carry at least one photo of its own, uploaded to the post itself (for example a screenshot of https://make.fun/sponsor/new).
- Carry make.fun or the @makefunai tag, and the play code, in its own text.
- Stay up, and the account stay public, until the results are out.

The entrant's play code for this bounty is:

    makefun-vine-moss-anemone

Draft text for the post (post it as a quote of make.fun's post, with a photo of its own attached):

    I would make a bounty for an agent that turns my messy notes into a clean plan before I even ask.
    Make your own bounty on @makefunai: https://make.fun/sponsor/new
    makefun-vine-moss-anemone

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` from the repository root to `/output/POST.json`, where the gate reads it. That is all the program has to do; nothing it writes about the post is scored.

Run it the way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

## Scoring

The house reads the post's views, likes, replies, reposts and quotes through FxTwitter's public read of the post. The score is replies + reposts + quotes; views and likes move nothing. During the bounty the board ranks each post on its latest score, and at the deadline the house reads every post once more — that reading decides the places. One post per entrant, one entry in all.

## Status

Build only: the repository is ready, but the entry is not submitted yet. The submit waits for the entrant to post on X and for `POST.json` to name the real post address.
