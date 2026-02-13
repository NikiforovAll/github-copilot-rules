---
sidebar_position: 3
title: Best practices
---

# Best practices

Short habits that make Copilot work well. Each links to a longer article if you want the full story.

## Workflow

![Copilot Workflow: Explore → Plan → Implement → Commit](/img/bp-workflow.png)

**Plan before you code.** Use `@workspace` to explore, switch to [Plan Mode](/fundamentals/plan-mode) to design, implement, commit. Commits are checkpoints — make them often. `git worktree` helps when you're juggling branches.

**Brainstorm with structure.** Tell Copilot exactly how you want output: "give me 3 options, compare pros and cons in a table." The [pros-and-cons](/customizations/prompts/pros-and-cons) prompt automates this. See [prompt engineering](/fundamentals/prompt-engineering) for more on shaping responses.

**Spec-driven for greenfield work.** For new projects or PoCs, start from a spec. The [spec agent](/customizations/agents/spec) interviews you, builds a plan, and hands it off. [spec-kit](https://github.com/github/spec-kit) adds task tracking on top.

## Context

![Context Funnel: @workspace → #file: → Focused Prompt](/img/bp-context.png)

This is the single biggest lever. Copilot can only work with what it can see.

- Feed it relevant files with `#file:` references — don't make it guess
- Use `@workspace` for broad exploration, then narrow down
- Pull in external knowledge via [MCP servers](https://modelcontextprotocol.io/) when built-in context isn't enough
- One task per chat session. Start fresh when you switch topics — stale context degrades quality fast

The full playbook is in [context engineering](/fundamentals/context-engineering). Read that one.

:::warning
Context windows have hard limits. Shorter and more focused beats longer and comprehensive every time.
:::

## Customizations

![Customization Stack: Instructions → Prompts → Agents → Skills](/img/bp-customizations.png)

Copilot is configurable through [instructions, prompts, agents, and skills](/category/customizations). If you find yourself repeating the same guidance or correcting the same mistakes, encode it. That's the whole point.

Start with a `copilot-instructions.md` for team standards. Add `.instructions.md` files for specific concerns (testing conventions, coding style). Build prompts and agents as patterns emerge from your daily work.

## Working habits

![Working Habits: Be Direct, Iterate, Reflect](/img/bp-habits.png)

**Be direct.** Vague prompts get vague answers. State constraints, mention the tech stack, point to examples in your codebase. "Look at the tests for this module" beats "write tests."

**Iterate, don't restart.** Get something working first, then refine. If it's going sideways, backtrack — don't keep prompting on a broken thread.

**Reflect.** After a session, run [`/reflect`](/customizations/prompts/reflect) to capture what worked and what didn't. Patterns you notice can become [prompts](/category/prompts), [agents](/category/agents), or [skills](/category/skills). See [session reflection](/guides/session-reflection) for the full workflow.

## Resources

- [GitHub Copilot docs](https://docs.github.com/en/copilot)
- [Model Context Protocol](https://modelcontextprotocol.io/)
- [spec-kit](https://github.com/github/spec-kit)
