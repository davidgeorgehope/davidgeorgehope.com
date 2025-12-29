#!/bin/bash

# URL Validator Hook for Claude Code
# Runs after file writes, extracts URLs, validates them
# Returns non-zero exit code with error message if any URLs are broken

set -e

# Read the hook input from stdin (JSON with tool call details)
INPUT=$(cat)

# Extract the file path from the input
# For Edit/Write tools, the file_path is in the input
FILE_PATH=$(echo "$INPUT" | grep -o '"file_path"[[:space:]]*:[[:space:]]*"[^"]*"' | head -1 | sed 's/"file_path"[[:space:]]*:[[:space:]]*"//' | sed 's/"$//')

# If no file path found, exit silently
if [ -z "$FILE_PATH" ]; then
    exit 0
fi

# Only validate certain file types
case "$FILE_PATH" in
    *.html|*.htm|*.astro|*.md|*.mdx|*.jsx|*.tsx)
        ;;
    *)
        exit 0
        ;;
esac

# Check if file exists
if [ ! -f "$FILE_PATH" ]; then
    exit 0
fi

# Extract URLs from the file (http/https only)
# Use a more portable regex - [^...] character class with explicit whitespace chars
URLS=$(grep -oE 'https?://[^"'"'"'<> 	()]+' "$FILE_PATH" 2>/dev/null | sort -u || true)

if [ -z "$URLS" ]; then
    exit 0
fi

BROKEN_URLS=""
CHECKED=0
FAILED=0

while IFS= read -r url; do
    # Skip common false positives and placeholders
    case "$url" in
        *example.com*|*localhost*|*127.0.0.1*|*placeholder*|*your-*)
            continue
            ;;
    esac

    # Clean up URL (remove trailing punctuation that might have been captured)
    url=$(echo "$url" | sed 's/[,;:\.]*$//')

    CHECKED=$((CHECKED + 1))

    # Validate with a HEAD request (5 second timeout)
    HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" --head --max-time 5 "$url" 2>/dev/null || echo "000")

    # Consider 2xx and 3xx as valid, also 405 (method not allowed - some servers don't support HEAD)
    if [[ ! "$HTTP_CODE" =~ ^[23] ]] && [ "$HTTP_CODE" != "405" ]; then
        BROKEN_URLS="$BROKEN_URLS\n  - $url (HTTP $HTTP_CODE)"
        FAILED=$((FAILED + 1))
    fi
done <<< "$URLS"

if [ -n "$BROKEN_URLS" ]; then
    echo "⚠️  URL VALIDATION FAILED"
    echo ""
    echo "Found $FAILED broken URL(s) in $FILE_PATH:"
    echo -e "$BROKEN_URLS"
    echo ""
    echo "These URLs returned errors or could not be reached."
    echo "Please search for the correct URLs before including them."
    exit 1
fi

exit 0
