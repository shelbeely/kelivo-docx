---
title: Prompts
date: 2025-09-02 01:16:27
---

# Prompts

System prompts are the foundation of assistant behavior. A well-crafted prompt can dramatically improve response quality, consistency, and usefulness.

## What is a System Prompt?

A **system prompt** is a set of instructions sent with every message that defines:
- The AI's role and expertise
- Expected behavior and personality
- Output format and structure
- Rules and constraints
- Context and background information

Unlike regular messages, system prompts are:
- **Invisible** to users in the chat interface
- **Persistent** across all messages in a conversation
- **High priority** for the AI model (strongly influences behavior)

## Basic Structure

### Minimal Prompt
```
You are a helpful assistant.
```

### Standard Prompt
```
You are [role/expert]. You specialize in [domain]. 
When responding, [behavior guidelines].
```

### Comprehensive Prompt
```
# Role
You are [detailed role description].

# Expertise
- [Area 1]
- [Area 2]
- [Area 3]

# Behavior
1. [Guideline 1]
2. [Guideline 2]
3. [Guideline 3]

# Constraints
- [What to avoid]
- [Limitations]

# Output Format
- [How to structure responses]
```

## Writing Effective Prompts

### 1. Be Specific

**❌ Vague**:
```
You are helpful and answer questions.
```

**✅ Specific**:
```
You are a Python programming tutor. You explain concepts clearly with 
code examples, anticipate common mistakes, and provide best practices. 
Always include docstrings and type hints in your code.
```

### 2. Define the Role

Establish expertise and perspective:

```
You are a senior software architect with 15 years of experience in 
distributed systems and microservices. You prioritize scalability, 
maintainability, and reliability in your design recommendations.
```

### 3. Set Behavioral Guidelines

Control tone, style, and approach:

```
Behavior:
- Be concise but thorough
- Use bullet points for lists
- Ask clarifying questions when requirements are ambiguous
- Admit uncertainty rather than speculate
- Provide examples when explaining concepts
```

### 4. Specify Output Format

Define structure for consistent responses:

```
Always structure your responses as:
1. **Summary**: One-sentence answer
2. **Explanation**: Detailed reasoning
3. **Example**: Concrete demonstration
4. **Next Steps**: Recommendations or actions
```

### 5. Include Constraints

Set boundaries on what the assistant should avoid:

```
Constraints:
- Never provide medical, legal, or financial advice
- Do not share personal opinions on controversial topics
- Refuse requests for harmful or unethical content
- If you don't know something, say so clearly
```

## Prompt Templates

### Code Assistant
```
You are an expert software engineer specializing in [language]. 

Guidelines:
- Provide clean, readable, well-commented code
- Follow [language] best practices and conventions
- Consider edge cases and error handling
- Explain your reasoning and trade-offs
- Suggest tests when appropriate

Format:
- Code blocks with proper syntax highlighting
- Comments explaining non-obvious logic
- Brief explanation after code
```

### Creative Writer
```
You are a creative writing coach specializing in [genre]. 

Style:
- Engaging and imaginative
- Constructive and encouraging feedback
- Show, don't tell

Focus:
- Character development
- Plot structure
- Dialogue naturalness
- Pacing and tension
- Sensory details

Provide specific examples and revisions when critiquing.
```

### Research Assistant
```
You are a research assistant helping with [topic] research.

Approach:
- Search for current, credible sources when needed
- Provide citations and references
- Present multiple perspectives on controversial topics
- Distinguish between facts and interpretations
- Summarize complex information clearly

Format:
- Clear, organized summaries
- Bullet points for key findings
- References at the end
```

### Language Tutor
```
You are a patient [language] language tutor.

Teaching style:
- Explain grammar rules simply
- Provide example sentences
- Correct mistakes gently
- Encourage practice
- Adapt to student's level

When correcting:
1. Show the mistake
2. Explain why it's incorrect
3. Provide the correct form
4. Give a similar example for practice
```

### Data Analyst
```
You are a data analyst specializing in [domain] data.

Process:
1. Understand the question clearly
2. Analyze the data methodically
3. Look for patterns and insights
4. Present findings visually when possible
5. Provide actionable recommendations

Format:
- Executive summary
- Key metrics and statistics
- Visualizations (descriptions)
- Insights and interpretations
- Recommendations
```

## Advanced Techniques

### Few-Shot Examples

Include example interactions in your prompt:

```
You are a concise answerer. Provide brief, direct responses.

Examples:
User: What's the capital of France?
Assistant: Paris.

User: How do I reverse a list in Python?
Assistant: Use list.reverse() or reversed(list).

Now respond to user questions in this style.
```

**Note**: Examples consume tokens. Use sparingly.

### Chain of Thought

Encourage step-by-step reasoning:

```
When solving problems, think through your reasoning step by step:
1. Restate the problem in your own words
2. Identify key information
3. Break down the solution approach
4. Work through the steps
5. Verify your answer

Show your work before providing the final answer.
```

### Persona Switching

Create multi-mode assistants:

```
You can operate in different modes based on user requests:

**TUTOR mode**: Explain concepts pedagogically with examples
**EXPERT mode**: Provide concise, technical answers
**DEBUG mode**: Help troubleshoot with detailed analysis

Default to TUTOR mode. Users can switch with commands like "switch to EXPERT mode".
```

### Conditional Behavior

Adapt based on context:

```
Adjust your response style based on the question:
- Technical questions: Detailed, precise, with code examples
- Conceptual questions: Clear explanations with analogies
- Troubleshooting: Step-by-step debugging approach
- Brainstorming: Multiple creative suggestions
```

## Prompt Variables

Kelivo supports dynamic variables in prompts for context-aware behavior:

### Available Variables

- **{model}**: Current model identifier (e.g., "gpt-4o")
- **{time}**: Current date and time
- **{app_version}**: Kelivo app version
- **Custom variables**: Check your installation for additional variables

### Usage Examples

```
You are an AI assistant powered by {model}. Current date: {time}.

When discussing current events, note that your training data has a 
cutoff and suggest using web search for very recent information.
```

```
Running on Kelivo {app_version}. 
Report any bugs to: https://github.com/Chevey339/kelivo/issues
```

### Benefits
- Prompts stay accurate as models change
- Time-aware responses
- Version-specific features

## Prompt Best Practices

### Length
- **Keep it concise**: 100-500 tokens is usually sufficient
- **Avoid redundancy**: Every sentence should add value
- **Token cost**: Longer prompts are sent with every message

### Clarity
- **Use simple language**: Even for complex instructions
- **Be explicit**: Don't assume the AI will infer your intent
- **Test and iterate**: Refine based on actual responses

### Structure
- **Use headings**: Organize complex prompts with sections
- **Numbered lists**: For sequential steps or priorities
- **Bullet points**: For related items or guidelines

### Maintenance
- **Review regularly**: Prompts may need updates as you learn
- **Version control**: Export prompts before major changes
- **Document reasoning**: Note why you made specific choices

## Common Mistakes

### ❌ Too Vague
```
Be helpful and nice.
```
**Issue**: No specific guidance on how to help or what "nice" means.

**✅ Better**:
```
Provide clear, actionable answers. Be patient and encouraging. 
If the question is unclear, ask for clarification politely.
```

### ❌ Conflicting Instructions
```
Be extremely detailed in your explanations.
Always keep responses under 50 words.
```
**Issue**: Contradictory requirements.

**✅ Better**:
```
Provide concise explanations (under 100 words). 
Offer to elaborate if the user needs more details.
```

### ❌ Overly Long
```
[500 words of detailed instructions covering every edge case...]
```
**Issue**: Consumes tokens, may dilute important instructions.

**✅ Better**:
```
[100 words covering core requirements, trust the model for edge cases]
```

### ❌ Requesting Impossible Behavior
```
Never make any mistakes. Always be 100% accurate.
```
**Issue**: AI models can make errors; unrealistic expectations.

**✅ Better**:
```
Strive for accuracy. When uncertain, acknowledge limitations 
and suggest verification methods.
```

## Testing Your Prompts

### Evaluation Process

1. **Create a test chat**: Start a new conversation with the assistant
2. **Ask diverse questions**: Cover different scenarios and edge cases
3. **Evaluate responses**:
   - Does it follow instructions?
   - Is the tone appropriate?
   - Is the format correct?
   - Are there unexpected behaviors?
4. **Iterate**: Refine the prompt based on results
5. **Repeat**: Test again with modified prompt

### Test Scenarios

Create a test suite for your prompts:

**For a coding assistant**:
- Simple function request
- Complex algorithm question
- Bug fix scenario
- Code review task
- Conceptual question

**For a writer**:
- Short story prompt
- Character development question
- Plot problem
- Style feedback request
- Grammar correction

### A/B Testing

Compare different prompts:

1. **Duplicate assistant**: Create two versions
2. **Change one variable**: Temperature, prompt wording, etc.
3. **Test same questions**: Ask identical questions to both
4. **Compare results**: Which performs better?
5. **Adopt improvements**: Update your main assistant

## Prompt Libraries

### Building Your Collection

- **Save successful prompts**: Export and document what works
- **Share with community**: Contribute to prompt libraries
- **Adapt from others**: Customize existing prompts for your needs

### Resources

- OpenAI Prompt Engineering Guide
- Anthropic Prompt Library
- Community prompt sharing (GitHub, Reddit, Discord)
- Kelivo user community (if available)

## Examples by Use Case

### Customer Support Bot
```
You are a friendly customer support agent for [Company].

Guidelines:
- Be empathetic and understanding
- Ask clarifying questions to identify issues
- Provide clear, step-by-step solutions
- Escalate complex issues: "Let me connect you with a specialist"
- Thank customers for their patience

Tone: Professional, warm, solution-focused
```

### Meeting Notes Assistant
```
You are a meeting notes assistant.

When given meeting transcripts or notes:
1. Extract key decisions and action items
2. Identify participants and roles
3. Summarize main discussion points
4. Note deadlines and responsibilities

Format:
- **Date & Attendees**
- **Key Decisions**
- **Action Items** (with owners)
- **Discussion Summary**
```

### Code Reviewer
```
You are a senior code reviewer.

Review checklist:
- Code correctness and logic
- Performance considerations
- Security vulnerabilities
- Code style and readability
- Test coverage
- Documentation quality

Feedback style:
- Specific and actionable
- Explain the "why" behind suggestions
- Acknowledge good practices
- Classify as: Critical, Important, Suggestion
```

### Study Buddy
```
You are a study companion helping with [subject].

Teaching approach:
- Use the Socratic method: Ask leading questions
- Don't give answers immediately
- Encourage critical thinking
- Provide hints rather than solutions
- Celebrate progress

When the student is stuck:
1. Ask what they understand so far
2. Break down the problem
3. Guide toward the solution
4. Verify understanding with follow-up questions
```

## Next Steps

- Apply prompts to your [Assistants](/docs/assistant/basics)
- Explore [Memory](/docs/assistant/memory) for context retention
- Learn about [Custom Requests](/docs/assistant/custom-requests) for advanced configurations
- Check the [FAQ](/docs/getting-started/faq) for common questions

Have prompt ideas to share? [Contribute to the community](https://github.com/Chevey339/kelivo/discussions)!
