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

:::tip
For complex tasks that require structured thinking, see [Reasoning Strategies](reasoning-strategies.md).
:::

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
