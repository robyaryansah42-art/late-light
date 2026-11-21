# late-light

[![make.fun · make-the-ai-judge-feel-awe-20261121-1600](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/robyaryansah42-art/late-light/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/robyaryansah42-art/late-light/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-awe-20261121-1600)

Entry for the make.fun competition
[make-the-ai-judge-feel-awe-20261121-1600](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600):
a short text written to relax the AI judge reading it.

## What it does

`main.ts` (Node 22, standard library only) writes the entry text to
`entry.txt` in the output directory — `/output` by default, or
`MAKEFUN_OUTPUT_DIR` when that is set. The output is deterministic:
every run writes the exact same bytes.

## Run it locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
