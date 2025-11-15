---
title: Best Practices
date: 2025-11-15 03:16:27
---

# Best Practices

Get the most out of Kelivo with these proven tips and techniques for better AI conversations, cost optimization, and effective workflows.

## Choosing the Right Model

### Decision Framework

**Ask yourself**:
1. **How complex is the task?**
   - Simple → Fast model (GPT-3.5, Flash, Haiku)
   - Complex → Powerful model (GPT-4o, Claude 3.5, Gemini Pro)

2. **How much context do I need?**
   - Short → Any model
   - Long documents → Gemini Pro (2M), Claude (200K)

3. **Do I need vision?**
   - Yes → GPT-4o, Claude 3+, Gemini 1.5+
   - No → Any model

4. **How important is speed?**
   - Critical → GPT-3.5, Gemini Flash, Claude Haiku
   - Less critical → Higher quality models

5. **What's my budget?**
   - Tight → Flash/Haiku, GPT-3.5
   - Flexible → Premium models for quality

### Model Recommendations by Task

**Writing & Content Creation**:
- **Best**: Claude 3.5 Sonnet (nuanced, natural)
- **Alternative**: GPT-4o (creative, versatile)
- **Budget**: GPT-3.5-turbo

**Coding & Development**:
- **Best**: GPT-4o (broad language support)
- **Alternative**: Claude 3.5 Sonnet (clean code)
- **Budget**: GPT-3.5-turbo
- **Reasoning**: o1-mini (complex algorithms)

**Data Analysis**:
- **Best**: GPT-4o with Code Interpreter
- **Alternative**: Gemini 1.5 Pro (built-in execution)
- **Reasoning**: o1-preview (complex analysis)

**Research & Information**:
- **Best**: Gemini 1.5 Pro (huge context)
- **Alternative**: Claude 3.5 Sonnet (long documents)
- **With search**: Any + web search enabled

**Chatting & General Use**:
- **Best balance**: GPT-4o or Gemini 1.5 Flash
- **Premium**: Claude 3.5 Sonnet
- **Budget**: GPT-3.5-turbo or Gemini Flash-8B

**Vision Tasks**:
- **Best**: GPT-4o (versatile)
- **Alternative**: Gemini 1.5 Pro (multimodal)
- **Budget**: Claude 3 Haiku (fast + cheap)

## Effective Prompting

### The Golden Rules

1. **Be specific**: Vague requests get vague responses
2. **Provide context**: Help the AI understand your goal
3. **Show examples**: Demonstrate desired output format
4. **Iterate**: Refine based on results
5. **Use structure**: Numbered lists, headings, clear sections

### Prompt Templates

**For Analysis**:
```
Analyze the following [document/code/data]:

[Content here]

Please provide:
1. Summary
2. Key findings
3. Potential issues or improvements
4. Recommendations

Focus on [specific aspect if relevant]
```

**For Creation**:
```
Create a [type of content] about [topic].

Requirements:
- [Requirement 1]
- [Requirement 2]
- [Requirement 3]

Style: [formal/casual/technical/etc.]
Length: [approximate word count or scope]
```

**For Problem Solving**:
```
I'm trying to [goal] but encountering [problem].

Context:
- [Relevant detail 1]
- [Relevant detail 2]

What I've tried:
1. [Attempt 1] - [result]
2. [Attempt 2] - [result]

What would you suggest?
```

**For Code**:
```
Write [language] code to [task].

Requirements:
- [Requirement 1]
- [Requirement 2]

Constraints:
- [Constraint 1]
- [Constraint 2]

Please include:
- Comments explaining logic
- Error handling
- Type hints/annotations
```

### Prompt Anti-Patterns

**❌ Too vague**:
```
"Write some code"
"Help me with this"
"Make it better"
```

**✅ Specific**:
```
"Write Python code to parse a CSV file and calculate average values per category"
"Help me debug this TypeError in line 42 of my React component"
"Improve the performance of this SQL query by adding appropriate indexes"
```

**❌ Missing context**:
```
"Why doesn't this work?"
[Paste code without explanation]
```

**✅ With context**:
```
"This React component should display user data, but I'm getting a blank screen. 
The API call succeeds (I can see data in console), but nothing renders. 
Here's the component: [code]"
```

## Managing Conversations

### When to Start a New Chat

**Start fresh when**:
- Switching to a completely different topic
- Context is getting too long (slow responses)
- AI seems "confused" by accumulated context
- Starting a new project or task
- You want to test different assistant settings

**Continue existing when**:
- Building on previous discussion
- Need to reference earlier context
- Working on same project
- Iterating on a solution

### Conversation Hygiene

**Periodically**:
1. **Review and clean**: Delete unnecessary messages
2. **Summarize**: Ask AI to summarize key points, then start fresh with summary
3. **Export important chats**: Backup valuable conversations
4. **Archive completed projects**: Move to archive vs delete

**Example summarization**:
```
User: Please summarize our discussion so far, including:
- Key decisions made
- Action items identified
- Important context to remember

AI: [Provides summary]

User: [Start new chat and paste summary as context]
```

### Context Window Management

**Signs you're hitting limits**:
- Responses getting slower
- AI "forgetting" earlier parts of conversation
- Errors about context length

**Solutions**:
1. **Summarize and restart**: See above
2. **Use model with larger context**: Switch to Gemini Pro (2M) or Claude (200K)
3. **Remove old messages**: Delete unnecessary history
4. **Use Memory**: Enable Memory to persist key facts

## Cost Optimization

### Understand Pricing

**Token economics**:
- Input tokens (your prompts) are usually cheaper
- Output tokens (AI responses) cost more
- Vision/multimodal increases cost
- Longer context = more input tokens each time

**Example costs per 1M tokens** (approximate):
- GPT-3.5: $0.50 input / $1.50 output
- GPT-4o: $2.50 input / $10.00 output
- Gemini Flash: $0.075 input / $0.30 output
- Claude Haiku: $0.25 input / $1.25 output

### Cost-Saving Strategies

**1. Right-size your model**:
```
❌ Using GPT-4 for "Hi, how are you?"
✅ GPT-3.5 for simple questions, GPT-4 for complex tasks
```

**2. Minimize context**:
- Shorter system prompts
- Clear old messages
- Don't include unnecessary information

**3. Control output length**:
- Set max_tokens appropriately
- Ask for concise responses when suitable
- Use "briefly" or "in 100 words" in prompts

**4. Use streaming interrupts**:
- Stop generation early if you have enough
- "That's sufficient, thanks"

**5. Batch similar requests**:
```
❌ 10 separate API calls
✅ "Analyze all 10 items in this list: [items]"
```

**6. Use free tiers first**:
- Google Gemini: Generous free tier
- Maximize before upgrading

**7. Cache/reuse when possible**:
- Same assistant settings across chats
- Reusable prompts
- Memory instead of re-explaining context

### Monitor Your Usage

**Track spending**:
- OpenAI: https://platform.openai.com/usage
- Anthropic: https://console.anthropic.com/settings/usage
- Google: AI Studio or Cloud Console

**Set budgets**:
- Most providers allow spending limits
- Set alerts for thresholds
- Review monthly

**Analyze patterns**:
- Which models cost most?
- Which tasks consume most tokens?
- Opportunities to optimize?

## Security & Privacy

### API Key Protection

**Do**:
- ✅ Store keys securely (Kelivo does this)
- ✅ Use different keys for different apps
- ✅ Rotate keys periodically (quarterly)
- ✅ Revoke keys immediately if compromised
- ✅ Monitor usage for anomalies

**Don't**:
- ❌ Share keys with others
- ❌ Commit keys to code repositories
- ❌ Include keys in screenshots
- ❌ Email or message keys
- ❌ Reuse same key everywhere

### Sensitive Information

**Never share with AI**:
- Real passwords or API keys
- Social Security Numbers
- Credit card details
- Private medical information
- Confidential business secrets

**Use placeholders**:
```
❌ "My password is SuperSecret123"
✅ "My password format is [placeholder]"

❌ "Store this: sk-proj-abc123..."
✅ "Show me how to store API keys securely"
```

### Data Privacy

**Remember**:
- Your prompts are sent to AI providers (OpenAI, Google, Anthropic)
- Providers may use data for model improvement (check their policies)
- Data in transit is encrypted (HTTPS)
- Kelivo stores data locally only

**For sensitive projects**:
- Consider self-hosted models
- Use providers with strict privacy policies
- Review provider terms of service
- Use business/enterprise accounts if available

## Organizing Your Workflow

### Assistant Strategy

**Create specialized assistants**:

**Professional**:
- Code Reviewer (focused, critical, technical)
- Technical Writer (clear, detailed documentation)
- Data Analyst (SQL, Python, visualization)

**Personal**:
- General Chat (balanced, friendly)
- Creative Writer (high temperature, imaginative)
- Learning Tutor (patient, Socratic method)

**Project-Based**:
- Project X Assistant (context-specific)
- Client Y Support (client requirements, tone)

**Naming convention**: `[Category] - [Specialty]`
- Examples: `Work - Code Review`, `Personal - Creative Writing`

### Folder/Tag Strategy

If Kelivo supports folders or tags:
- **By Type**: Work, Personal, Learning
- **By Project**: Project A, Project B
- **By Status**: Active, Archived, Templates

### Template Management

**Create reusable prompts**:
1. Document your best prompts
2. Save in notes app or file
3. Copy-paste when needed
4. Refine based on results

**Example templates**:
- Code review checklist
- Meeting notes format
- Research summary structure
- Blog post outline

## Backup & Data Management

### Backup Strategy

**Regular backups**:
- **Weekly**: For active projects
- **Monthly**: For general use
- **Before major changes**: App updates, device changes

**What to backup**:
- All chats (or important ones)
- Assistant configurations
- Provider settings (without API keys - will need to re-enter)

**Where to store**:
- Cloud storage (Google Drive, iCloud, Dropbox)
- External drive
- Multiple locations (3-2-1 rule)

### Export Important Conversations

**When to export individual chats**:
- Valuable research or insights
- Project documentation
- Important decisions or plans
- Code or content you'll reuse

**Format**: Markdown or JSON for easy reading/parsing

## Performance Optimization

### App Performance

**Keep Kelivo fast**:
1. **Regular cleanup**: Delete old/unneeded chats
2. **Manage storage**: Don't fill device to max
3. **Update app**: Latest version has fixes
4. **Restart periodically**: Fresh start helps
5. **Close other apps**: Free up RAM

### Response Speed

**For faster responses**:
1. **Use faster models**: Flash > Pro, GPT-3.5 > GPT-4
2. **Shorter context**: Less history to process
3. **Good internet**: WiFi over cellular when possible
4. **Off-peak hours**: Less provider load
5. **Streaming**: Should be enabled (default)

### Battery Life

**Save battery**:
- Close app when not using
- Disable background refresh (if option exists)
- Use dark mode on OLED screens
- Reduce screen brightness while reading responses

## Collaboration & Sharing

### Sharing Assistants

**Export and share configurations**:
1. Export assistant as JSON/file
2. Share file with team/friends
3. They import into their Kelivo
4. Everyone uses same prompts/settings

**Use cases**:
- Team standardization
- Community prompt sharing
- Personal backup

### Sharing Conversations

**When to share chats**:
- Collaborating on ideas
- Showing examples
- Technical support
- Documentation

**How to share**:
1. Export chat as Markdown
2. Review for sensitive info
3. Share via email, docs, etc.

**Privacy check**:
- Remove API keys if visible
- Redact personal information
- Check for company confidential data

## Continuous Improvement

### Track What Works

**Keep notes on**:
- Which prompts work best
- Model preferences per task
- Optimal settings (temperature, etc.)
- Common issues and solutions

### Experiment Regularly

**Try**:
- New models as they release
- Different prompt styles
- Various temperature settings
- Alternative providers

**A/B test**:
- Same prompt with different models
- Different temperatures for same task
- Various system prompt phrasings

### Stay Updated

**Follow**:
- Kelivo GitHub releases
- Provider blogs (OpenAI, Anthropic, Google)
- AI news and updates
- Community discussions

**Update when**:
- New features released
- Bug fixes available
- Security patches issued

## Common Workflows

### Code Development

1. **Design**: Discuss architecture with AI
2. **Implementation**: Generate code with AI assistance
3. **Review**: AI reviews your code
4. **Debug**: AI helps troubleshoot
5. **Document**: AI generates docs
6. **Test**: AI suggests test cases

### Content Creation

1. **Brainstorm**: Ideas with AI
2. **Outline**: Structure with AI help
3. **Draft**: AI assists writing
4. **Edit**: AI reviews and suggests improvements
5. **Finalize**: Polish with AI feedback

### Research

1. **Enable web search**: Get current information
2. **Gather**: AI searches and summarizes
3. **Analyze**: AI processes findings
4. **Synthesize**: AI creates comprehensive summary
5. **Export**: Save research notes

### Learning

1. **Ask questions**: Get explanations
2. **Request examples**: Concrete demonstrations
3. **Practice**: AI provides exercises
4. **Review**: AI corrects and explains
5. **Test**: AI quizzes understanding

## Handling Edge Cases

### When AI Refuses

**Common refusals**:
- Safety concerns
- Unethical requests
- Can't perform task
- Insufficient information

**How to handle**:
1. **Clarify intent**: Explain legitimate purpose
2. **Rephrase**: Different wording may work
3. **Provide context**: Educational, fictional, etc.
4. **Accept limitations**: Some things AI should refuse

### When AI Hallucinates

**Spotting hallucinations**:
- Fabricated citations/sources
- Impossible facts
- Contradictory statements
- Too-confident errors

**Prevention**:
```
✅ "Cite sources for factual claims"
✅ "If uncertain, say so"
✅ "Verify information before stating as fact"
```

**Correction**:
```
User: This fact seems wrong. Can you verify?
AI: You're right, I apologize for the error...
```

### When Responses are Unexpected

**Debug steps**:
1. **Check prompt clarity**: Is request clear?
2. **Review assistant settings**: Correct model/temperature?
3. **Clear context**: Start fresh chat
4. **Try different model**: May understand better
5. **Provide example**: Show desired output

## Summary

**Key Takeaways**:
- Choose the right model for each task
- Write clear, specific prompts
- Manage context and costs carefully
- Protect your API keys and data
- Backup regularly
- Experiment and iterate
- Stay updated with new features

**Most important**: Use AI as a tool to augment your capabilities, not replace your judgment. Always review and verify AI outputs, especially for important decisions.

**Next Steps**:
- Apply one tip today
- Track what works for you
- Share learnings with community
- Keep improving your AI workflows

Happy chatting! 🚀
