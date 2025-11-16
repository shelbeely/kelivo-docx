#!/bin/bash

# Script to fetch popular OpenRouter models
# Usage: ./scripts/fetch-openrouter-models.sh

set -e

echo "Fetching models from OpenRouter API..."

# Fetch models from OpenRouter API
MODELS_JSON=$(curl -s https://openrouter.ai/api/v1/models)

# Check if the request was successful
if [ -z "$MODELS_JSON" ]; then
    echo "Error: Failed to fetch models from OpenRouter API"
    exit 1
fi

echo ""
echo "==================================================================="
echo "Popular OpenRouter Models"
echo "==================================================================="
echo ""

# Parse and display popular models by category
echo "📊 POPULAR GENERAL PURPOSE MODELS:"
echo "$MODELS_JSON" | jq -r '.data[] | select(.id | contains("claude-3.5-sonnet") or contains("gpt-4o") or contains("gemini")) | "  • \(.id)"' | head -10

echo ""
echo "💰 BUDGET-FRIENDLY MODELS:"
echo "$MODELS_JSON" | jq -r '.data[] | select(.id | contains("llama-3.1-8b") or contains("mistral-7b") or contains("llama-3.2-3b")) | "  • \(.id)"' | head -10

echo ""
echo "🧠 REASONING MODELS:"
echo "$MODELS_JSON" | jq -r '.data[] | select(.id | contains("o1-preview") or contains("claude-3-opus") or contains("llama-3.1-405b")) | "  • \(.id)"' | head -10

echo ""
echo "⚡ FAST & EFFICIENT MODELS:"
echo "$MODELS_JSON" | jq -r '.data[] | select(.id | contains("gemini-flash") or contains("llama-3.1-70b")) | "  • \(.id)"' | head -10

echo ""
echo "==================================================================="
echo "Total available models: $(echo "$MODELS_JSON" | jq -r '.data | length')"
echo "Last updated: $(date -u '+%Y-%m-%d %H:%M:%S UTC')"
echo "==================================================================="
echo ""
echo "For full list, visit: https://openrouter.ai/models"
