---
title: "Skills Overview"
sidebar_position: 1
---

# Skills

Skills are reusable, composable capabilities that extend GitHub Copilot Chat with specialized knowledge and workflows.

## What are Skills?

Skills provide:
- **Specialized knowledge** for specific domains (e.g., .NET testing, dependency management)
- **Structured workflows** for common development tasks
- **Tool permissions** to control what actions a skill can perform
- **Progressive disclosure** with references for advanced scenarios

## Skill Structure

Skills are defined in `.github/skills/<skill-name>/SKILL.md`:

```
.github/
└── skills/
    └── dotnet-test/
        ├── SKILL.md                    # Main skill definition
        └── references/
            ├── theory-parameter-filtering.md
            ├── blame-mode.md
            └── parallel-execution.md
```

## Available Skills

| Skill | Purpose |
|-------|---------|
| [dotnet-run-file](/customizations/skills/dotnet-run-file) | Run C# scripts without project files |
| [dotnet-test](/customizations/skills/dotnet-test) | Selective .NET test execution |
| [dotnet-dependency](/customizations/skills/dotnet-dependency) | Investigate and manage NuGet dependencies |

## Installing Skills

Skills can be installed to `~/.copilot/skills/` for use across all projects.

### Using the Install Script

```bash
# List available skills
./scripts/install-skills.sh --list

# Install all skills
./scripts/install-skills.sh --all

# Install specific skills
./scripts/install-skills.sh dotnet-test dotnet-dependency
```

**PowerShell (Windows):**
```powershell
.\scripts\install-skills.ps1 -List
.\scripts\install-skills.ps1 -All
.\scripts\install-skills.ps1 dotnet-test, dotnet-dependency
```

### Manual Installation

Copy skill folders to `~/.copilot/skills/`.

## Skill Frontmatter

```yaml
---
name: skill-name
description: When to trigger this skill
allowed-tools: Bash(pattern), Read, Grep, Glob
---
```

- **name**: Skill identifier
- **description**: Used by Copilot to determine when to invoke
- **allowed-tools**: Restricts tool access for security
