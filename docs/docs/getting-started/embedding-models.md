---
title: Embedding Models
date: 2025-11-25 22:00:00
---

# Embedding Models

Embedding models convert text into numerical vectors that capture semantic meaning, enabling powerful features like semantic search, document similarity, and intelligent context retrieval.

## What are Embedding Models?

Unlike chat models that generate text responses, embedding models produce fixed-length numerical arrays (vectors) that represent the meaning of text. These vectors enable:

- **Semantic Search**: Find content by meaning, not just keywords
- **Document Similarity**: Compare how related two pieces of text are
- **Context Retrieval**: Find relevant information for AI conversations
- **Memory Enhancement**: Improve assistant memory by finding related past conversations

## How Kelivo Uses Embeddings

Kelivo automatically categorizes embedding models separately from chat models in the model selection interface. This helps you:

1. **Identify model types**: Embedding models are grouped under a dedicated "Embeddings" category
2. **Choose appropriately**: Select embedding models for specific features
3. **Avoid confusion**: Embedding models cannot be used for regular chat

### Model Type Detection

Kelivo identifies embedding models by:
- Model type metadata from providers
- Model ID containing "embedding" or "embed"

When viewing your available models, look for the **Embeddings** group to find these specialized models.

## Supported Embedding Models

### OpenAI

| Model | Dimensions | Use Case |
|-------|------------|----------|
| `text-embedding-3-small` | 1536 | Cost-effective, good quality |
| `text-embedding-3-large` | 3072 | Highest quality |
| `text-embedding-ada-002` | 1536 | Legacy, still supported |

**Configuration**:
- Base URL: `https://api.openai.com/v1`
- Endpoint: `/embeddings`

### Google (Gemini)

| Model | Dimensions | Use Case |
|-------|------------|----------|
| `text-embedding-004` | 768 | General purpose |
| `embedding-001` | 768 | Legacy model |

**Configuration**:
- Use Google AI Studio or Vertex AI
- Available through Gemini API

### Anthropic

Anthropic currently does not offer standalone embedding models. For embedding needs with Claude, consider:
- Using OpenAI or Google embedding models
- Third-party embedding services

### OpenRouter

::: warning OpenRouter Limitations
**OpenRouter does NOT support embedding models.** OpenRouter is an API aggregator that only provides access to chat/completion models from various providers. If you need embedding capabilities, you must use a different provider that offers embedding APIs directly.
:::

**Alternatives for OpenRouter users**:
- Add a separate **OpenAI** provider for embeddings (`text-embedding-3-small`)
- Add a separate **Google AI** provider for embeddings (`text-embedding-004`)
- Use a **self-hosted** solution like Ollama with `nomic-embed-text`
- Use **SiliconFlow** or other OpenAI-compatible providers that support embeddings

### Custom/Self-Hosted

Many providers offer embedding models through OpenAI-compatible APIs:

| Provider | Popular Models |
|----------|---------------|
| Ollama | `nomic-embed-text`, `mxbai-embed-large` |
| Hugging Face | `sentence-transformers/*` |
| Cohere | `embed-english-v3.0`, `embed-multilingual-v3.0` |
| Jina AI | `jina-embeddings-v2-base-en` |
| Voyage AI | `voyage-large-2`, `voyage-code-2` |

## Setting Up Embedding Models

### Step 1: Add Provider with Embedding Support

1. **Open Settings** → **Providers**
2. **Add or select a provider** that offers embedding models
3. **Ensure API key has access** to embedding endpoints

### Step 2: Fetch Available Models

1. **Open provider settings**
2. **Tap "Fetch Models"** or "Refresh Models"
3. **View the Embeddings category** in the model list
4. **Verify embedding models appear**

### Step 3: Configure for Features

Embedding models are used automatically by certain Kelivo features:
- **Memory**: For retrieving relevant context
- **Document search**: When enabled for assistants
- **Semantic matching**: For finding similar conversations

## Model Selection Tips

### For General Use

**Recommended**: `text-embedding-3-small` (OpenAI)
- Good balance of quality and cost
- Wide compatibility
- Fast processing

### For High Accuracy

**Recommended**: `text-embedding-3-large` (OpenAI)
- Best quality embeddings
- Higher cost per call
- Larger vector dimensions

### For Cost Savings

**Recommended**: Google's embedding models or self-hosted options
- Often lower cost per token
- Good quality for most use cases
- May have usage limits

### For Specialized Tasks

| Task | Recommended Model |
|------|-------------------|
| Code search | `voyage-code-2` |
| Multilingual | `embed-multilingual-v3.0` (Cohere) |
| Local/Private | `nomic-embed-text` (Ollama) |
| Long documents | Models with 8K+ context |

## Understanding Embedding Dimensions

Embedding dimensions affect:

| Higher Dimensions | Lower Dimensions |
|-------------------|------------------|
| More semantic detail captured | Faster processing |
| Better accuracy | Lower memory usage |
| More storage needed | More cost-effective |
| Slower similarity calculations | May lose subtle meanings |

**Typical ranges**:
- Small: 384-768 dimensions
- Medium: 1024-1536 dimensions
- Large: 2048-3072+ dimensions

## Best Practices

### 1. Consistency

Use the **same embedding model** for related operations:
- If you embed documents with `text-embedding-3-small`, search with the same model
- Switching models invalidates existing embeddings

### 2. Chunking Text

For long documents:
- Split into meaningful chunks (paragraphs, sections)
- Typical chunk size: 256-512 tokens
- Include overlap between chunks for context

### 3. Preprocessing

Improve embedding quality:
- Remove unnecessary whitespace
- Normalize formatting
- Consider removing stop words for search

### 4. Caching

Embeddings are deterministic:
- Cache embeddings for static content
- Re-embed only when content changes
- Saves API costs and processing time

## Cost Considerations

Embedding models are typically cheaper than chat models:

| Provider | Model | Approximate Cost |
|----------|-------|------------------|
| OpenAI | text-embedding-3-small | $0.02 per 1M tokens |
| OpenAI | text-embedding-3-large | $0.13 per 1M tokens |
| Google | text-embedding-004 | Often free tier available |
| Self-hosted | Ollama models | Free (compute costs only) |

**Cost optimization tips**:
- Batch embed multiple texts together
- Cache frequently-used embeddings
- Use smaller models when quality permits
- Consider self-hosted for high volume

## Troubleshooting

### Embedding Model Not Found

1. **Check provider configuration**: Ensure API key has embedding access
2. **Refresh model list**: Tap "Fetch Models" in provider settings
3. **Verify model availability**: Some providers require separate access

### Poor Search Results

1. **Verify same model used**: Embedding and search must use same model
2. **Check text preprocessing**: Inconsistent formatting affects results
3. **Adjust chunk sizes**: Too large or small chunks reduce accuracy

### High Latency

1. **Use smaller dimensions**: Lower-dimension models are faster
2. **Batch requests**: Send multiple texts at once
3. **Consider local models**: Ollama eliminates network latency

### Memory/Storage Issues

1. **Reduce dimensions**: Use smaller embedding models
2. **Limit history**: Don't embed everything indefinitely
3. **Clean up old embeddings**: Remove outdated embedded content

## Integration with Kelivo Features

### Memory Feature

When Memory is enabled for an assistant:
1. Important facts are extracted from conversations
2. Facts are embedded for semantic retrieval
3. Relevant memories are retrieved based on conversation context
4. Retrieved memories are included in prompts

### Future Features

Kelivo may use embeddings for:
- RAG (Retrieval Augmented Generation)
- Document Q&A
- Knowledge base search
- Conversation search

## Technical Details

### API Request Format (OpenAI-compatible)

```json
{
  "model": "text-embedding-3-small",
  "input": "Your text to embed",
  "encoding_format": "float"
}
```

### API Response Format

```json
{
  "object": "list",
  "data": [
    {
      "object": "embedding",
      "index": 0,
      "embedding": [0.0023064255, -0.009327292, ...]
    }
  ],
  "model": "text-embedding-3-small",
  "usage": {
    "prompt_tokens": 5,
    "total_tokens": 5
  }
}
```

### Similarity Calculation

Kelivo uses cosine similarity to compare embeddings:

```
similarity = (A · B) / (||A|| × ||B||)
```

Results range from -1 (opposite) to 1 (identical), with 0 being unrelated.

## Next Steps

- Configure [AI Providers](/docs/providers/openai) with embedding access
- Enable [Memory](/docs/assistant/memory) for your assistants
- Learn about [Assistant Basics](/docs/assistant/basics) for full configuration
- Check [Best Practices](/docs/best-practices) for optimal usage
