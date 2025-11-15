---
title: Terminology
date: 2025-09-02 01:16:27
---

# Terminology

Understanding key AI and Kelivo concepts will help you get the most from the app.

## Core AI Concepts

### Model
The underlying AI system that processes your messages and generates responses. Examples:
- **OpenAI**: gpt-4o, gpt-4-turbo, gpt-3.5-turbo, o1-preview
- **Google**: gemini-1.5-pro, gemini-1.5-flash, gemini-2.0-flash
- **Anthropic**: claude-3.5-sonnet, claude-3-opus, claude-3-haiku

Each model has different capabilities, speeds, costs, and specializations.

### Context Window
The maximum amount of text (measured in tokens) that a model can process at once, including both your prompt and the model's response.

Examples:
- GPT-4o: 128,000 tokens (~96,000 words)
- Claude 3.5 Sonnet: 200,000 tokens (~150,000 words)
- Gemini 1.5 Pro: 2,000,000 tokens (~1.5 million words)

When a conversation exceeds the context window, older messages may be dropped or summarized.

### Token
A sub-word unit used for counting text in AI models. Tokens can be words, parts of words, or punctuation.

**Rough estimates**:
- 1 token ≈ 0.75 words in English
- 100 tokens ≈ 75 words
- 1,000 tokens ≈ 750 words

Tokens are used for:
- **Billing**: Providers charge per token (input + output)
- **Context limits**: Determines how much conversation fits in memory
- **Rate limits**: Some providers limit tokens per minute

**Tip**: Use shorter messages and clear conversation history to save tokens.

### Temperature
A parameter (0.0 to 2.0) that controls response randomness and creativity.

- **0.0 - 0.3**: Focused, deterministic, factual (best for coding, math, analysis)
- **0.4 - 0.7**: Balanced creativity and coherence (general conversation)
- **0.8 - 1.2**: Creative, varied responses (brainstorming, storytelling)
- **1.3 - 2.0**: Highly random, experimental (creative writing, exploration)

**Default recommendation**: 0.7 for most use cases.

### Top-p (Nucleus Sampling)
A sampling method (0.0 to 1.0) that controls output diversity by considering only the most likely tokens.

- **0.1 - 0.5**: More focused, consistent responses
- **0.6 - 0.9**: Balanced diversity (recommended)
- **0.95 - 1.0**: Maximum diversity, more unpredictable

**Common setting**: 0.9. Usually used together with temperature.

### Top-k
Limits the model to choose from only the top K most likely next tokens.

- **Lower values (1-10)**: More focused output
- **Higher values (40-100)**: More diverse output

Not all models or providers support top-k. Top-p is more commonly used.

## Kelivo-Specific Terms

### Provider
An AI service that offers API access to models. Kelivo supports:
- **OpenAI**: ChatGPT models (GPT-4, GPT-3.5, o1, etc.)
- **Anthropic**: Claude models
- **Google**: Gemini models
- **Zhipu**: GLM models (Chinese provider)
- **Custom**: Self-hosted or compatible APIs

Each provider requires its own API key and has different pricing, features, and rate limits.

### Assistant
A reusable configuration in Kelivo that bundles:
- Default provider and model
- System prompt (personality/instructions)
- Temperature and sampling parameters
- Memory settings
- Tool access (TTS, search, MCP)

**Benefits**:
- Quickly switch between different AI personas
- Maintain consistent behavior across chats
- Share configurations (export/import)

**Examples**:
- "Python Tutor" - GPT-4o with coding-focused prompt
- "Creative Writer" - Claude 3.5 Sonnet with high temperature
- "Research Assistant" - Gemini Pro with web search enabled

### System Prompt
Instructions that define an assistant's role, behavior, and constraints. The system prompt is sent with every message but isn't visible in the chat.

**Example**:
```
You are an expert Python developer. Provide clean, well-commented code 
with explanations. Focus on best practices and efficient solutions.
```

System prompts help:
- Set personality and tone
- Define expertise areas
- Establish rules and limitations
- Provide context or background

See [Prompts](/docs/assistant/prompts) for best practices.

### Memory
A feature that allows assistants to remember key information across conversations.

**How it works**:
1. Important facts are extracted from conversations
2. Summaries are stored locally on your device
3. Relevant memories are included in future prompts

**Use cases**:
- Personal AI that remembers your preferences
- Project assistant that recalls previous discussions
- Long-term research companion

**Privacy**: All memories are stored locally and never uploaded.

## Advanced Features

### Tool Calling (Function Calling)
The ability for AI models to request structured actions like:
- Searching the web
- Performing calculations
- Querying databases
- Calling external APIs

Kelivo supports tool calling through:
- Built-in web search
- MCP (Model Context Protocol) integrations

### MCP (Model Context Protocol)
An open standard for connecting AI models to external tools and data sources.

**MCP enables**:
- File system access
- Database queries
- Git operations
- Custom tool integrations

See [MCP documentation](/docs/assistant/mcp) for setup details.

### API Key
A secret credential that authenticates your requests to an AI provider.

**Important**:
- Keep API keys private and secure
- Never share keys in screenshots or public forums
- Revoke compromised keys immediately
- Monitor usage to prevent unexpected charges

In Kelivo, API keys are stored in encrypted device storage.

### Base URL
The endpoint URL for API requests. You can customize this to:
- Use API gateways or proxies
- Connect to self-hosted models
- Route through corporate networks

**Examples**:
- OpenAI default: `https://api.openai.com/v1`
- Custom proxy: `https://my-gateway.com/v1`
- Local model: `http://localhost:8000`

### Embeddings
Vector representations of text used for semantic search and similarity matching.

**Use cases**:
- Document search
- Context retrieval for Memory
- Semantic similarity

Kelivo may use embeddings internally for memory and search features.

### TTS (Text-to-Speech)
Technology that converts written text to spoken audio.

**In Kelivo**:
- Tap the speaker icon on any message
- Customize voice, speed, and pitch
- Supports multiple languages

Useful for:
- Accessibility
- Hands-free interaction
- Language learning

### Vision (Multimodal)
The ability of AI models to process and understand images in addition to text.

**Vision-capable models**:
- GPT-4o, GPT-4 Turbo (OpenAI)
- Claude 3.5 Sonnet, Claude 3 Opus (Anthropic)
- Gemini 1.5 Pro/Flash (Google)

**Use cases**:
- Describe images
- Extract text from screenshots (OCR)
- Analyze diagrams or charts
- Answer questions about photos

### Rate Limit
Restrictions on how many requests you can make to an API within a time period.

**Common limits**:
- Requests per minute (RPM)
- Tokens per minute (TPM)
- Requests per day (RPD)

**Example**: OpenAI free tier might allow 3 RPM and 40,000 TPM.

**Tip**: Upgrade to paid tiers for higher limits, or wait between requests.

### Streaming
Receiving AI responses in real-time as they're generated, rather than waiting for the complete response.

**Benefits**:
- Faster perceived response time
- Better user experience for long outputs
- Can stop generation mid-response

Kelivo supports streaming for compatible providers.

## Model-Specific Terms

### Fine-tuning
Training a model on custom data to specialize its behavior.

**Note**: Kelivo doesn't support fine-tuning directly. Use provider platforms (OpenAI, etc.) for this.

### Reasoning Models (o1, o3)
Advanced models that think through problems step-by-step before answering.

**Characteristics**:
- Better at complex reasoning, math, and coding
- Longer processing time
- Different pricing structure
- May not support all features (vision, streaming)

**Examples**: o1-preview, o1-mini (OpenAI)

### Flash Models
Optimized for speed and cost-efficiency, with slightly lower capability than flagship models.

**Examples**:
- gemini-1.5-flash (Google)
- claude-3-haiku (Anthropic)

**Use cases**: Quick tasks, high-volume usage, cost-sensitive applications.

## Need More Help?

- Check the [FAQ](/docs/getting-started/faq) for common questions
- Read [Assistant documentation](/docs/assistant/basics) for configuration details
- Explore [Provider guides](/docs/providers/openai) for specific setup instructions
