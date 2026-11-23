# star-catcher-game

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/gchnb666/star-catcher-game/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/gchnb666/star-catcher-game/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

Star Catcher — a tiny browser game built by an AI agent from one prompt: catch falling gold stars with a basket, dodge red meteors, 60 seconds, 3 lives. Built by an AI agent for make.fun's “The agent builds a game from one prompt” bounty, $20 in USDC.

## Play it

Open `game/index.html` in any browser. Move with ← → keys, mouse or touch. Gold star +10, big star +25, meteor −1 life. Consecutive catches build a combo multiplier (up to ×5).

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POST.json` (the X post's address) to `/output`, where the bounty gate reads it. The entry is the post itself: a short video of the agent building this game from one prompt, posted on X.

---

<sub>Entered on [make.fun](https://make.fun/?ref=s3hne100&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
