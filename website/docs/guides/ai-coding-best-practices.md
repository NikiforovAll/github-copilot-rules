---
sidebar_position: 4
title: AI Coding Best Practices
---

# AI Coding Best Practices

A practical guide to getting the most out of AI coding assistants like GitHub Copilot.

## Think Before You Prompt

The biggest mistake is typing before thinking. Planning produces dramatically better results than just starting to talk.

### Plan Architecture First

Before asking AI to build a feature:
- Think about the structure
- Consider edge cases
- Identify constraints

**Bad:** "Build me an auth system"

**Good:** "Build email/password authentication using the existing User model, store sessions in Redis with 24-hour expiry, and add middleware that protects all routes under /api/protected"

### Use Agent Mode for Complex Tasks

For multi-file, multi-step tasks:
1. Plan the approach in Chat mode
2. Execute in Agent mode
3. Review the changes

### Specific > Vague

The more specific your prompt, the better the output. Every. Single. Time.

---

## Instruction Files Optimization

Instruction files (`.github/copilot-instructions.md`, `.github/instructions/*.instructions.md`) shape every AI interaction.

### Keep Instructions Focused

AI can reliably follow around **150-200 rules** at a time. System prompts already use some of that capacity. Every instruction you add competes for attention.

:::warning
If your instructions are a novel, AI will start ignoring things randomly.
:::

### Project-Specific, Not Generic

Don't explain what a components folder is. AI knows what components are.

**Tell it the weird stuff:**
- Your naming conventions that differ from standards
- Commands that actually matter in your workflow
- Edge cases specific to your codebase

### Tell WHY, Not Just WHAT

**Okay:** "Use TypeScript strict mode"

**Better:** "Use TypeScript strict mode because we've had production bugs from implicit any types"

The WHY gives context for making judgment calls you didn't anticipate.

### Update Constantly

Every time you find yourself correcting AI on the same thing twice, that's a signal it should be in your instruction files.

Over time, instructions become a living document of how your codebase actually works.

> Bad instructions look like documentation written for a new hire. Good instructions look like notes you'd leave yourself if you knew you'd have amnesia tomorrow.

---

## Prompting Techniques

### Be Specific About What You Want

| Vague | Specific |
|-------|----------|
| "Fix this bug" | "Fix the null pointer in validateUser() when email is undefined" |
| "Add error handling" | "Add try-catch around the API call, log errors to console, show user-friendly message" |
| "Make it faster" | "Optimize the database query - it's called on every request and currently takes 200ms" |

### Tell What NOT to Do

AI has tendencies. It likes to overengineer - extra files, unnecessary abstractions, flexibility you didn't ask for.

**Be explicit:**
- "Keep this simple. Don't add abstractions I didn't ask for."
- "One file if possible."
- "No extra configuration options."

### Give Context About Constraints

**Examples that change AI behavior:**
- "We need this to be fast because it runs on every request"
- "This is a prototype we'll throw away"
- "This will be reviewed by junior developers"

AI can't read your mind about constraints you haven't mentioned.

### Show Examples When Stuck

If AI keeps misunderstanding, write a minimal example yourself:

"Here's what the output should look like. Now apply this pattern to the rest."

AI is excellent at pattern matching from concrete examples.

---

## Context Management

### Scope Conversations to Single Tasks

Don't use the same conversation to build your auth system and then also refactor your database layer. Contexts bleed together and AI gets confused.

**One conversation = one task**

### Use @workspace for Broad Context

When you need AI to understand the overall codebase:
- Use `@workspace` to give broad context
- Then narrow down with specific file references

### Reference Specific Files

Use `#file:` references to point to exactly what matters:
- `#file:src/auth/login.ts` - The file you're working on
- `#file:tests/auth.test.ts` - Related tests
- `#file:docs/api.md` - Relevant documentation

### Break Complex Tasks Into Steps

For complex work:
1. Get agreement on architecture first
2. Implement one component at a time
3. Review outputs and iterate
4. Integrate and test

---

## Copilot Modes

### Chat Mode
**Use for:** Questions, explanations, planning, brainstorming

- "How does the authentication flow work?"
- "What's the best approach for caching here?"
- "Explain this regex"

### Edit Mode
**Use for:** Inline modifications, small changes

- Quick fixes
- Refactoring small sections
- Adding comments

### Agent Mode
**Use for:** Multi-file autonomous tasks

- Feature implementation
- Large refactors
- Code generation across multiple files

### Recommended Workflow

```
Plan in Chat → Execute in Agent → Review → Iterate
```

1. **Chat:** Discuss approach, understand constraints
2. **Agent:** Let AI implement across files
3. **Review:** Check the changes, run tests
4. **Iterate:** Fix issues, refine

---

## Debugging with AI

### Restart When Looping

:::danger
If AI tries the same thing, fails, tries again, fails — **stop**. More instructions won't help.
:::

1. **Don't keep pushing** - More instructions won't help
2. **Start fresh** - New conversation, clean context
3. **Simplify** - Break the task into smaller pieces

### Simplify Complex Tasks

If AI is struggling with a complex task:
- Break it into smaller pieces
- Get each piece working before combining
- Provide more specific requirements

### Show Expected Output

When AI keeps misunderstanding:
- Write a minimal working example
- Show the expected output format
- "Here's what success looks like"

### Reframe the Problem

Sometimes the way you framed the problem doesn't map well to how AI thinks.

Try different angles:
- "Implement this as a state machine" vs "Handle these transitions"
- "Follow this pattern from file X" vs describing from scratch
- Technical terms vs plain descriptions

---

## Output Quality

### If Output Sucks, Input Sucked

:::info
Don't blame the model. If you're getting bad results with a good model, your prompting needs work.
:::

**Focus on:**
- How you write prompts (specific > vague)
- How you structure requests (steps > monolithic)
- How you provide context (relevant > everything)

### Cross-Reference What AI Produces

AI still makes mistakes. Always review:
- Does the code do what was asked?
- Are there unnecessary files or abstractions?
- Is there technical debt being introduced?
- Do the tests actually test the right things?

---

## Summary

| Principle | Action |
|-----------|--------|
| Think first | Plan before prompting |
| Be specific | Detailed prompts, explicit constraints |
| Manage context | One task per conversation, fresh starts |
| Guide behavior | Tell what NOT to do, show examples |
| Review always | Check output, iterate, refine |
