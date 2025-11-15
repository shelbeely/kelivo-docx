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

### OpenAI-Compatible Providers

Use gateways offering OpenAI-compatible APIs:

**Examples**:
- **OpenRouter**: Aggregates many providers
- **Together AI**: Open-source models
- **Groq**: Fast inference for open models
- **Anyscale**: Llama and Mistral models

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
