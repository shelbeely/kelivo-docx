---
title: Assistant Basics
date: 2025-09-02 01:16:27
---

# Assistant Basics

Assistants are the heart of Kelivo. They bundle AI model settings, prompts, and behaviors into reusable configurations that you can customize for different tasks and workflows.

## What is an Assistant?

An Assistant is a pre-configured AI persona with:
- **Identity**: Name and avatar for easy recognition
- **Model Selection**: Default provider and model
- **Behavior Settings**: Temperature, top-p, and other parameters
- **Instructions**: System prompt defining role and expertise
- **Capabilities**: Optional tools like memory, search, TTS, and MCP

Think of assistants as specialized team members - each with unique skills, personalities, and access to different tools.

## Why Use Assistants?

### Benefits
- **Consistency**: Same behavior across all conversations
- **Efficiency**: Switch between specialized personas instantly
- **Organization**: Separate work, personal, and creative tasks
- **Customization**: Fine-tune settings for specific use cases
- **Reusability**: Create once, use across multiple chats

### Example Use Cases
- **Code Reviewer**: GPT-4o with strict, analytical prompts for reviewing pull requests
- **Creative Writer**: Claude 3.5 Sonnet with high temperature for storytelling
- **Research Assistant**: Gemini Pro with web search enabled for finding information
- **Language Tutor**: Any model with patient, educational prompts and TTS
- **Data Analyst**: o1-preview for complex reasoning about datasets

## Creating an Assistant

### Step-by-Step Guide

1. **Open Assistants**
   - Navigate to the **Assistants** section from the main menu
   - Tap the **+** or **Create New Assistant** button

2. **Set Identity**
   - **Name**: Choose a descriptive name (e.g., "Python Expert", "Marketing Guru")
   - **Avatar**: Select an icon or upload a custom image
   - **Description** (optional): Add notes about the assistant's purpose

3. **Select AI Model**
   - **Provider**: Choose from configured providers (OpenAI, Google, Anthropic, etc.)
   - **Model**: Select the specific model to use
     - **Fast models**: gpt-3.5-turbo, gemini-1.5-flash, claude-3-haiku
     - **Powerful models**: gpt-4o, gemini-1.5-pro, claude-3.5-sonnet
     - **Reasoning models**: o1-preview, o1-mini

4. **Configure Parameters**

   **Temperature** (0.0 - 2.0):
   - `0.0 - 0.3`: Deterministic, factual (code, math, analysis)
   - `0.7`: Balanced (recommended default)
   - `1.0 - 1.5`: Creative (writing, brainstorming)

   **Top-p** (0.0 - 1.0):
   - `0.9`: Recommended default
   - Lower values: More focused responses
   - Higher values: More diverse outputs

   **Top-k** (optional):
   - Usually 40-50 (provider-dependent)
   - Not all providers support this parameter

5. **Write System Prompt**
   - Define the assistant's role and expertise
   - Set behavioral guidelines
   - Specify output format preferences
   - See [Prompts](/docs/assistant/prompts) for best practices

6. **Enable Tools** (optional)
   - **Memory**: Remember context across sessions
   - **Web Search**: Access current information
   - **TTS**: Read responses aloud
   - **MCP**: Connect external tools

7. **Save**
   - Review all settings
   - Tap **Save** or **Create**

### Quick Example

**Name**: Code Mentor  
**Model**: GPT-4o  
**Temperature**: 0.3  
**Top-p**: 0.9  
**System Prompt**:
```
You are an expert software engineer and coding mentor. Provide clear, 
well-commented code examples with explanations. Always consider edge 
cases, performance, and best practices. When reviewing code, be 
constructive and educational.
```
**Tools**: None  

## Core Configuration Fields

### Name & Avatar
**Purpose**: Visual identification in the app

**Tips**:
- Use clear, descriptive names
- Choose distinct avatars for easy recognition
- Consider using emojis for quick visual scanning (e.g., 🐍 Python Helper)

### Default Provider & Model
**Purpose**: Which AI service and model to use

**Choosing a Model**:
- **For speed**: gpt-3.5-turbo, gemini-1.5-flash, claude-3-haiku
- **For quality**: gpt-4o, gemini-1.5-pro, claude-3.5-sonnet
- **For reasoning**: o1-preview, o1-mini
- **For cost**: Flash/mini variants
- **For vision**: Ensure multimodal support (GPT-4o, Gemini, Claude 3+)

**Fallback**: If a model is unavailable, Kelivo may prompt you to select an alternative.

### Temperature / Top-p / Top-k
**Purpose**: Control response style and creativity

**Common Configurations**:
- **Coding assistant**: temp=0.2, top-p=0.9
- **General chat**: temp=0.7, top-p=0.9  
- **Creative writing**: temp=1.2, top-p=0.95
- **Factual Q&A**: temp=0.3, top-p=0.85

**Tip**: Start with defaults (temp=0.7, top-p=0.9) and adjust based on results.

### System Prompt
**Purpose**: Define role, behavior, and constraints

**Key Elements**:
1. **Role**: "You are a [profession/expert]"
2. **Expertise**: Specific knowledge areas
3. **Behavior**: Tone, formality, response style
4. **Format**: How to structure outputs
5. **Constraints**: What to avoid or limitations

**Example**:
```
You are a friendly fitness coach specializing in home workouts. 
Provide exercise recommendations based on available equipment and 
fitness level. Always prioritize safety and proper form. Be 
encouraging and motivational.
```

See [Prompts documentation](/docs/assistant/prompts) for advanced techniques.

### Tools & Integrations

**Memory**: 
- Stores summaries of important facts
- Recalls context in future conversations
- See [Memory documentation](/docs/assistant/memory)

**Web Search**:
- Automatically searches for current information
- Requires search provider configuration
- Best for news, facts, and research tasks

**TTS (Text-to-Speech)**:
- Reads responses aloud
- Customizable voice and speed
- Useful for accessibility and multitasking

**MCP (Model Context Protocol)**:
- Connect external tools and APIs
- File system, databases, custom functions
- See [MCP documentation](/docs/assistant/mcp)

## Per-Chat Overrides

You can override assistant settings for specific conversations without changing the assistant defaults.

### How to Override

1. **Open a chat** with an assistant
2. **Access chat settings** (usually via menu or settings icon)
3. **Modify parameters**:
   - Switch to a different model
   - Adjust temperature
   - Enable/disable tools
4. **Continue chatting** with new settings

**Use Cases**:
- Testing different models
- Temporary creativity boost (higher temp)
- One-off tasks requiring special settings

**Note**: Overrides apply only to that specific chat. The assistant's default settings remain unchanged.

## Managing Assistants

### Editing
1. Open **Assistants** list
2. Tap on an assistant to edit
3. Modify any settings
4. **Save** changes

All future chats will use updated settings. Existing chats may continue with original settings unless overridden.

### Duplicating
1. Select an assistant
2. Tap **Duplicate** or **Copy**
3. Modify the copy as needed
4. **Save** as a new assistant

**Use Case**: Create variations for A/B testing or different tasks.

### Deleting
1. Select an assistant
2. Tap **Delete** or trash icon
3. **Confirm** deletion

**Warning**: Deleting an assistant doesn't delete associated chats, but those chats may lose assistant-specific settings.

### Exporting/Importing
- **Export**: Share assistant configurations as JSON files
- **Import**: Load assistants from files

**Use Cases**:
- Backup your configurations
- Share with team members
- Transfer between devices

## Best Practices

### Naming Conventions
- Use descriptive names: "Python Tutor" vs "Assistant 1"
- Include specialization: "SEO Content Writer", "SQL Database Expert"
- Add context if needed: "Work - Email Drafter", "Personal - Recipe Finder"

### Organization
- Create assistants for distinct tasks, not every conversation
- Limit to 5-10 core assistants for most users
- Use folders/tags if available in future versions

### Optimization
- **Start simple**: Basic prompt, standard settings
- **Iterate**: Refine based on actual usage
- **Test variations**: Duplicate and experiment with parameters
- **Monitor costs**: Track token usage per assistant

### System Prompt Guidelines
- Be specific but concise
- Use numbered rules for clarity
- Include examples for complex behaviors
- Update prompts based on performance

### Memory Usage
- Enable memory for long-term projects or personal assistants
- Disable for one-off tasks or privacy-sensitive conversations
- Periodically review and clear outdated memories

## Common Patterns

### The Specialist
**Purpose**: Expert in one specific domain  
**Example**: "React Developer" with coding-focused prompt, low temperature  
**Tools**: None or MCP for code execution

### The Creative
**Purpose**: Imaginative, open-ended responses  
**Example**: "Story Writer" with high temperature, creative prompt  
**Tools**: None

### The Researcher  
**Purpose**: Finding and synthesizing information  
**Example**: "Web Researcher" with web search enabled  
**Tools**: Web Search, Memory

### The Personal Assistant
**Purpose**: Remembers your preferences and context  
**Example**: "My AI" with memory enabled, balanced settings  
**Tools**: Memory, TTS

### The Polyglot
**Purpose**: Multi-language communication and translation  
**Example**: "Translator" with language-specific prompt  
**Tools**: TTS for pronunciation

## Troubleshooting

### Assistant isn't behaving as expected
- **Review system prompt**: Ensure it's clear and specific
- **Check temperature**: Too high may cause randomness
- **Verify model**: Some models handle instructions differently
- **Test in new chat**: Old context may influence behavior

### Responses are inconsistent
- **Lower temperature**: Reduces randomness
- **Strengthen system prompt**: Add explicit rules
- **Use examples**: Few-shot prompts improve consistency

### Assistant is slow
- **Switch to faster model**: Flash/Haiku variants
- **Reduce context**: Clear old messages
- **Check provider status**: May be experiencing delays

### Can't create more assistants
- **Check limits**: Some apps may have maximum assistant counts
- **Delete unused ones**: Free up slots
- **Export before deleting**: Backup configurations

## Next Steps

- Learn to write effective [Prompts](/docs/assistant/prompts)
- Explore [Memory](/docs/assistant/memory) for context retention
- Configure [Custom Requests](/docs/assistant/custom-requests) for advanced setups
- Set up [MCP](/docs/assistant/mcp) for tool integration

Need help? Check the [FAQ](/docs/getting-started/faq) or [open an issue](https://github.com/Chevey339/kelivo/issues).
