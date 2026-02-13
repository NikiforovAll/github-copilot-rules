---
sidebar_position: 2
title: Prompt Engineering
---

# Prompt Engineering

Prompt engineering is writing instructions that get AI models to do what you actually want. Sounds simple. It's not.

## What is prompt engineering?

You're designing the input that guides the model's output. Good prompts reduce hallucinations by forcing explicit reasoning. They improve accuracy by giving context and examples. They control format through structure. They enable complex reasoning by breaking problems down strategically.

Your prompts directly affect what you get back. A well-crafted prompt makes the difference between mediocre and exceptional results.

---

## Fundamentals

### Prompt structure

Good prompts have four parts:

**Identity or role** defines what the AI is:
```
You are an expert code reviewer focusing on security and performance.
```

**Instructions** tell it what to do:
```
Review this code for:
1. Security vulnerabilities
2. Performance bottlenecks
3. Code quality issues
```

**Context** gives background:
```
This is a payment processing module handling sensitive customer data.
```

**Examples** show the pattern (few-shot learning):
```
Input: def add(a, b): return a + b
Output: ✓ Simple, clear function. Consider adding type hints.
```

**Output format** (optional) specifies structure:
```
Return your review as JSON:
{
  "security_issues": [],
  "performance_issues": [],
  "suggestions": []
}
```

### Zero-shot vs few-shot

| Approach | Description | When to use |
|----------|-------------|-------------|
| Zero-shot | No examples, just instruction | Simple tasks where the model already knows the pattern |
| Few-shot | Include 2-5 examples | Complex patterns or specific output formats |

Zero-shot example:
```
Translate to French: "Hello, how are you?"
```

Few-shot example:
```
Translate to French:
"Good morning" → "Bonjour"
"Thank you" → "Merci"
"Hello, how are you?" → 
```

---

## Advanced reasoning strategies

Basic prompts work for simple tasks. For complex problems, you need reasoning strategies. These force the AI to follow specific cognitive patterns before answering.

The difference is noticeable. CoT reduced errors by 40-60% in early GPT-3 tests. ToT solved problems that standard prompting failed on entirely.

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
|-------------------|--------------|| "Solve this complex equation" | CoT |
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

---

## Best practices

### Be specific

❌ "Make this code better"

✓ "Refactor this code to improve performance, add error handling, and include type hints"

### Give context

❌ "Fix this bug"

✓ "This authentication function fails when the token expires. Fix the bug and add proper error messages."

### Use delimiters

XML tags, Markdown, or clear separators help:
```markdown
## Task
Analyze the following code

<code>
def process_data(data):
    return [x * 2 for x in data]
</code>

## Requirements
- Add error handling
- Support empty lists
- Add docstrings
```

### Iterate

Start simple, test, add complexity:
1. Basic instruction
2. Add examples
3. Include constraints
4. Specify output format
5. Add reasoning strategy

### Cache effectively

Put reusable content first to leverage caching:
```
[REUSABLE: System instructions, guidelines, examples]
[DYNAMIC: Specific user query]
```

---

## Common pitfalls

| Problem | Solution |
|---------|----------|
| Vague instructions | Be explicit about requirements and constraints |
| No examples | Provide 2-3 examples for complex patterns |
| Missing context | Include relevant background information |
| Ambiguous output format | Specify exact format (JSON, Markdown, etc.) |
| Overloading single prompt | Break complex tasks into sequential prompts |

---

## Resources

- [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering)
- [Anthropic Prompt Engineering](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
- [Prompt Engineering Guide](https://www.promptingguide.ai/) - Comprehensive collection of techniques and papers
