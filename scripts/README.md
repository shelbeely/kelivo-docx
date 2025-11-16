# Scripts

This directory contains utility scripts for maintaining the documentation.

## fetch-openrouter-models.sh

Fetches the current list of popular models from the OpenRouter API.

### Usage

```bash
./scripts/fetch-openrouter-models.sh
```

### Requirements

- `curl` - for making HTTP requests
- `jq` - for parsing JSON responses

### What it does

1. Fetches all available models from `https://openrouter.ai/api/v1/models`
2. Filters and categorizes popular models by:
   - General purpose (Claude, GPT-4, Gemini)
   - Budget-friendly (Llama, Mistral)
   - Reasoning (o1, Claude Opus)
   - Fast & efficient (Gemini Flash, Llama 70B)
3. Displays a summary with model counts and timestamps

This script is useful for:
- Verifying which models are currently available on OpenRouter
- Updating the documentation with accurate model names
- Checking pricing and availability before documenting new models

### Example Output

```
Popular OpenRouter Models
=================================================================

📊 POPULAR GENERAL PURPOSE MODELS:
  • anthropic/claude-3.5-sonnet
  • openai/gpt-4o
  • google/gemini-flash-1.5

💰 BUDGET-FRIENDLY MODELS:
  • meta-llama/llama-3.1-8b-instruct
  • mistralai/mistral-7b-instruct

...
```
