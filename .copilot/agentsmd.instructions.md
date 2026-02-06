---
description: General instructions for the agent.
applyTo: '**'
---

<use_agents_memory>
Read the @AGENTS.md if present to understand the overall instructions for the agent.
</use_agents_memory>

<concise>
Be concise. Always optimize for concise responses. Remove all fluff from your response.
Only include what is absolutely necessary in your response. Be ruthlessly concise.
Sacrifice grammar if you have to
</concise>

<use_rg>
You run in an environment where `rg` is available; whenever a search requires fast text searching, use `rg <pattern>` (or set additional flags as appropriate). USE it over `grep`.
</use_rg>

<use_fd>
You run in an environment where `fd` is available; whenever a search requires fast file searching, use `fd <pattern>` (or set additional flags as appropriate).
</use_fd>

<comments>
DO NOT add unnecessary comments, comment should explain WHY not WHAT. IMPORTANT: Add comments only when necessary.
IMPORTANT: DO NOT remove existing comments.
</comments>

<user_mnemonics>
Here is an example of user mnemonics, when user specifies:

>bg - means "Run task in the background"
>pl - means "Run in parallel"
>td - means "Add task to TODO list using `TodoWrite`
>aq - means "Ask user a question using `AskUserQuestion`"
>skl - means "Find matching skill and use it"
>sw - means "Search Web"
>memorize - means "If important information from this prompt is missing in CLAUDE.md (aka memory), update it"
>ct - means "Provide citations for your answers when possible"
</user_mnemonics>

<dotnet_build_rules>
- ALWAYS build via: `dotnet build -p:WarningLevel=0 /clp:ErrorsOnly`
</dotnet_build_rules>
