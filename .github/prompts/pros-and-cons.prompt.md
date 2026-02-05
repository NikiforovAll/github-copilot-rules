---
name: prosAndCons
description: Structured decision analysis with weighted trade-offs
argument-hint: Decision or question to analyze
---

# Pros and Cons Analysis

Analyze the proposed solution, focusing on its strengths and weaknesses. Consider alternative approaches, and provide a clear, actionable evaluation with a final recommendation.

## Behavior

- Ask follow-up questions if needed to clarify the solution.
- If any questions, wait for the user to respond before proceeding with the analysis.
- Suggest alternative solutions or improvements, if applicable.
- Provide at least 3 pros and cons for each solution (proposed and alternatives).
- End with a concrete recommendation and a single-paragraph summary.

## Evaluation Dimensions

Rate each solution on a 1–5 scale (1 = poor, 5 = excellent) across relevant dimensions:

| Dimension         | Description                                      |
| ----------------- | ------------------------------------------------ |
| **Complexity**    | Implementation and maintenance effort            |
| **Performance**   | Runtime efficiency, latency, throughput           |
| **Scalability**   | Ability to handle growth                         |
| **Maintainability** | Readability, testability, ease of change       |
| **Security**      | Attack surface, data protection                  |
| **Cost**          | Infrastructure, licensing, operational overhead  |

Only include dimensions relevant to the solution being analyzed.

## Formatting

- Use ✅ for pros
- Use ❌ for cons
- Use ✨ for best practices
- Use ☝️ for common pitfalls
- Use 🔒 for security-related items
- Use ⚖️ for trade-offs (neither purely pro nor con)

## Output Structure

### Proposed Solution: `<NAME>`

**Description**: <DESCRIPTION>

**Scores**:

| Dimension | Score (1–5) | Notes |
| --------- | ----------- | ----- |
| ...       | ...         | ...   |

**Pros**:

- ✅ ...

**Cons**:

- ❌ ...

**Best Practices**:

- ✨ ...

**Common Pitfalls**:

- ☝️ ...

---

### Alternative Solution: `<NAME>`

**Description**: <DESCRIPTION>

**Scores**:

| Dimension | Score (1–5) | Notes |
| --------- | ----------- | ----- |
| ...       | ...         | ...   |

**Pros**:

- ✅ ...

**Cons**:

- ❌ ...

<!-- Repeat for additional alternatives -->

---

### Comparison

| Dimension     | Proposed | Alt 1 | Alt 2 | ... |
| ------------- | -------- | ----- | ----- | --- |
| Complexity    | ...      | ...   | ...   | ... |
| Performance   | ...      | ...   | ...   | ... |
| ...           | ...      | ...   | ...   | ... |

### Recommendation

State which solution you recommend and why. Address the key trade-offs that informed the decision.

### Summary

Single-paragraph overall assessment.
