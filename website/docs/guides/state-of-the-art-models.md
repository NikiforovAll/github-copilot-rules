---
sidebar_position: 5
title: State of the Art Models (Feb 2026)
---

# State of the Art Models — Feb 5, 2026

Same-day releases: **Claude Opus 4.6** (Anthropic) vs **GPT-5.3-Codex** (OpenAI).

## TL;DR

**Opus 4.6** goes wide: massive context, enterprise workflows, PowerPoint, knowledge work.
**GPT-5.3-Codex** goes deep: best-in-class coding benchmarks, self-improvement, mid-task steering.

### Claude Opus 4.6

- 1M token context window
- Enterprise/knowledge work focus
- 500+ zero-days found (security research)
- Agent Teams in Claude Code
- 4 effort levels (adaptive thinking)
- PowerPoint integration

### GPT-5.3-Codex

- Wins coding benchmarks (SWE-Bench Pro, Terminal-Bench 2.0, OSWorld)
- Faster inference
- Mid-task steering
- Self-improvement (helped build itself)
- Codex parallel agents
- ~400K context window

:::warning Self-Reported Benchmarks
Take vendor-reported benchmarks with a grain of salt — always validate with real-world usage.
:::

## Benchmarks

![Coding Benchmark Scores — SWE-Bench Pro, Terminal-Bench 2.0, OSWorld](/img/sota-models-benchmarks.jpg)

| Benchmark | Opus 4.6 | GPT-5.3-Codex | Delta |
|---|---|---|---|
| SWE-Bench Pro | 52% | 57% | +5.0pp → OpenAI |
| Terminal-Bench 2.0 | 65.4% | 76% | +10.6pp → OpenAI |
| OSWorld | 58% | 64% | +6.0pp → OpenAI |

## Capability Radar

![Capability Profile — Relative Scoring](/img/sota-models-radar.jpg)

## Feature Comparison

![Features — Context, Capabilities, Security](/img/sota-models-features.jpg)

| Category | Opus 4.6 | GPT-5.3-Codex |
|---|---|---|
| **Context Window** | 1M tokens | ~400K tokens |
| **Max Output** | 128K tokens | 128K tokens |
| **Multi-Agent** | Agent Teams | Codex parallel agents |
| **Mid-Task Steering** | — | ✓ |
| **Self-Improvement** | — | Helped build itself |
| **PowerPoint Integration** | ✓ | — |
| **Adaptive Thinking** | 4 effort levels | — |
| **Zero-Day Discovery** | 500+ found | — |
| **Cyber Rating** | — | High-capability |

## Sources

- [Introducing GPT-5.3-Codex | OpenAI](https://openai.com/index/introducing-gpt-5-3-codex/)
- [Anthropic rolls out Claude Opus 4.6 | SiliconANGLE](https://siliconangle.com/2026/02/05/anthropic-rolls-claude-opus-4-6-1-million-token-context-support/)
- [GPT-5.3-Codex vs Claude Opus 4.6 | Serenities AI](https://serenitiesai.com/articles/gpt-53-codex-vs-claude-opus-46-comparison)
- [Anthropic releases Opus 4.6 with new 'agent teams' | TechCrunch](https://techcrunch.com/2026/02/05/anthropic-releases-opus-4-6-with-new-agent-teams/)
- [GPT-5.3-Codex benchmarks | OfficeChai](https://officechai.com/ai/gpt-5-3-codex-benchmarks/)
