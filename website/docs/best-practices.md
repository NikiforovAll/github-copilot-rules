---
sidebar_position: 2
title: Best Practices
---

# GitHub Copilot Best Practices

A guide to effective development patterns and techniques using GitHub Copilot.

## 1. Planning & Problem Solving

### 1.1. Explore → Plan → Code → Commit

- Research and understand the problem space using `@workspace` to explore the codebase
- Create a detailed implementation plan using Copilot's **Plan Mode**
- Write the code following the plan
- Commit with descriptive messages

**When to use:** New features, bug fixes, refactoring tasks. This is your daily driver for structured development.

💡 Use commits as checkpoints, commit frequently. Consider using a [commit message prompt](/category/prompts) to standardize commit messages.

💡 Use `git worktree` for parallel development

### 1.2. Test-Driven Development

- Write tests first, commit
- Implement code iteratively
- Refactor and commit improvements

**When to use:** AI-assisted development thrives when you have robust and comprehensive test suites.

💡 Make sure generated tests are meaningful and not just boilerplate. Keep the code quality as high as that of your production code.

### 1.3. Spec-Driven Development

- Create a Product Requirements Document (PRD) based on user input
- Generate tasks from the PRD
- Track and manage task progress

Consider using [spec-kit](https://github.com/github/spec-kit) for structured spec-driven development workflows.

**When to use:** Greenfield projects, PoC development, pet projects

💡 This methodology works best with clear requirements. Be prepared to iterate and refine - feel free to discard approaches that don't work well.

### 1.4. Brainstorming & Ideation

- Ask Copilot to brainstorm multiple approaches and iterate on ideas
- Use generated ideas as grounding context for subsequent prompts
- Build on previous suggestions rather than starting from scratch

**When to use:** Early stages of feature design, architectural decisions, or when stuck on a problem.

💡 Be very direct and explicit with the way you want to interact. E.g.: "give me 3 results and compare pros and cons for each result using markdown tables"

💡 For common tasks, you can create reusable [prompts](/category/patterns) to describe your problem-solving approach. See [pros-and-cons](/customizations/patterns/pros-and-cons) for an example.

## 2. Context Engineering

### 2.1. Context Grounding

- Provide relevant files and examples using `#file:` references
- Perform prior codebase/feature exploration with `@workspace` and ask Copilot to focus on relevant parts
- Use web search and MCP servers to gather additional context and information

💡 Hint Copilot in the right direction. E.g.: "Hint: you might want to check relevant tests for this functionality"

💡 Use [MCP servers](https://modelcontextprotocol.io/) for latest/authoritative information. E.g.: ([Microsoft Docs MCP](https://learn.microsoft.com/en-us/training/support/mcp), [Context7](https://context7.com/))

### 2.2. Project Memory

GitHub Copilot uses instruction files for project-wide context:

**Repository-level:** `.github/copilot-instructions.md`
- **Purpose:** Team-shared context and project knowledge
- **Content:** Architecture decisions, design patterns, coding standards
- **Best practice:** Keep it concise but comprehensive and high-level

**IDE-level:** `.vscode/instructions/*.instructions.md`
- **Purpose:** Development environment specific guidance
- **Content:** Testing conventions, coding style, editor-specific workflows
- **Examples:** [coding-guidelines](/customizations/instructions/coding-guidelines), [testing-xunit](/customizations/instructions/testing-xunit)

### 2.3. Session Management

- **Start new chat session** - Reset conversation context when switching to a different task
- **Context Control:** Keep conversations focused on a single topic or feature
- **Manual context management:** Use `#file:` to include specific files, `@workspace` for broader context

💡 Be aware of context limits and how they may impact response quality. It is better to keep your context short and focused.

## 3. Customization Overview

GitHub Copilot can be customized through several mechanisms:

### 3.1. Instructions

Instructions provide persistent context that shapes Copilot's behavior.

| Location | Scope | Purpose |
|----------|-------|---------|
| `.github/copilot-instructions.md` | Repository | Team-shared project standards |
| `.vscode/instructions/*.instructions.md` | IDE | Development environment guidance |

**Examples in this repo:**
- [coding-guidelines](/customizations/instructions/coding-guidelines)
- [testing-xunit](/customizations/instructions/testing-xunit)

### 3.2. Prompts

Prompts are reusable templates for common tasks.

| Location | Scope |
|----------|-------|
| `.github/prompts/*.prompt.md` | Repository-wide prompts |
| `.vscode/prompts/*.prompt.md` | IDE-specific prompts |

**Examples in this repo:**
- [code-review](/customizations/patterns/code-review) - Code review workflow
- [new-idea](/customizations/patterns/new-idea) - Idea exploration
- [pros-and-cons](/customizations/patterns/pros-and-cons) - Decision analysis

### 3.3. Agents

Agents extend Copilot with specialized capabilities for complex multi-step tasks.

**Location:** `.github/agents/*.agent.md`

**Examples in this repo:**
- [debug](/customizations/agents/debug) - Debugging assistance
- [research](/customizations/agents/research) - Research and exploration

### 3.4. Skills

VS Code provides built-in skills that Copilot can use:
- **Editor actions:** Navigate, select, edit code
- **Workspace operations:** File management, search
- **Terminal operations:** Run commands, view output
- **Web search:** Find documentation and examples online

Skills are automatically available and don't require configuration.

## 4. Tips for Success

### 4.1. Communication

- Be specific about requirements and constraints
- Provide context about your development environment
- Ask for explanations when solutions aren't clear

### 4.2. Iteration

- Start with working solutions, then optimize
- Use feedback loops to refine approaches
- Don't hesitate to backtrack and try different methods

### 4.3. Learning

- Experiment with different prompt styles
- Learn from Copilot's reasoning and explanations
- Build a personal knowledge base of effective patterns

## Resources

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [spec-kit](https://github.com/github/spec-kit) - Spec-driven development toolkit
- [Model Context Protocol](https://modelcontextprotocol.io/) - MCP servers for extended context
