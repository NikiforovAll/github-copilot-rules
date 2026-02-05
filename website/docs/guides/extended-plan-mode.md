---
sidebar_position: 6
title: Extended Plan Mode
---

# Extended Plan Mode

A structured four-stage approach for implementing complex features with AI coding assistants. Use this when quality and correctness are critical.

## The Four Stages

### Stage 1: Context Priming

- Provide the AI with proper context about the codebase
- Share requirements and implementation details
- Help it understand existing patterns and architecture

### Stage 2: Planning

- Use **Plan Mode** to create an implementation plan
- Review the plan thoroughly before proceeding
- Ensure all edge cases and requirements are covered

### Stage 3: Implementation

- Let the AI follow the plan autonomously
- Monitor progress and inspect changes as they happen
- Provide additional context or course-correct if needed

### Stage 4: Evaluation

The goal is to **close the feedback loop** — give the AI a way to verify its own work without manual inspection. Tests are one option, but not the only one.

- **Unit/integration tests** — the most reliable signal
- **Build checks** — does the code compile and pass linting?
- **E2E/visual verification** — Playwright, screenshots, or browser preview for frontend
- **Script-based validation** — a custom script that checks expected output, file structure, or API responses
- **Self-review prompt** — ask the AI to review its own diff against the original requirements

:::warning Close the Loop
If there's no automated way to verify the result, the AI can't self-correct. Before starting, ask yourself: *"How will the AI know it's done correctly?"* — and set that up first.
:::

:::tip Supervisory Role
Act as a supervisor during implementation — stay engaged but let the AI work through the plan independently.
:::

## Workflow

```mermaid
flowchart TD
    Start([Start]) --> Prime

    subgraph S1["Stage 1 — Context Priming"]
        Prime[Share codebase context,<br/>requirements, patterns]
    end

    subgraph S2["Stage 2 — Planning"]
        Understand[Understand context] --> Plan[Create implementation plan]
        Plan --> Review{Plan<br/>approved?}
        Review -->|Revise| Plan
    end

    subgraph S3["Stage 3 — Implementation"]
        Implement[Implement autonomously]
        Monitor{Course correction<br/>needed?}
        Guide[Provide guidance]
        Implement --> Monitor
        Monitor -->|Yes| Guide --> Implement
    end

    subgraph S4["Stage 4 — Evaluation"]
        Verify[Verify: tests, build,<br/>E2E, scripts, self-review]
        Pass{Verification<br/>passed?}
        Fix[Analyze failures & fix]
        Verify --> Pass
        Pass -->|No| Fix --> Implement
    end

    Prime --> Understand
    Review -->|Yes| Implement
    Monitor -->|No| Verify
    Pass -->|Yes| Done([Complete])

    style S1 fill:#dbeafe,stroke:#0969da
    style S2 fill:#dbeafe,stroke:#0969da
    style S3 fill:#f0fdf4,stroke:#16a34a
    style S4 fill:#fef3c7,stroke:#d97706
```

## When to Use

| Scenario | Recommended? |
|----------|-------------|
| Complex multi-step features | Yes |
| Production code requiring correctness | Yes |
| Quick bug fixes or one-liners | No — just do it directly |
| Exploratory prototyping | No — iterate freely instead |
