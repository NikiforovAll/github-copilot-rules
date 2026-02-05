# 🤖 GitHub Copilot Handbook

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/nikiforovall/github-copilot-rules?style=social)](https://github.com/nikiforovall/github-copilot-rules/stargazers)
[![Last Commit](https://img.shields.io/github/last-commit/nikiforovall/github-copilot-rules)](https://github.com/nikiforovall/github-copilot-rules/commits/main)
[![Docusaurus](https://img.shields.io/badge/Built%20with-Docusaurus-45b8d8?logo=docusaurus)](https://nikiforovall.github.io/github-copilot-rules/)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fnikiforovall.github.io%2Fgithub-copilot-rules%2F&label=handbook)](https://nikiforovall.github.io/github-copilot-rules/)

A collection of [GitHub Copilot AI rules](https://code.visualstudio.com/docs/copilot/copilot-customization) for .NET development best practices.

> [!TIP]
> You can enhance Copilot's chat responses by providing it with contextual details about your team's workflow, tools, or project specifics.

## 📚 Customizations

This set of rules is a good starting point and should be customized to fit your specific needs.

Additionally, you can check [Awesome Copilot Repo](https://github.com/github/awesome-copilot) for more inspiration.

### Structure

```
.github/
├── instructions/      # Path-specific instructions (applyTo patterns)
├── prompts/           # Reusable prompts for common tasks
├── agents/            # Custom agent profiles
└── skills/            # Agent Skills (auto-loaded by context)
AGENTS.md              # Workspace-wide instructions
```

### 💻 .NET Development

Rules for writing clean, maintainable C# code:
- ✨ Modern C# coding patterns
- 🧪 Testing best practices
- 📁 Code organization
- 🛡️ Error handling
- 🔌 Dependency management

* Code-generation instructions - [coding-guidelines](.github/instructions/coding-guidelines.instructions.md), [coding-style](.github/instructions/coding-style.instructions.md)
* Test-generation instructions -  [testing-xunit](.github/instructions/testing-xunit.instructions.md)
* Code review instructions - [code-review](.github/instructions/code-review.instructions.md)

### ⏳ Git

* Commit message generation instructions - [git-message](.github/instructions/git-message.instructions.md)

### 🛠️ Agent Skills

* [research](.github/skills/research/SKILL.md) - Comprehensive in-depth research
* [dotnet-run-file](.github/skills/dotnet-run-file/SKILL.md) - Run C# scripts without projects
* [dotnet-test](.github/skills/dotnet-test/SKILL.md) - Run .NET tests with xUnit focus
* [dotnet-dependency](.github/skills/dotnet-dependency/SKILL.md) - Investigate .NET project dependencies

### Tools

Here is my top content extraction tools for GitHub Copilot:

* `#fetch` - fetch web page
* `#githubRepo` - fetch remote GitHub repository
* `#context7` - fetch docs
* `#codebase` - work with the code base

### MCP Servers

More at <https://www.mcpevals.io/blog/mcp-inspector-guide>

```bash
npx @modelcontextprotocol/inspector --config .vscode/.mcp.json --server microsoft.docs.mcp
```

* https://code.visualstudio.com/mcp

## How to Use This Repository

Copy the relevant files to your project's `.github/` directory. Modern Copilot uses standard locations:

- `.github/instructions/` - Path-specific instructions
- `.github/prompts/` - Reusable prompts
- `.github/skills/` - Agent Skills
- `AGENTS.md` - Workspace-wide instructions

Minimal `.vscode/settings.json`:

```json
{
  "chat.useAgentsMdFile": true,
  "github.copilot.chat.commitMessageGeneration.instructions": [
    { "file": ".github/instructions/git-message.instructions.md" }
  ],
  "github.copilot.chat.reviewSelection.enabled": true,
  "github.copilot.chat.reviewSelection.instructions": [
    { "file": ".github/instructions/coding-guidelines.instructions.md" },
    { "file": ".github/instructions/coding-style.instructions.md" }
  ],
  "github.copilot.chat.testGeneration.instructions": [
    { "file": ".github/instructions/testing-xunit.instructions.md" }
  ]
}
```

## 🚀 Motivation

### Productivity

You can create reusable instructions and prompts for your team to handle common tasks and GenAI scenarios effectively.

### Coding with Agents in Mind

Shift your mindset from being a code typist to an AI operator when appropriate. Start with an instruction prompt and gather as much context as possible. Once you clearly understand the task, determine the level of AI assistance needed.

💡 To stay in the "Productivity Zone", gain experience with various AI models.

### Treat AI as a Teammate

Building a successful, maintainable project requires clean, idiomatic, and consistent code. This is where *coding guidelines* are essential. They:
- Promote consistency, readability, and maintainability.
- Streamline collaboration and reduce technical debt.
- Provide context for AI tools, ensuring generated code aligns with project standards.

Without clear guidelines, AI contributions may introduce inconsistencies, increasing maintenance overhead.

### Documentation

Document your coding guidelines so it can be consumed by AI tools. Not only can it be used for additional context for code generation, but also now you can chat with LLMs about your coding guidelines. It becomes integral part of your project.

💡 For example, you can ask Copilot to review your code, and it will refer to the guidelines you provided.

### Agent Mode

With the introduction of [Agent Mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode), clear guidelines are crucial. They ensure consistency and independence in AI-generated contributions.

## Code Formatting and Linting

Although, coding guidelines could hint AI to generate code in a specific way, it is not a replacement for code formatting and linting tools. Further more, AI could disrupt your code formatting so make sure to use formatters and analyzers to keep your code clean and consistent.

## Changelog:

* New release <https://code.visualstudio.com/updates/v1_100> introduces a better way to provide context to Copilot. 
  * Custom Instructions (user/workspace)
  * Custom Prompts (user/workspace)

## Blogs

* https://nikiforovall.blog/productivity/2025/03/08/github-copilot-instructions-for-dotnet.html
* https://nikiforovall.blog/productivity/2025/04/19/github-copilot-prompt-engineering.html
* https://nikiforovall.blog/productivity/2025/05/03/github-copilot-prompt-engineering-code-review.html

## 💳 Credits

Inspired by <https://github.com/Aaronontheweb/dotnet-cursor-rules>
