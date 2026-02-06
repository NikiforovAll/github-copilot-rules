#!/bin/bash
# VS Code Copilot prompts sync - chezmoi wrapper
#
# Usage: ./co-chezmoi.sh <chezmoi-command> [args...]

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
SOURCE_DIR="$SCRIPT_DIR/.copilot"
TARGET_DIR="$APPDATA/Code/User/prompts"

if [[ $# -eq 0 ]]; then
    echo "VS Code Copilot prompts sync (chezmoi wrapper)"
    echo ""
    echo "Usage: $0 <command> [args...]"
    echo ""
    echo "Common commands:"
    echo "  apply       Apply changes from repo to target"
    echo "  diff        Show what would change"
    echo "  add <path>  Add file from target to repo"
    echo "  re-add      Update repo with target changes"
    echo "  status      Show managed files and their states"
    echo ""
    echo "Paths:"
    echo "  Source: $SOURCE_DIR"
    echo "  Target: $TARGET_DIR"
    exit 0
fi

cd "$TARGET_DIR"
exec chezmoi --source="$SOURCE_DIR" --destination="$TARGET_DIR" "$@"
