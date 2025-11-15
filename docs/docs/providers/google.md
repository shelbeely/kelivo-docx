---
title: Google
date: 2025-09-02 01:16:27
---

# Google (Gemini) Provider

Google's Gemini models offer exceptional multimodal capabilities, massive context windows, and strong performance across text, vision, and code tasks.

## Getting Started

### Create an API Key

1. Visit https://aistudio.google.com/apikey
2. Sign in with your Google account
3. Click **Get API Key** or **Create API Key**
4. Select a Google Cloud project (or create new)
5. **Copy your API key**
6. (Optional) Set up billing for higher limits

### Add to Kelivo

1. Go to **Settings → Providers**
2. Tap **Add Provider** or **+**
3. Fill in details:
   - **Name**: "Google" or "Gemini"
   - **Provider Type**: Google
   - **Base URL**: `https://generativelanguage.googleapis.com` (default)
   - **API Key**: Paste your key
   - **Default Model**: gemini-1.5-pro or gemini-2.0-flash-exp
4. **Save**

### Test Connection

Send a test message:
```
User: Hello Gemini!
AI: Hello! How can I assist you today?
```

## Available Models

### Gemini 2.0 Series (Experimental - Latest)

**gemini-2.0-flash-exp**
- **Best for**: Fast, cutting-edge performance
- **Context**: 1M tokens
- **Features**: Text, vision, audio, improved reasoning
- **Speed**: Very fast
- **Cost**: Free during experimental phase
- **Status**: Experimental (may change)
- **Use when**: You want the latest capabilities

### Gemini 1.5 Series (Production)

**gemini-1.5-pro** (Recommended for quality)
- **Best for**: Complex tasks, long documents, high quality
- **Context**: 2M tokens (largest available!)
- **Features**: Text, vision, audio, code execution
- **Speed**: Moderate
- **Cost**: Moderate
- **Use when**: You need maximum capability and context

**gemini-1.5-flash** (Recommended for speed)
- **Best for**: Fast responses, cost-effective, high volume
- **Context**: 1M tokens
- **Features**: Text, vision, audio, very fast
- **Speed**: Very fast
- **Cost**: Low
- **Use when**: Speed and efficiency matter

**gemini-1.5-flash-8b**
- **Best for**: Lightweight tasks, maximum cost efficiency
- **Context**: 1M tokens
- **Features**: Text, vision, fastest and cheapest
- **Speed**: Extremely fast
- **Cost**: Lowest
- **Use when**: Simple tasks, chat applications

### Gemini 1.0 Series (Legacy)

**gemini-1.0-pro**
- **Best for**: Stable production use (older generation)
- **Context**: 32K tokens
- **Features**: Text only
- **Speed**: Fast
- **Cost**: Low
- **Use when**: Legacy compatibility needed

### Model Comparison

| Model | Speed | Quality | Cost | Vision | Context | Best Use Case |
|-------|-------|---------|------|--------|---------|---------------|
| Gemini 2.0 Flash | ⚡⚡⚡⚡ | ⭐⭐⭐⭐⭐ | 💰 (Free) | ✅ | 1M | Experimental, latest |
| Gemini 1.5 Pro | ⚡⚡⚡ | ⭐⭐⭐⭐⭐ | 💰💰 | ✅ | 2M | Maximum capability |
| Gemini 1.5 Flash | ⚡⚡⚡⚡ | ⭐⭐⭐⭐ | 💰 | ✅ | 1M | Fast & affordable |
| Gemini 1.5 Flash-8B | ⚡⚡⚡⚡⚡ | ⭐⭐⭐ | 💰 | ✅ | 1M | Lightweight tasks |

**Recommendation**: **Gemini 1.5 Flash** for most users, **1.5 Pro** for complex tasks.

## Features & Capabilities

### Massive Context Windows

**Gemini 1.5 Pro**: 2 million tokens
- ~1.5 million words
- ~10,000 pages of text
- Entire codebases
- Hours of video/audio

**Use cases**:
- Analyze entire books or research papers
- Process large codebases
- Multi-document reasoning
- Extended conversations
- Video/audio analysis

**Example**:
```
User: [Uploads entire codebase - 500 files]
User: Find all potential security vulnerabilities
AI: [Analyzes entire codebase and provides comprehensive report]
```

### Multimodal Understanding

Gemini excels at processing multiple types of content:

**Vision**:
- Images: JPEG, PNG, WebP, HEIC, HEIF
- Understanding photos, diagrams, charts
- OCR and text extraction
- Visual question answering

**Audio** (Gemini 1.5+):
- Audio files up to 9.5 hours
- Transcription
- Audio analysis
- Music understanding

**Video** (Gemini 1.5 Pro):
- Video files (MP4, MOV, etc.)
- Visual and audio content
- Scene understanding
- Action recognition

**Example**:
```
User: [Uploads video] Summarize this tutorial
AI: This video covers Python decorators. First, it explains...
```

### Code Execution (Gemini 1.5 Pro)

Gemini Pro can execute Python code to:
- Perform calculations
- Generate visualizations
- Process data
- Verify outputs

**Example**:
```
User: Calculate the first 100 Fibonacci numbers and find the sum
AI: [Generates and executes Python code]
AI: The sum of the first 100 Fibonacci numbers is 573,147,844,013,817,084,101
```

### Native JSON Mode

All Gemini 1.5+ models support structured output:
- JSON schema enforcement
- Reliable structured data
- Type-safe responses

**Example**:
```
User: Extract person info from: "Sarah Johnson, 30, works at Tesla as an engineer"
AI: {"name": "Sarah Johnson", "age": 30, "company": "Tesla", "role": "engineer"}
```

## Configuration Tips

### Temperature Settings

**Gemini's temperature range**: 0.0 - 2.0

**Recommendations**:
- **Code/Analysis**: 0.1-0.3
- **General chat**: 0.7-0.9
- **Creative writing**: 1.0-1.5
- **Maximum creativity**: 1.5-2.0

**Note**: Gemini handles higher temperatures well for creative tasks.

### Top-p and Top-k

**Gemini uses both**:
- **Top-p**: 0.0-1.0 (default: 0.95)
- **Top-k**: 1-40 (default: 40)

**Typical settings**:
- **Focused**: top_p=0.8, top_k=20
- **Balanced**: top_p=0.95, top_k=40
- **Diverse**: top_p=1.0, top_k=64

### Safety Settings

Gemini has built-in safety filters:
- **Harassment**
- **Hate speech**
- **Sexually explicit**
- **Dangerous content**

**Levels**: BLOCK_NONE, BLOCK_LOW_AND_ABOVE, BLOCK_MEDIUM_AND_ABOVE, BLOCK_HIGH_AND_ABOVE

**Default**: BLOCK_MEDIUM_AND_ABOVE

**Adjusting**: May require custom API calls (advanced)

### System Instructions

Gemini 1.5+ supports system instructions similar to system prompts:

**Best practices**:
```
You are an expert data analyst. Analyze data thoroughly and provide:
1. Key insights
2. Visualizations (descriptions)
3. Actionable recommendations

Always cite your reasoning and be precise with numbers.
```

## Pricing & Rate Limits

### Pricing (as of 2025)

**Free Tier** (AI Studio):
- **Gemini 1.5 Flash**: Free up to 15 RPM
- **Gemini 1.5 Pro**: Free up to 2 RPM
- **Gemini 2.0 Flash**: Free during experimental phase

**Paid Tier** (Vertex AI or higher quotas):
- **Gemini 1.5 Flash**: ~$0.075/$0.30 per 1M tokens (input/output)
- **Gemini 1.5 Pro**: ~$1.25/$5.00 per 1M tokens (input/output)
- **Gemini 1.5 Flash-8B**: ~$0.0375/$0.15 per 1M tokens

**Note**: Prices vary by region and may change. Check Google AI pricing.

### Rate Limits

**Free tier (AI Studio)**:
- Gemini 1.5 Flash: 15 requests per minute
- Gemini 1.5 Pro: 2 requests per minute
- 1,500 requests per day
- 1M tokens per minute (TPM)

**Paid tier (Vertex AI)**:
- Higher RPM based on quota
- More TPM
- Better availability

**Tip**: For production use, consider Vertex AI for higher limits.

## Troubleshooting

### API Key Errors

**Error**: "API key not valid"

**Solutions**:
1. **Verify key**: Check it's copied correctly
2. **Enable API**: Ensure Generative Language API is enabled in Google Cloud
3. **Billing**: Set up billing if using paid features
4. **Regenerate**: Create new key if needed

### Safety Blocking

**Error**: "The response was blocked due to safety reasons"

**Cause**: Content triggered safety filters

**Solutions**:
1. **Rephrase request**: Use different wording
2. **Remove sensitive content**: Avoid flagged topics
3. **Context clarity**: Explain legitimate educational purpose
4. **Adjust safety settings**: If using Vertex AI (advanced)

**Note**: Some content will always be blocked for safety.

### Rate Limit Errors

**Error**: "Resource has been exhausted" or 429

**Solutions**:
1. **Wait**: Free tier limits reset per minute
2. **Upgrade**: Use Vertex AI for higher limits
3. **Reduce frequency**: Space out requests
4. **Use Flash**: Faster model has higher free limits

### Content Too Large

**Error**: "Request payload too large"

**Solutions**:
1. **Check limits**: 
   - Pro: 2M tokens
   - Flash: 1M tokens
2. **Compress images**: Reduce image resolution
3. **Chunk content**: Split very large inputs
4. **Summarize first**: Process in stages

### Model Not Available

**Error**: "Model not found" or "not available in your region"

**Solutions**:
1. **Check model name**: Use exact names (e.g., "gemini-1.5-pro")
2. **Region availability**: Some models limited to certain regions
3. **Use Vertex AI**: More models available
4. **Try alternative**: Use Flash if Pro unavailable

## Best Practices

### Prompt Engineering for Gemini

**1. Be Specific and Direct**:
```
✅ "Analyze this image and list all visible objects with their positions"
❌ "What's in the image?"
```

**2. Leverage Multimodal**:
```
User: [Image of flowchart + text description]
User: Based on this diagram and description, generate Python code
```

**3. Use Long Context**:
```
User: [Uploads 50 documents]
User: Across all documents, what are the common themes and contradictions?
```

**4. Structure Requests**:
```
Task: Analyze the code
Steps:
1. Identify bugs
2. Suggest improvements
3. Provide refactored version
```

### Cost Optimization

1. **Use Flash for most tasks**: 95% as good as Pro, much cheaper
2. **Use Flash-8B for simple tasks**: Even cheaper
3. **Compress media**: Smaller images/videos save tokens
4. **Free tier first**: Max out free tier before upgrading
5. **Batch processing**: Combine related requests

### Security

1. **Protect API keys**: Never expose publicly
2. **Separate keys**: Different projects use different keys
3. **Monitor usage**: Check AI Studio dashboard
4. **Revoke compromised keys**: Immediately if exposed
5. **Use Vertex AI**: For production with better security controls

### Performance

1. **Use appropriate model**: Flash for speed, Pro for quality
2. **Streaming**: Enabled by default for better UX
3. **Reduce unnecessary context**: Don't send full history if not needed
4. **Parallel requests**: For independent tasks
5. **Cache when possible**: Reuse common prompts/data

## Advanced Features

### Vertex AI Integration

For enterprise use, deploy via Google Cloud Vertex AI:

**Benefits**:
- Higher rate limits
- Better SLAs
- Enterprise security
- Fine-tuning (coming)
- More models

**Setup**: Use Vertex AI endpoint instead of AI Studio

**Base URL**:
```
https://REGION-aiplatform.googleapis.com/v1/projects/PROJECT_ID/locations/REGION/publishers/google/models/MODEL:streamGenerateContent
```

### Grounding with Google Search

Gemini can ground responses in Google Search results (Vertex AI only):
- Real-time information
- Cited sources
- Reduced hallucination

### Function Calling

Gemini supports structured function/tool calling:
- Define functions
- AI decides when to call
- Process results
- Continue conversation

**Use with**: MCP integration in Kelivo

## Gemini vs. Other Models

### Gemini vs. GPT-4

**Gemini Strengths**:
- Much longer context (2M vs 128K)
- Native multimodal (image, audio, video)
- Code execution built-in
- Free tier available
- Better at processing large documents

**GPT-4 Strengths**:
- More creative in some domains
- Better instruction following in edge cases
- More established ecosystem
- Better for certain coding tasks

### Gemini vs. Claude

**Gemini Strengths**:
- 10x longer context (2M vs 200K)
- Native video understanding
- Code execution
- Free tier

**Claude Strengths**:
- Better instruction following
- More nuanced understanding
- Safer, more aligned outputs
- Better at structured data (XML/JSON)

## Resources

### Official Documentation
- Google AI Studio: https://aistudio.google.com
- API Documentation: https://ai.google.dev/docs
- Vertex AI: https://cloud.google.com/vertex-ai
- Pricing: https://ai.google.dev/pricing

### Community
- Discord: Google AI Developer community
- YouTube: Google for Developers channel
- GitHub: google-gemini organization

### Learning
- Gemini Cookbook: Code examples and tutorials
- Quickstart guides: In AI Studio
- Video tutorials: YouTube

## Next Steps

- Configure your [Assistant](/docs/assistant/basics) with Gemini
- Explore [Prompt Engineering](/docs/assistant/prompts) techniques
- Set up [MCP](/docs/assistant/mcp) for tool integration
- Compare with [OpenAI](/docs/providers/openai) and [Anthropic](/docs/providers/anthropic)

Need help? Check the [FAQ](/docs/getting-started/faq) or [open an issue](https://github.com/Chevey339/kelivo/issues).
