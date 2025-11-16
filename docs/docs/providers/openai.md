---
title: OpenAI
date: 2025-09-02 01:16:27
---

# OpenAI Provider

OpenAI offers industry-leading AI models including GPT-4, GPT-3.5, and the reasoning-focused o1 series.

## Getting Started

### Create an API Key

1. Visit https://platform.openai.com
2. Sign up or log in
3. Navigate to **API keys** section
4. Click **Create new secret key**
5. **Copy the key immediately** (it won't be shown again)
6. **Name it** for tracking (e.g., "Kelivo Mobile")

### Add to Kelivo

1. Go to **Settings → Providers**
2. Tap **Add Provider** or **+**
3. Fill in details:
   - **Name**: "OpenAI" or custom name
   - **Provider Type**: OpenAI
   - **Base URL**: `https://api.openai.com/v1` (default)
   - **API Key**: Paste your key
   - **Default Model**: gpt-4o (or your preferred model)
4. **Save**

### Test Connection

Send a test message to verify:
```
User: Hello!
AI: Hello! How can I help you today?
```

If it works, you're all set!

## Available Models

### GPT-4 Series (Most Capable)

**gpt-4o** (Recommended)
- **Best for**: General use, vision, most tasks
- **Context**: 128K tokens
- **Features**: Text, vision, function calling, JSON mode
- **Speed**: Fast
- **Cost**: Moderate
- **Use when**: You need high quality and speed

**gpt-4-turbo**
- **Best for**: Complex tasks, long documents
- **Context**: 128K tokens
- **Features**: Text, vision, function calling
- **Speed**: Moderate
- **Cost**: Higher
- **Use when**: You need maximum capability

**gpt-4** (Original)
- **Best for**: Consistency, proven reliability
- **Context**: 8K tokens
- **Features**: Text only
- **Speed**: Slower
- **Cost**: High
- **Use when**: Legacy applications

### GPT-3.5 Series (Fast & Economical)

**gpt-3.5-turbo**
- **Best for**: Quick tasks, high volume, cost-sensitive use
- **Context**: 16K tokens
- **Features**: Text, function calling
- **Speed**: Very fast
- **Cost**: Low
- **Use when**: Simple tasks, speed matters

### o1 Series (Reasoning Models)

**o1-preview**
- **Best for**: Complex reasoning, math, code, science
- **Context**: 128K tokens
- **Features**: Deep reasoning, no streaming
- **Speed**: Slower (thinks before responding)
- **Cost**: Higher
- **Use when**: Problems require step-by-step thinking

**o1-mini**
- **Best for**: Coding, STEM problems, cost-conscious reasoning
- **Context**: 128K tokens
- **Features**: Faster reasoning, more affordable
- **Speed**: Moderate
- **Cost**: Lower than o1-preview
- **Use when**: Coding or math on a budget

### Model Comparison

| Model | Speed | Quality | Cost | Vision | Best Use Case |
|-------|-------|---------|------|--------|---------------|
| gpt-4o | ⚡⚡⚡ | ⭐⭐⭐⭐⭐ | 💰💰 | ✅ | General purpose |
| gpt-4-turbo | ⚡⚡ | ⭐⭐⭐⭐⭐ | 💰💰💰 | ✅ | Long documents |
| gpt-3.5-turbo | ⚡⚡⚡⚡ | ⭐⭐⭐ | 💰 | ❌ | Simple tasks |
| o1-preview | ⚡ | ⭐⭐⭐⭐⭐ | 💰💰💰💰 | ❌ | Complex reasoning |
| o1-mini | ⚡⚡ | ⭐⭐⭐⭐ | 💰💰 | ❌ | Coding, STEM |

## Features & Capabilities

### Vision (Multimodal)

**Supported models**: gpt-4o, gpt-4-turbo, gpt-4-vision-preview

**Use cases**:
- Describe images
- Extract text from screenshots
- Analyze charts and diagrams
- Answer questions about photos
- Generate image captions

**Example**:
```
User: [attaches screenshot] What's in this error message?
AI: The error shows a "Module not found" exception...
```

**Tips**:
- High-resolution images cost more tokens
- Consider resizing large images
- Works with multiple images in one message

### Function Calling

**Supported models**: All except o1 series (limited support)

**Use cases**:
- Structured data extraction
- API integrations
- Tool usage (web search, calculations)
- Database queries

**Example**:
```
User: What's the weather in Tokyo?
AI: [calls get_weather function with location="Tokyo"]
AI: It's currently 22°C and partly cloudy in Tokyo.
```

### JSON Mode

**Supported models**: gpt-4o, gpt-4-turbo, gpt-3.5-turbo

**Use cases**:
- Structured output
- Data extraction
- API responses

**Enable**: Add to request (via custom prompts or provider settings)
```
{
  "response_format": { "type": "json_object" }
}
```

**Example**:
```
User: Extract: "John works at Google as a developer"
AI: {"name": "John", "company": "Google", "role": "developer"}
```

### Streaming

**All models support streaming** for real-time responses.

**Benefits**:
- Faster perceived response time
- Can stop generation mid-response
- Better user experience

Kelivo enables streaming by default.

## Configuration Tips

### Temperature Settings

**For different models**:
- **GPT-4o, GPT-4**: 0.7 (default, balanced)
- **GPT-3.5**: 0.5-0.7 (more focused)
- **o1 series**: Fixed internally (don't adjust)

**For different tasks**:
- **Code**: 0.2-0.3 (deterministic)
- **Writing**: 0.8-1.0 (creative)
- **Analysis**: 0.3-0.5 (focused)
- **Brainstorming**: 1.0-1.2 (diverse)

### Max Tokens

Control response length:
- **Short answers**: 256-512 tokens
- **Medium**: 1024-2048 tokens
- **Long form**: 4096+ tokens

**Tip**: Leave headroom in context window for conversation history.

### System Prompts

OpenAI models respond well to:
- Clear role definitions
- Numbered instructions
- Examples (few-shot)
- Explicit formatting requests

**Example**:
```
You are a senior Python developer. Provide clean, well-documented code with type hints. Always consider edge cases and error handling.
```

## Pricing & Rate Limits

### Pricing (as of 2025)

**Input/Output tokens**:
- **gpt-4o**: $2.50/$10.00 per 1M tokens
- **gpt-4-turbo**: $10.00/$30.00 per 1M tokens
- **gpt-3.5-turbo**: $0.50/$1.50 per 1M tokens
- **o1-preview**: $15.00/$60.00 per 1M tokens
- **o1-mini**: $3.00/$12.00 per 1M tokens

**Note**: Prices may change. Check https://openai.com/pricing for current rates.

### Rate Limits

**Free tier**:
- 3 requests per minute (RPM)
- 40,000 tokens per minute (TPM)
- 200 requests per day (RPD)

**Paid tier 1**:
- 3,500 RPM (GPT-4)
- 90,000 TPM
- Higher limits after usage

**Paid tier 2+**:
- 5,000+ RPM
- 450,000+ TPM
- Scale with usage

**Tip**: Upgrade to paid tier for better limits. Monitor usage in OpenAI dashboard.

## Troubleshooting

### Rate Limit Errors (429)

**Error**: "Rate limit exceeded"

**Solutions**:
1. **Wait**: Limits reset per minute
2. **Upgrade tier**: Use more, get higher limits
3. **Switch model**: Use GPT-3.5 if GPT-4 is limited
4. **Reduce frequency**: Add delays between requests

### Invalid API Key (401)

**Error**: "Incorrect API key provided"

**Solutions**:
1. **Verify key**: Copy entire key, no extra spaces
2. **Check status**: Ensure key hasn't been revoked
3. **Regenerate**: Create new key if lost
4. **Organization**: Verify org access if applicable

### Model Not Found (404)

**Error**: "The model 'xyz' does not exist"

**Solutions**:
1. **Check name**: Use exact model names (e.g., "gpt-4o" not "gpt4o")
2. **Access**: Verify your account has access (o1 requires waitlist approval)
3. **Region**: Some models limited to certain regions

### Context Length Exceeded

**Error**: "This model's maximum context length is..."

**Solutions**:
1. **Shorten input**: Reduce conversation history
2. **Use larger model**: GPT-4-turbo has 128K context
3. **Summarize**: Condense old messages
4. **Clear history**: Start fresh conversation

### Slow Responses

**Solutions**:
1. **Use faster model**: GPT-3.5 or gpt-4o
2. **Streaming**: Should be enabled by default
3. **Reduce load**: Shorter prompts, less context
4. **Check status**: https://status.openai.com

## Advanced Features

### Organization ID

For teams with multiple projects:

1. Find your org ID: https://platform.openai.com/account/organization
2. Add custom header in Kelivo:
   ```json
   {
     "OpenAI-Organization": "org-xxxxxxxxxxxxx"
   }
   ```

### Azure OpenAI

Use OpenAI models via Azure:

**Base URL**:
```
https://YOUR-RESOURCE-NAME.openai.azure.com
```

**API Key**: Azure OpenAI key (not OpenAI key)

**Model Deployment**: Use your deployment name

See [Custom Requests](/docs/assistant/custom-requests) for details.

### OpenRouter - Access 200+ Models via OpenAI API

**OpenRouter** is an OpenAI-compatible gateway that aggregates models from multiple providers into a single API. It offers significantly more model choices than OpenAI alone, with unified pricing and a single API key.

#### Why Use OpenRouter?

**Access to 200+ Models**:
- OpenAI (GPT-4, GPT-3.5)
- Anthropic (Claude 3.5, Claude 3)
- Google (Gemini Pro, Gemini Flash)
- Meta (Llama 3.1, Llama 3.2)
- Mistral (Mistral Large, Mistral Medium)
- Cohere (Command R+)
- Open-source models (Mixtral, Yi, Qwen)
- And many more

**Benefits**:
- **Single API key** for all providers
- **Unified pricing** across models
- **Lower costs** for many models
- **No rate limits** on most models
- **Fallback support** (auto-switch if model is down)
- **Model routing** (automatically choose best model)
- **Usage tracking** in one dashboard

#### Getting Started with OpenRouter

**1. Create an API Key**

1. Visit https://openrouter.ai
2. Sign up or log in
3. Go to **Keys** section
4. Click **Create Key**
5. **Name your key** (e.g., "Kelivo")
6. **Copy the key** (starts with `sk-or-v1-`)
7. **Add credits** (minimum $5, pay-as-you-go)

**2. Add to Kelivo**

1. Go to **Settings → Providers**
2. Tap **Add Provider** or **+**
3. Fill in details:
   - **Name**: "OpenRouter" or custom name
   - **Provider Type**: OpenAI (OpenRouter is OpenAI-compatible)
   - **Base URL**: `https://openrouter.ai/api/v1`
   - **API Key**: Paste your OpenRouter key (sk-or-v1-...)
   - **Default Model**: See model recommendations below
4. **Save**

**3. Test Connection**

Send a test message to verify:
```
User: Hello!
AI: Hello! How can I help you today?
```

#### Recommended Models on OpenRouter

::: tip Model Availability
Model names, pricing, and availability change frequently. For the most up-to-date list of available models, visit https://openrouter.ai/models

The models listed below are examples based on common options. Always verify current availability and pricing.
:::

**Best Value Models**:

**anthropic/claude-3.5-sonnet** (Highly Recommended)
- **Best for**: General purpose, excellent quality
- **Context**: 200K tokens
- **Cost**: ~$3/$15 per 1M tokens (input/output)
- **Features**: Vision, function calling, artifacts
- **Why**: Best quality-to-price ratio, beats GPT-4o

**google/gemini-flash-1.5** (Excellent Value)
- **Best for**: Fast responses, cost-conscious use
- **Context**: 1M tokens
- **Cost**: ~$0.075/$0.30 per 1M tokens (input/output)
- **Features**: Vision, fast inference, long context
- **Why**: Excellent speed-to-cost ratio

**meta-llama/llama-3.1-70b-instruct** (Open Source)
- **Best for**: Privacy-conscious, open source preference
- **Context**: 128K tokens
- **Cost**: ~$0.50/$0.75 per 1M tokens
- **Features**: Strong reasoning, fast
- **Why**: Excellent open-source option

**openai/gpt-4o** (Latest OpenAI)
- **Best for**: Tasks requiring latest GPT-4 capabilities
- **Context**: 128K tokens
- **Cost**: $2.50/$10 per 1M tokens (same as OpenAI)
- **Features**: Vision, function calling, fast
- **Why**: Latest OpenAI model, same price

**Budget Options**:

**mistralai/mistral-7b-instruct** (~$0.07/$0.07 per 1M tokens)
- Fast, cheap, good for simple tasks

**meta-llama/llama-3.1-8b-instruct** (~$0.06/$0.06 per 1M tokens)
- Very affordable, good for basic tasks

**meta-llama/llama-3.2-3b-instruct** (~$0.06/$0.06 per 1M tokens)
- Extremely cheap, good for basic tasks

**Premium Options**:

**anthropic/claude-3-opus** (~$15/$75 per 1M tokens)
- Most capable Claude model, best reasoning

**openai/o1-preview** (~$15/$60 per 1M tokens)
- Advanced reasoning, complex problem solving

**google/gemini-exp-1206** (Free during preview)
- Experimental Gemini with latest features, free during preview period

#### Model Categories

**By Use Case**:

**General Purpose**:
- anthropic/claude-3.5-sonnet (best overall)
- openai/gpt-4o (latest GPT-4)
- google/gemini-flash-1.5 (fast and affordable)

**Coding**:
- anthropic/claude-3.5-sonnet (excellent at code)
- meta-llama/llama-3.1-405b-instruct (open source, powerful)
- openai/gpt-4o (strong coding)

**Long Context**:
- google/gemini-flash-1.5 (1M tokens)
- anthropic/claude-3.5-sonnet (200K tokens)
- openai/gpt-4o (128K tokens)

**Fast & Cheap**:
- google/gemini-flash-1.5 (very fast)
- mistralai/mistral-7b-instruct (cheap)
- meta-llama/llama-3.2-3b-instruct (cheapest)

**Reasoning & Analysis**:
- openai/o1-preview (advanced reasoning)
- anthropic/claude-3-opus (deep thinking)
- perplexity/llama-3.1-sonar-large (web search integrated)

**Vision**:
- anthropic/claude-3.5-sonnet (excellent vision)
- openai/gpt-4o (strong vision)
- google/gemini-flash-1.5 (good vision)

#### Pricing Comparison

OpenRouter often offers **better pricing** than direct providers:

| Model | OpenRouter | Direct Provider | Savings |
|-------|------------|-----------------|---------|
| Claude 3.5 Sonnet | $3/$15 per 1M | $3/$15 per 1M | Same |
| GPT-4o | $2.50/$10 per 1M | $2.50/$10 per 1M | Same |
| Gemini Flash 1.5 | $0.075/$0.30 per 1M | $0.075/$0.30 per 1M | Same |
| Llama 3.1 70B | $0.50/$0.75 per 1M | Self-host | Much easier |
| Mistral 7B | $0.07/$0.07 per 1M | Self-host | Much easier |

**Pay-as-you-go**: No subscriptions, only pay for what you use.

#### OpenRouter-Specific Features

**Model Fallbacks**:
Add to custom headers:
```json
{
  "X-Title": "Kelivo Chat",
  "HTTP-Referer": "https://kelivo.app",
  "X-Model-Fallbacks": ["anthropic/claude-3.5-sonnet", "openai/gpt-4o"]
}
```
If primary model fails, automatically uses fallback.

**Model Routing** (Auto-select):
Use `openrouter/auto` as model name to let OpenRouter choose the best model for your prompt.

**Provider Preferences**:
Route models through specific providers for better rates or availability.

**Usage Tracking**:
Monitor all model usage in one dashboard at https://openrouter.ai/activity

#### Configuration Tips

**Custom Headers** (Optional but Recommended):

Add these in Kelivo provider settings:
```json
{
  "HTTP-Referer": "https://kelivo.app",
  "X-Title": "Kelivo Mobile"
}
```

**Benefits**:
- Helps OpenRouter improve service
- May unlock better rates in future
- Enables better analytics

**Model Selection**:

Format: `provider/model-name`
- ✅ Correct: `anthropic/claude-3.5-sonnet`
- ✅ Correct: `openai/gpt-4o`
- ✅ Correct: `google/gemini-pro-1.5`
- ❌ Wrong: `claude-3.5-sonnet` (missing provider)

**Find Models**: Browse all available models at https://openrouter.ai/models

::: tip Verify Before Use
Model availability and pricing change regularly. Check the official OpenRouter models page for current information before configuring your provider.
:::

#### Troubleshooting

**Invalid Model Name**:
- Use full format: `provider/model-name`
- Check model list: https://openrouter.ai/models
- Some models require special access

**Insufficient Credits**:
- Add more credits at https://openrouter.ai/credits
- Minimum $5 top-up
- Credits never expire

**Rate Limits**:
- Most models have no rate limits
- Some premium models may have provider-specific limits
- Check model page for details

**Model Unavailable**:
- Provider may be temporarily down
- Use model fallbacks feature
- Try alternative model

#### Cost Optimization

**Smart Model Selection**:
1. **Start with affordable models**: google/gemini-flash-1.5 or meta-llama/llama-3.1-8b-instruct for most tasks
2. **Use cheap models**: mistralai/mistral-7b-instruct for simple tasks
3. **Reserve premium**: anthropic/claude-3.5-sonnet for complex work
4. **Avoid expensive**: Only use o1-preview or claude-3-opus when needed

**Monitor Usage**:
- Check dashboard: https://openrouter.ai/activity
- Set up spending alerts
- Review per-model costs

**Context Management**:
- Keep conversations focused
- Clear history regularly
- Use smaller models for follow-ups

#### Resources

**Official Links**:
- OpenRouter Homepage: https://openrouter.ai
- Model List: https://openrouter.ai/models
- Pricing: https://openrouter.ai/docs#pricing
- API Docs: https://openrouter.ai/docs
- Activity Dashboard: https://openrouter.ai/activity

**Community**:
- Discord: https://discord.gg/openrouter
- GitHub: https://github.com/OpenRouterTeam

### Other OpenAI-Compatible Providers

**Examples**:
- **Together AI**: Open-source models, fast inference
- **Groq**: Ultra-fast inference for open models
- **Anyscale**: Llama and Mistral models
- **Fireworks AI**: Fast open-source models

**Setup**: Change base URL, use their API key

## Best Practices

### Model Selection

- **Default**: gpt-4o for most users
- **Budget**: gpt-3.5-turbo for high volume
- **Complex tasks**: gpt-4-turbo or o1-preview
- **Code**: o1-mini or gpt-4o
- **Speed**: gpt-3.5-turbo or gpt-4o

### Cost Optimization

1. **Right-size model**: Don't use GPT-4 for simple tasks
2. **Shorten prompts**: Remove unnecessary context
3. **Manage history**: Limit conversation length
4. **Use caching**: Reuse system prompts (provider-level)
5. **Monitor usage**: Check OpenAI dashboard regularly

### Security

1. **Protect API keys**: Never share or commit to repos
2. **Rotate keys**: Periodic rotation policy
3. **Use separate keys**: Different keys for dev/prod
4. **Monitor usage**: Watch for unusual activity
5. **Set spending limits**: In OpenAI dashboard

### Performance

1. **Enable streaming**: For better UX
2. **Parallel requests**: For independent tasks
3. **Appropriate timeouts**: 60s for GPT-4, 30s for GPT-3.5
4. **Retry logic**: Handle transient failures

## Resources

### Official Documentation
- OpenAI Platform: https://platform.openai.com
- API Reference: https://platform.openai.com/docs/api-reference
- Pricing: https://openai.com/pricing
- Status: https://status.openai.com

### Community
- OpenAI Forum: https://community.openai.com
- Discord: Official OpenAI community
- Reddit: r/OpenAI

### Learning
- OpenAI Cookbook: Code examples
- Prompt Engineering Guide: Best practices
- Model documentation: Capabilities and limits

## Next Steps

- Configure your [Assistant](/docs/assistant/basics) with OpenAI
- Write effective [Prompts](/docs/assistant/prompts) for GPT models
- Explore [Custom Requests](/docs/assistant/custom-requests) for advanced setups
- Compare with other providers: [Anthropic](/docs/providers/anthropic), [Google](/docs/providers/google)

Need help? Check the [FAQ](/docs/getting-started/faq) or [open an issue](https://github.com/Chevey339/kelivo/issues).
