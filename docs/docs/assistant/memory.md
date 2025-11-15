---
title: Memory
date: 2025-09-02 01:16:27
---

# Memory

Memory enables assistants to remember important information across conversations and chat sessions, creating more personalized and context-aware interactions.

## What is Memory?

Memory is a feature that allows AI assistants to:
- **Extract key facts** from conversations automatically
- **Store summaries** of important information locally
- **Recall context** in future interactions
- **Build understanding** of your preferences and history over time

Unlike conversation history (which is limited by context windows), Memory creates a persistent knowledge base that transcends individual chats.

## How Memory Works

### The Process

1. **Conversation Happens**: You chat with an assistant that has Memory enabled

2. **Information Extraction**: The AI identifies salient facts:
   - Personal preferences
   - Project details
   - Important dates and deadlines
   - Recurring topics
   - Decision context

3. **Local Storage**: Summaries are saved to your device
   - Encrypted in device storage
   - Never uploaded to servers
   - Accessible only to that assistant

4. **Context Injection**: In future chats, relevant memories are:
   - Retrieved based on conversation context
   - Included in the prompt automatically
   - Used to inform responses

5. **Continuous Learning**: New information updates existing memories
   - Facts are refined over time
   - Outdated information can be removed
   - You maintain full control

### Example Flow

**First conversation**:
```
User: I'm working on a Python project using FastAPI
Assistant: Great! I'll help you with your FastAPI project.
[Memory stored: "User is working on a Python project using FastAPI"]
```

**Later conversation (days later)**:
```
User: How should I handle authentication?
Assistant: For your FastAPI project, I recommend using OAuth2 with JWT tokens...
[Recalled memory about FastAPI project]
```

## Enabling Memory

### For an Assistant

1. **Open Assistant Settings**
2. **Find Memory Section**
3. **Toggle "Enable Memory"**
4. **Save changes**

All future chats with this assistant will use Memory.

### Per-Chat Control

Some implementations allow enabling/disabling Memory for individual chats:
- Check chat settings menu
- Look for "Use Memory" toggle
- Override assistant default if needed

## What Gets Remembered?

### Automatically Stored

- **Personal information**: Name, occupation, interests
- **Preferences**: Communication style, format preferences
- **Projects**: Ongoing work, tools you use
- **Decisions**: Past choices and reasoning
- **Context**: Background information mentioned repeatedly
- **Goals**: Stated objectives and milestones

### Not Typically Stored

- **Transient details**: Temporary requests
- **Sensitive data**: Explicit secrets or passwords (though you should never share these)
- **Every message**: Only summaries, not full transcripts
- **Duplicate facts**: Redundant information

### Example Memories

```
- User prefers code examples in TypeScript
- Working on a mobile app for fitness tracking
- Deadline: MVP by end of Q2
- Uses React Native and Expo
- Prefers detailed explanations with step-by-step guidance
- Located in Pacific timezone
```

## Managing Memory

### Viewing Memories

1. **Open Assistant Settings**
2. **Navigate to Memory section**
3. **View stored memories**
   - May be displayed as a list or summary
   - Shows what the assistant has learned

### Editing Memories

- **Manual corrections**: Some implementations allow editing individual facts
- **Update naturally**: Mention corrections in conversation
  ```
  User: Actually, I've switched to using Django instead of FastAPI
  ```

### Clearing Memories

#### Clear All Memories for an Assistant
1. **Open Assistant Settings**
2. **Memory section**
3. **Tap "Clear Memory" or "Reset Memory"**
4. **Confirm action**

**Effect**: All stored memories deleted, fresh start

#### Clear Specific Memories
- If supported, select individual facts to remove
- Otherwise, use natural language:
  ```
  User: Forget about my previous Django project, I'm focusing on React now
  ```

### Exporting Memories

- **Backup**: Export as part of assistant configuration
- **Review**: See what's been stored
- **Transfer**: Move to a new device or assistant

## Use Cases

### Personal AI Companion

**Scenario**: Long-term personal assistant

**Memory Benefits**:
- Remembers your preferences and habits
- Tracks ongoing projects and goals
- Recalls past conversations and decisions
- Provides personalized recommendations

**Example**:
```
Assistant knows:
- You're a vegetarian
- You work out in mornings
- You're learning Spanish
- You prefer bullet-point summaries

Responses are automatically tailored to these preferences.
```

### Project Assistant

**Scenario**: Multi-session software development

**Memory Benefits**:
- Tracks project architecture and decisions
- Remembers technologies and libraries in use
- Recalls past issues and solutions
- Maintains context across weeks or months

**Example**:
```
Memory stores:
- Tech stack: Node.js, PostgreSQL, React
- Architecture decisions: Microservices pattern
- Key challenges: Scaling the user service
- Team preferences: TypeScript, functional style
```

### Learning Companion

**Scenario**: Long-term study partner

**Memory Benefits**:
- Tracks what you've learned
- Identifies knowledge gaps
- Adjusts difficulty progressively
- References past lessons

**Example**:
```
Remembers:
- You've mastered basic Python syntax
- Struggling with decorators
- Prefers visual explanations
- Currently learning web development
```

### Research Assistant

**Scenario**: Extended research project

**Memory Benefits**:
- Maintains research question focus
- Tracks sources and findings
- Remembers key arguments
- Builds on previous insights

**Example**:
```
Stores:
- Research question: Impact of AI on education
- Sources reviewed: [list]
- Key themes: Personalization, accessibility, equity
- Next steps: Survey analysis
```

## Privacy & Security

### Local Storage Only

- **No cloud sync**: Memories stay on your device
- **No external access**: Only you and the local app can read them
- **Encryption**: Stored securely in device storage
- **Full control**: Delete anytime

### Data Handling

- **What the AI sees**: Memories are sent with prompts to the AI provider
- **Provider policies**: Subject to OpenAI/Google/Anthropic privacy terms
- **No telemetry**: Kelivo doesn't track or collect your memories
- **Backup considerations**: Include memories in your backup strategy

### Best Practices

- **Avoid secrets**: Never rely on Memory for passwords or API keys
- **Review periodically**: Check what's stored
- **Clear when done**: Remove memories for completed projects
- **Device security**: Use device lock/encryption for added protection

## Memory vs. Conversation History

| Feature | Memory | Conversation History |
|---------|--------|---------------------|
| **Storage** | Persistent summaries | Full message log |
| **Scope** | Cross-session | Current chat only |
| **Limit** | Configurable | Context window limit |
| **Format** | Key facts | Complete messages |
| **Performance** | Efficient | Can slow with length |
| **Control** | Clear/edit memories | Clear history |

**Use both**: Memory for persistent context, history for immediate conversation flow

## Troubleshooting

### Memory not working
- **Check enabled**: Verify Memory is on in assistant settings
- **Model support**: Ensure the model supports function calling (needed for memory extraction)
- **Give it time**: Memory may take a few exchanges to build

### Incorrect memories
- **Correct in conversation**: "Actually, I use Python not Java"
- **Clear and restart**: Reset Memory and rebuild
- **Review settings**: Check if extraction is too aggressive

### Memory seems lost
- **Check device**: Memory is device-specific; not on other devices
- **Verify assistant**: Make sure you're using the right assistant
- **Restore backup**: Import from backup if you've lost device data

### Too much/too little being remembered
- **Model dependent**: Different models extract differently
- **Prompt adjustment**: Modify system prompt to guide memory behavior
- **Manual curation**: Clear unwanted memories regularly

## Advanced: Memory in System Prompts

You can guide memory behavior with prompts:

```
Memory Guidelines:
- Remember project technical details
- Store important deadlines
- Recall past decisions and reasoning
- Don't store temporary requests or one-off questions
```

```
When extracting memories:
- Focus on long-term context
- Ignore casual chitchat
- Update existing memories rather than duplicating
```

## Future Enhancements

Potential upcoming features (check app updates):
- **Memory categories**: Organize by project, topic, or type
- **Shared memories**: Sync across devices (with encryption)
- **Memory search**: Query your stored knowledge
- **Memory analytics**: Insights into what you discuss most
- **Retention policies**: Auto-expire old memories

## Comparison with Other Features

### Memory vs. RAG (Retrieval Augmented Generation)
- **Memory**: Automatic, summarized facts
- **RAG**: Explicit document/knowledge base search
- Kelivo focuses on Memory; RAG may come via MCP integrations

### Memory vs. Fine-tuning
- **Memory**: Dynamic, user-specific, changeable
- **Fine-tuning**: Static, model-wide, requires retraining
- Memory is more flexible for personal use

## Tips for Effective Memory Use

1. **Be explicit about important info**: "Remember that..." or "For context..."
2. **Update when things change**: Mention changes explicitly
3. **Review periodically**: Check stored memories monthly
4. **Clear completed projects**: Keep memory focused and relevant
5. **Use per-assistant memory**: Different assistants for different contexts

## Example Workflows

### Onboarding a New Assistant

1. **Enable Memory**
2. **Have an introduction chat**:
   ```
   User: Let me tell you about myself and my work...
   [Share key context: role, projects, preferences, goals]
   ```
3. **Review stored memories**
4. **Adjust as needed**
5. **Start using for real tasks**

### Maintaining Memory

**Weekly**:
- Use the assistant actively; natural conversation updates memory

**Monthly**:
- Review stored memories
- Clear outdated information
- Add important missing context

**Quarterly**:
- Major review or reset
- Export for backup
- Realign with current projects/goals

## Need Help?

- Check [Assistant Basics](/docs/assistant/basics) for general configuration
- Read [Prompts](/docs/assistant/prompts) to guide memory behavior
- See [FAQ](/docs/getting-started/faq) for common questions
- Report issues on [GitHub](https://github.com/Chevey339/kelivo/issues)
