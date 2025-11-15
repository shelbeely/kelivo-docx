---
title: Custom Requests
date: 2025-09-02 01:16:27
---

# Custom Requests

Custom Requests allow you to fine-tune how Kelivo communicates with AI providers, enabling use of proxies, gateways, self-hosted models, and advanced configurations.

## What are Custom Requests?

Custom Requests let you modify:
- **Base URLs**: Connect to alternative endpoints
- **HTTP headers**: Add authentication, routing, or metadata
- **Request paths**: Adjust API route structures
- **Timeouts**: Control how long to wait for responses
- **Retries**: Configure retry behavior for failed requests

## Why Use Custom Requests?

### Common Use Cases

**1. Corporate Proxies**
- Route through company network infrastructure
- Comply with enterprise security policies
- Monitor and log API usage

**2. API Gateways**
- Use services like Azure API Management
- Add caching layers
- Implement custom rate limiting

**3. Self-Hosted Models**
- Connect to local LLMs (Ollama, LocalAI, etc.)
- Use private cloud deployments
- Run open-source models on your infrastructure

**4. OpenAI-Compatible Services**
- Use providers offering OpenAI-compatible APIs
- Examples: Together AI, Anyscale, Perplexity
- Often cheaper or faster alternatives

**5. Custom Authentication**
- Add organization IDs or project tokens
- Implement custom auth schemes
- Route to multi-tenant environments

## Base URL Configuration

### What is a Base URL?

The endpoint where API requests are sent. Default examples:
- **OpenAI**: `https://api.openai.com/v1`
- **Anthropic**: `https://api.anthropic.com`
- **Google**: `https://generativelanguage.googleapis.com`

### Changing the Base URL

1. **Go to Settings → Providers**
2. **Select or create a provider**
3. **Find "Base URL" or "Endpoint" field**
4. **Enter your custom URL**
5. **Save**

### Examples

**Azure OpenAI**:
```
https://YOUR-RESOURCE-NAME.openai.azure.com
```

**Self-hosted Ollama**:
```
http://localhost:11434/v1
```

**OpenRouter** (aggregate provider):
```
https://openrouter.ai/api/v1
```

**Together AI**:
```
https://api.together.xyz/v1
```

**Local development server**:
```
http://192.168.1.100:8000
```

### Path Prefixes

Some gateways require custom path structures:

**Standard OpenAI path**:
```
/v1/chat/completions
```

**Custom gateway path**:
```
/my-org/openai/v1/chat/completions
```

Configure path prefix in provider settings if supported.

## Custom Headers

### What are Headers?

HTTP headers carry metadata with requests:
- **Authentication**: API keys, tokens, signatures
- **Routing**: Organization IDs, project selectors
- **Configuration**: Custom settings, flags
- **Tracking**: Request IDs, correlation tags

### Adding Custom Headers

1. **Provider Settings → Advanced**
2. **Find "Custom Headers" section**
3. **Add headers in JSON format**:
   ```json
   {
     "X-Organization": "my-org",
     "X-Project": "production",
     "X-Custom-Header": "value"
   }
   ```
4. **Save**

### Common Header Examples

**OpenAI Organization**:
```json
{
  "OpenAI-Organization": "org-xxxxxxxxxxxxx"
}
```

**Azure OpenAI**:
```json
{
  "api-key": "your-azure-key"
}
```

**Custom tracking**:
```json
{
  "X-Request-Source": "kelivo-mobile",
  "X-User-ID": "user-123"
}
```

**Authentication forwarding**:
```json
{
  "Authorization": "Bearer additional-token",
  "X-API-Key": "secondary-key"
}
```

### Security Considerations

- **Never commit headers to public configs**: They may contain secrets
- **Use environment-specific configs**: Different keys for dev/prod
- **Rotate credentials regularly**: Update headers when keys change
- **Limit exposure**: Only add necessary headers

## Proxy Configuration

### HTTP/HTTPS Proxies

**Platform-specific proxy setup**:

**Android**:
- Usually honors system proxy settings
- Configure in Settings → WiFi → Advanced
- May require app restart

**iOS**:
- Set proxy in WiFi network configuration
- Manual or automatic (PAC file)
- Applies system-wide

**Manual proxy in Kelivo** (if supported):
```
Proxy Host: proxy.company.com
Proxy Port: 8080
Proxy Auth: username:password (if needed)
```

### SOCKS Proxies

For advanced routing (e.g., via SSH tunnel):
```
socks5://localhost:1080
```

Not all apps support SOCKS. Check Kelivo documentation.

### Certificate Pinning

For self-signed certificates or MITM inspection:
- May need to trust custom CA certificates
- Install cert at OS level (Android/iOS settings)
- Some apps may require additional configuration

## Timeouts & Retries

### Timeout Configuration

Control how long to wait for API responses:

```
Connection Timeout: 10 seconds (establishing connection)
Read Timeout: 60 seconds (waiting for complete response)
Total Timeout: 120 seconds (overall request limit)
```

**Recommendations**:
- **Fast models** (GPT-3.5, Flash): 30-60s read timeout
- **Slow models** (GPT-4, o1): 120-180s read timeout
- **Streaming**: Lower timeout OK (response starts quickly)

**Adjust for**:
- Network speed
- Model complexity
- Expected response length

### Retry Logic

Configure retry behavior for transient failures:

```
Max Retries: 3
Retry Delay: 1, 2, 4 seconds (exponential backoff)
Retry on: 429 (rate limit), 500, 502, 503, 504 (server errors)
```

**Best practices**:
- **Always retry on 429**: Rate limits are temporary
- **Retry server errors**: 5xx codes are often transient
- **Don't retry 4xx** (except 429): Client errors won't succeed on retry
- **Use backoff**: Avoid hammering the server

## OpenAI-Compatible APIs

Many providers offer OpenAI-compatible endpoints. You can use them by:

1. **Create an OpenAI provider**
2. **Change the base URL**
3. **Use their API key**
4. **Select compatible models**

### Supported Providers

**Together AI**:
```
Base URL: https://api.together.xyz/v1
API Key: Together AI key
Models: Llama, Mistral, etc.
```

**OpenRouter** (aggregates many providers):
```
Base URL: https://openrouter.ai/api/v1
API Key: OpenRouter key
Models: Any from their catalog
Extra Header: {"HTTP-Referer": "https://kelivo.app"}
```

**Groq** (fast inference):
```
Base URL: https://api.groq.com/openai/v1
API Key: Groq key
Models: Llama, Mixtral, etc.
```

**Ollama** (local models):
```
Base URL: http://localhost:11434/v1
API Key: (usually not needed, use "ollama")
Models: Your pulled models
```

**LocalAI** (self-hosted):
```
Base URL: http://your-server:8080/v1
API Key: (configurable)
Models: Your configured models
```

### Model Name Mapping

Some providers require exact model names:
- Check provider documentation
- Test with a simple message
- Adjust name if you get "model not found" errors

Example:
```
Provider model: "meta-llama/Llama-2-70b-chat-hf"
Kelivo model field: "meta-llama/Llama-2-70b-chat-hf"
```

## Self-Hosted Models

### Running Locally with Ollama

1. **Install Ollama**: https://ollama.ai
2. **Pull a model**:
   ```bash
   ollama pull llama2
   ```
3. **Start Ollama** (runs on http://localhost:11434)
4. **Configure in Kelivo**:
   - Base URL: `http://localhost:11434/v1`
   - API Key: `ollama`
   - Model: `llama2`

### Running with LocalAI

1. **Install LocalAI**: https://localai.io
2. **Configure models**
3. **Start server**: `local-ai run`
4. **Configure in Kelivo**:
   - Base URL: `http://localhost:8080/v1`
   - Models: As configured in LocalAI

### Running with llama.cpp Server

1. **Build llama.cpp**: https://github.com/ggerganov/llama.cpp
2. **Start server**:
   ```bash
   ./server -m model.gguf --port 8080
   ```
3. **Configure in Kelivo**:
   - Base URL: `http://localhost:8080/v1` (with compatibility layer)

### Benefits of Self-Hosting

- **Privacy**: Data never leaves your network
- **Cost**: No per-token charges (just hardware)
- **Customization**: Full control over model and settings
- **Offline**: Works without internet

### Limitations

- **Hardware requirements**: Needs powerful GPU/CPU
- **Model quality**: Open models may lag behind GPT-4/Claude
- **Maintenance**: You manage updates and issues

## Advanced Scenarios

### Multi-Region Routing

Route to different endpoints based on load:

```
Primary: https://api.provider.com
Fallback: https://api-eu.provider.com
```

Implement via:
- Load balancer in front
- Custom gateway logic
- Multiple provider entries in Kelivo

### Request Logging

Add headers for request tracking:

```json
{
  "X-Request-ID": "uuid-generated-per-request",
  "X-Session-ID": "session-identifier",
  "X-User-Agent": "Kelivo/1.0"
}
```

Use for:
- Debugging issues
- Usage analytics
- Cost attribution

### A/B Testing

Create multiple providers with different configs:

- Provider A: GPT-4o with custom system prompt
- Provider B: Claude 3.5 with different settings

Test which performs better for your use cases.

## Troubleshooting

### Connection Failures

**Symptoms**: "Cannot connect to server", timeout errors

**Solutions**:
- **Check URL**: Verify correct endpoint
- **Test connectivity**: Try curl/wget to same URL
- **Firewall**: Ensure no blocking
- **Proxy**: Verify proxy settings if used
- **HTTPS**: Check certificate validity

**Example test**:
```bash
curl -X POST https://api.openai.com/v1/chat/completions \
  -H "Authorization: Bearer YOUR_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model":"gpt-3.5-turbo","messages":[{"role":"user","content":"Hi"}]}'
```

### Authentication Errors

**Symptoms**: "Invalid API key", 401/403 errors

**Solutions**:
- **Verify key**: Copy-paste carefully, no extra spaces
- **Check headers**: Ensure auth header format matches provider
- **Key permissions**: Verify key has necessary scopes
- **Quota**: Check if you've exceeded limits

### Model Not Found

**Symptoms**: "Model does not exist", 404 errors

**Solutions**:
- **Correct name**: Check provider's model list
- **Region**: Some models only in certain regions (Azure)
- **Access**: Verify account has access to the model
- **Case sensitivity**: Match exact capitalization

### Slow Responses

**Symptoms**: Long wait times, timeouts

**Solutions**:
- **Increase timeout**: Set higher read timeout
- **Try faster model**: Use GPT-3.5 instead of GPT-4
- **Reduce context**: Shorten conversation history
- **Check network**: Test general internet speed
- **Provider status**: Check if provider has issues

### Invalid Response Format

**Symptoms**: Parsing errors, unexpected content

**Solutions**:
- **Verify compatibility**: Ensure endpoint is OpenAI-compatible
- **Check model**: May not support chat completion format
- **Headers**: Add required headers
- **Logs**: Check server logs if self-hosted

## Best Practices

### Development vs. Production

- **Dev**: Use free tiers, test endpoints, verbose logging
- **Prod**: Paid tiers, stable endpoints, minimal logging

### Security

- **Use HTTPS**: Never send API keys over HTTP
- **Rotate keys**: Regular rotation policy
- **Least privilege**: Minimum necessary permissions
- **Monitor usage**: Watch for anomalies

### Performance

- **Close endpoints**: Use nearby servers for lower latency
- **Appropriate timeouts**: Balance between patience and UX
- **Retry logic**: Handle transient failures gracefully
- **Caching**: Consider caching at gateway level if applicable

### Cost Optimization

- **Right-size models**: Use cheapest model that meets needs
- **Request batching**: If provider supports batch APIs
- **Monitoring**: Track usage to identify optimization opportunities

## Next Steps

- Configure [Assistants](/docs/assistant/basics) with custom providers
- Explore [MCP](/docs/assistant/mcp) for additional integrations
- Read provider-specific guides: [OpenAI](/docs/providers/openai), [Anthropic](/docs/providers/anthropic), [Google](/docs/providers/google)
- Check [FAQ](/docs/getting-started/faq) for common issues

Need help? [Open an issue](https://github.com/Chevey339/kelivo/issues) with your configuration details (redact secrets!).
