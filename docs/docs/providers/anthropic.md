---
title: Anthropic
date: 2025-09-02 01:16:27
---

# Anthropic Provider

Anthropic creates Claude, a family of AI models known for long context windows, strong reasoning, and helpful, harmless, and honest (HHH) alignment.

## Getting Started

### Create an API Key

1. Visit https://console.anthropic.com
2. Sign up or log in
3. Navigate to **API Keys** section
4. Click **Create Key**
5. **Name your key** (e.g., "Kelivo")
6. **Copy the key** (save it securely)

### Add to Kelivo

1. Go to **Settings → Providers**
2. Tap **Add Provider** or **+**
3. Fill in details:
   - **Name**: "Anthropic" or "Claude"
   - **Provider Type**: Anthropic
   - **Base URL**: `https://api.anthropic.com` (default)
   - **API Key**: Paste your key
   - **Default Model**: claude-3-5-sonnet-20241022 (latest recommended)
4. **Save**

### Test Connection

Send a test message:
```
User: Hi Claude!
AI: Hello! How can I assist you today?
```

## Available Models

### Claude 3.5 Series (Latest & Best)

**claude-3-5-sonnet-20241022** (Recommended)
- **Best for**: Most tasks, excellent balance of speed and capability
- **Context**: 200K tokens
- **Features**: Text, vision, function calling, artifacts
- **Speed**: Fast
- **Cost**: Moderate
- **Intelligence**: Highest in Claude 3 family
- **Use when**: You need top performance

**claude-3-5-haiku-20241022** (Coming Soon)
- **Best for**: Fast, cost-effective tasks
- **Context**: 200K tokens
- **Features**: Text, vision, very fast
- **Speed**: Fastest Claude model
- **Cost**: Lowest
- **Use when**: Simple tasks, high volume

### Claude 3 Series

**claude-3-opus-20240229**
- **Best for**: Complex analysis, deep reasoning
- **Context**: 200K tokens
- **Features**: Text, vision, highest capability
- **Speed**: Slower than Sonnet
- **Cost**: Highest
- **Use when**: You need maximum intelligence

**claude-3-sonnet-20240229**
- **Best for**: Balanced performance (superseded by 3.5 Sonnet)
- **Context**: 200K tokens
- **Features**: Text, vision
- **Speed**: Moderate
- **Cost**: Moderate
- **Use when**: Testing older version

**claude-3-haiku-20240307**
- **Best for**: Quick tasks, cost-sensitive use
- **Context**: 200K tokens
- **Features**: Text, vision
- **Speed**: Very fast
- **Cost**: Low
- **Use when**: Speed and cost matter most

### Model Comparison

| Model | Speed | Quality | Cost | Vision | Best Use Case |
|-------|-------|---------|------|--------|---------------|
| Claude 3.5 Sonnet | ⚡⚡⚡ | ⭐⭐⭐⭐⭐ | 💰💰 | ✅ | General purpose (best) |
| Claude 3 Opus | ⚡⚡ | ⭐⭐⭐⭐⭐ | 💰💰💰 | ✅ | Complex reasoning |
| Claude 3 Sonnet | ⚡⚡⚡ | ⭐⭐⭐⭐ | 💰💰 | ✅ | Balanced (legacy) |
| Claude 3 Haiku | ⚡⚡⚡⚡ | ⭐⭐⭐ | 💰 | ✅ | Fast & affordable |

**Recommendation**: Use **Claude 3.5 Sonnet** for best results.

## Features & Capabilities

### Long Context (200K Tokens)

All Claude 3+ models support 200,000 token context windows.

**What this means**:
- ~150,000 words of text
- ~500 pages of documents
- Entire codebases or books

**Use cases**:
- Analyzing long documents
- Processing entire codebases
- Multi-document reasoning
- Extended conversations

**Example**:
```
User: [Uploads 400-page research paper]
User: Summarize the methodology and key findings
AI: [Analyzes entire paper and provides comprehensive summary]
```

**Tips**:
- Costs scale with context size
- Consider chunking very large docs
- Use "Extended Thinking" for deep analysis

### Vision (Multimodal)

All Claude 3 and 3.5 models support vision.

**Capabilities**:
- Describe and analyze images
- Extract text from screenshots (OCR)
- Understand charts, diagrams, and infographics
- Compare multiple images
- Answer questions about visual content

**Supported formats**: JPEG, PNG, GIF, WebP

**Example**:
```
User: [Attaches diagram] Explain this architecture
AI: This shows a microservices architecture with...
```

**Tips**:
- Higher resolution = more tokens
- Resize large images to save costs
- Works with multiple images per message

### Tool Use (Function Calling)

Claude excels at using tools and APIs.

**Capabilities**:
- Structured function calls
- Multi-step tool use
- Error handling and retries
- Chaining multiple tools

**Example**:
```
User: Check the weather and schedule a meeting if it's nice
AI: [Calls weather_api("Tokyo"), sees it's sunny]
AI: [Calls calendar_api("Schedule meeting", "tomorrow 2pm")]
AI: The weather looks great! I've scheduled your meeting for tomorrow at 2pm.
```

**Tip**: Claude is particularly good at complex tool orchestration.

### Extended Thinking

Coming feature that allows Claude to think longer before responding for complex problems.

**Benefits**:
- Deeper reasoning
- More thorough analysis
- Better problem-solving
- Step-by-step breakdowns

## Configuration Tips

### Temperature Settings

**Claude performs well across temperatures**:
- **Default**: 1.0 (Claude's native temperature)
- **Focused**: 0.5-0.7 (factual tasks, code)
- **Creative**: 1.0-1.5 (writing, brainstorming)

**Tip**: Claude is less sensitive to temperature than GPT models. Stick with 1.0 for most tasks.

### Max Tokens

Control response length:
- **Short answers**: 512-1024 tokens
- **Medium responses**: 2048-4096 tokens
- **Long form**: 8192+ tokens
- **Maximum**: Up to output limit (varies by plan)

### System Prompts

Claude responds particularly well to:
- **Structured prompts**: Use XML-style tags
- **Examples**: Few-shot learning
- **Explicit instructions**: Be clear and detailed
- **Role-playing**: Character or expert personas

**Recommended structure**:
```
You are an expert [role] with [expertise].

Your task is to [objective].

Guidelines:
1. [Guideline 1]
2. [Guideline 2]
3. [Guideline 3]

When responding:
- [Behavior 1]
- [Behavior 2]
- [Behavior 3]
```

**XML Tags** (Claude loves these):
```
<instructions>
You are a helpful coding assistant.

<formatting>
- Use code blocks with language tags
- Provide explanations after code
- Include comments for complex logic
</formatting>

<constraints>
- Follow PEP 8 for Python
- Prioritize readability
- Include error handling
</constraints>
</instructions>
```

## Pricing & Rate Limits

### Pricing (as of 2025)

**Input/Output tokens**:
- **Claude 3.5 Sonnet**: $3.00/$15.00 per 1M tokens
- **Claude 3 Opus**: $15.00/$75.00 per 1M tokens
- **Claude 3 Sonnet**: $3.00/$15.00 per 1M tokens
- **Claude 3 Haiku**: $0.25/$1.25 per 1M tokens

**Note**: Check https://anthropic.com/pricing for current rates.

### Rate Limits

**Free tier**:
- Limited requests per minute
- Lower priority during high demand

**Paid tier**:
- Higher rate limits based on usage
- Better availability
- Priority access

**Enterprise**:
- Custom limits
- SLA guarantees
- Dedicated support

**Tip**: Monitor your usage in the Anthropic Console.

## Troubleshooting

### Rate Limit Errors (429)

**Error**: "rate_limit_error"

**Solutions**:
1. **Wait and retry**: Limits reset frequently
2. **Exponential backoff**: Increase delay between retries
3. **Upgrade tier**: Higher usage → higher limits
4. **Distribute load**: Spread requests over time

### Authentication Errors (401)

**Error**: "authentication_error"

**Solutions**:
1. **Check API key**: Verify it's correct and active
2. **Header format**: Ensure proper header format
   ```
   x-api-key: your_key_here
   anthropic-version: 2023-06-01
   ```
3. **Regenerate key**: Create new key if needed

### Content Policy Violations

**Error**: "content_policy_violation"

**Cause**: Claude refuses requests that violate safety policies

**Solutions**:
1. **Rephrase request**: Remove potentially harmful elements
2. **Context clarification**: Explain legitimate use case
3. **Different approach**: Try alternative framing

**Note**: Claude is trained to refuse certain requests for safety.

### Overloaded Errors (529)

**Error**: "overloaded_error"

**Solutions**:
1. **Retry**: System is temporarily overloaded
2. **Wait**: Try again in a few minutes
3. **Off-peak**: Use during less busy times

## Claude vs. Other Models

### Claude vs. GPT-4

**Claude Strengths**:
- Longer context (200K vs 128K)
- Better at following complex instructions
- More natural, conversational tone
- Excellent with structured data (XML/JSON)
- Strong safety alignment

**GPT-4 Strengths**:
- Broader general knowledge
- More creative in some domains
- Better code execution reasoning
- More tools and integrations

**Recommendation**: Try both for your specific use case.

### Claude vs. Gemini

**Claude Strengths**:
- More reliable instruction following
- Better at nuanced tasks
- Stronger coding assistance
- More conservative, safer outputs

**Gemini Strengths**:
- Much longer context (2M tokens)
- Faster in some cases
- Stronger multimodal capabilities
- Google integration

## Best Practices

### Prompt Engineering for Claude

**1. Use XML Tags**:
```
<task>Analyze the following code for bugs</task>
<code>
def calculate(x):
    return x/0
</code>
```

**2. Provide Examples**:
```
Here are examples of good responses:

<example>
Input: "Hello"
Output: "Hi there! How can I help?"
</example>

Now respond to: "Good morning"
```

**3. Be Explicit**:
```
❌ "Help me with this"
✅ "Analyze this code for security vulnerabilities. Focus on SQL injection, XSS, and authentication issues. Provide specific line numbers and fixes."
```

**4. Use Structured Output**:
```
Provide your analysis in this format:
- Summary: [one sentence]
- Key Points: [bullet list]
- Recommendation: [action item]
```

### Cost Optimization

1. **Use Haiku for simple tasks**: 10x cheaper than Opus
2. **Minimize context**: Remove unnecessary conversation history
3. **Batch similar requests**: More efficient than one-by-one
4. **Set max_tokens appropriately**: Don't allow unlimited output
5. **Monitor usage**: Check console regularly

### Security

1. **Protect API keys**: Never expose in client-side code
2. **Rotate keys**: Regular rotation schedule
3. **Limit scope**: Use different keys for different apps
4. **Monitor usage**: Watch for unauthorized access
5. **Revoke immediately**: If key is compromised

## Advanced Features

### Anthropic Version Header

Specify API version for consistency:
```json
{
  "anthropic-version": "2023-06-01"
}
```

Add in Kelivo custom headers if needed.

### Prompt Caching (Beta)

Cache common prompt prefixes to save costs:
- Reuse system prompts
- Cache reference documents
- Reduce input token costs

**Availability**: Check Anthropic docs for current status.

## Resources

### Official Documentation
- Anthropic Console: https://console.anthropic.com
- API Documentation: https://docs.anthropic.com
- Claude.ai (Web Interface): https://claude.ai
- Pricing: https://anthropic.com/pricing

### Community
- Discord: Official Anthropic community
- Twitter: @AnthropicAI
- GitHub Discussions: For API feedback

### Learning
- Prompt Engineering Guide: https://docs.anthropic.com/claude/docs/prompt-engineering
- Best Practices: In official documentation
- Use Cases: Claude.ai examples

## Next Steps

- Set up your [Assistant](/docs/assistant/basics) with Claude
- Learn [Prompt Engineering](/docs/assistant/prompts) techniques for Claude
- Try [MCP integration](/docs/assistant/mcp) for tool use
- Compare with [OpenAI](/docs/providers/openai) and [Google](/docs/providers/google)

Need help? Check the [FAQ](/docs/getting-started/faq) or [open an issue](https://github.com/Chevey339/kelivo/issues).
