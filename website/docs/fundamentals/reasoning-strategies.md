---
sidebar_position: 3
title: Reasoning Strategies
---

# Reasoning Strategies

Basic prompts work for simple tasks. For complex problems, you need reasoning strategies. These force the AI to follow specific cognitive patterns before answering.

The difference is noticeable. CoT reduced errors by 40-60% in early GPT-3 tests. ToT solved problems that standard prompting failed on entirely.

:::tip
For prompt engineering fundamentals (structure, zero-shot vs few-shot, best practices), see [Prompt Engineering](prompt-engineering.md).
:::

### Core reasoning models

| Strategy | Full Name | Approach | Best For |
|----------|-----------|----------|----------|
| **CoT** | Chain-of-Thought | Sequential logical steps | Math, planning, logic puzzles |
| **ToT** | Tree-of-Thought | Parallel branching paths | Creative writing, strategic planning |
| **AoT** | Atom-of-Thought | Decomposition into atomic parts | Coding, proofs, verifiable tasks |
| **CoD** | Chain-of-Draft | Iterative drafting/refinement | Long-form content, essays |

## Evaluation and refinement strategies

| Strategy | Full Name | Approach | Best For |
|----------|-----------|----------|----------|
| **Reflexion** | Reflexion | Self-critique and error correction | Code debugging, quality review |
| **Self-Refine** | Self-Refinement | Iterative self-improvement | Polishing drafts, creative work |
| **Self-Consistent** | Self-Consistency | Multiple attempts + consensus | High-precision factual tasks |

## Task-specific strategies

| Strategy | Full Name | Approach | Best For |
|----------|-----------|----------|----------|
| **LTM** | Least-to-Most | Simple to complex sub-problems | Educational tasks, multi-part problems |
| **Standard** | Standard | Direct response | Simple queries, fast summaries |

---

## Detailed strategy breakdown

### Chain-of-Thought (CoT)

How it works: You tell the model to think out loud, step-by-step.

Why it works: Making intermediate steps explicit cuts hallucinations in logic and math problems.

Prompt pattern:
```
Let's think through this step by step:
1. First, I'll...
2. Then...
3. Finally...
```

Best for: Mathematical problems, planning sequences, logical deductions

---

### Tree-of-Thought (ToT)

How it works: The model considers multiple directions, evaluates them, picks the best path.

Why it works: Useful when there's no single correct first step. Get several ideas, then narrow down.

Prompt pattern:
```
Consider multiple approaches:
- Approach A: [description]
- Approach B: [description]
- Approach C: [description]

Evaluate each and select the best path forward.
```

Best for: Creative writing, strategic decisions, architectural choices

---

### Atom-of-Thought (AoT)

How it works: Break problems into independent sub-tasks that can be solved separately.

Why it works: Complex software needs interfaces, data structures, and logic defined separately. This forces that separation.

Prompt pattern:
```
Break this into independent components:
1. [Component A] - can be implemented standalone
2. [Component B] - independent of A
3. [Integration] - how A and B connect
```

Best for: System design, API design, modular code, mathematical proofs

---

### Chain-of-Draft (CoD)

How it works: Generate a draft, then refine it in multiple passes.

Why it works: Separating generation from refinement produces better long-form content.

Prompt pattern:
```
Draft 1: Write initial version
Draft 2: Improve clarity and flow
Draft 3: Polish language and style
Final: Review and finalize
```

Best for: Documentation, essays, complex explanations, technical writing

---

### Reflexion

How it works: Generate a response, critique it, revise based on the critique.

Why it works: First drafts aren't always good enough. This makes the model check its own work.

Prompt pattern:
```
1. Generate initial solution
2. Critique: What could go wrong? What's missing?
3. Revise based on critique
4. Final answer
```

Best for: Code review, bug finding, quality assurance, critical analysis

---

### Self-consistent

How it works: Generate multiple attempts at the same problem, find the consensus answer.

Why it works: When you need high confidence in the answer.

Prompt pattern:
```
Attempt this problem 3 different ways.
Compare the results.
Report the answer that appears most consistently.
```

Best for: Fact-checking, calculations, verifiable claims

---

## Strategy selection guide

| If the task is... | Use strategy |
|---|---|
| "Solve this complex equation" | CoT |
| "Architect a new microservice" | AoT |
| "Give me 5 different story angles" | ToT |
| "Make this code bug-free" | Reflexion |
| "Verify this fact is correct" | Self-Consistent |
| "Write a detailed technical doc" | CoD |
| "Explain this concept step-by-step" | LTM |
| "Quick summary of this file" | Standard |

---

## Combining strategies

You can stack strategies for complex work:

Code review example:
1. AoT to break code into reviewable parts
2. Reflexion to self-critique each part
3. CoT to walk through the logic

Technical documentation example:
1. ToT to consider different structures
2. CoD to draft and refine
3. Reflexion to check completeness

---

## Using in prompts

Explicit request:
```markdown
Use Chain-of-Thought reasoning to solve this problem.
Think through each step explicitly before giving the answer.
```

Implicit cues:
```markdown
Before answering, consider multiple approaches and evaluate each.
```

```markdown
Generate a solution, then critique it for potential issues,
then provide a revised solution.
```

---

## Summary

| Need | Strategy | Key Phrase |
|------|----------|------------|
| Step-by-step logic | CoT | "Think through step by step" |
| Multiple options | ToT | "Consider multiple approaches" |
| Modular decomposition | AoT | "Break into independent parts" |
| Quality iteration | CoD | "Draft, then refine" |
| Self-checking | Reflexion | "Critique your solution" |
| High accuracy | Self-Consistent | "Try multiple times, find consensus" |
