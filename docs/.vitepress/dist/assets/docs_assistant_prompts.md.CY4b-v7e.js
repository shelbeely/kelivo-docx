import{_ as a,c as n,o as e,aM as i}from"./chunks/framework.IHAHILrl.js";const u=JSON.parse('{"title":"Prompts","description":"","frontmatter":{"title":"Prompts","date":"2025-09-02T01:16:27.000Z"},"headers":[],"relativePath":"docs/assistant/prompts.md","filePath":"docs/assistant/prompts.md","lastUpdated":1763177628000}'),t={name:"docs/assistant/prompts.md"};function p(l,s,o,r,c,d){return e(),n("div",null,[...s[0]||(s[0]=[i(`<h1 id="prompts" tabindex="-1">Prompts <a class="header-anchor" href="#prompts" aria-label="Permalink to &quot;Prompts&quot;">​</a></h1><p>System prompts are the foundation of assistant behavior. A well-crafted prompt can dramatically improve response quality, consistency, and usefulness.</p><h2 id="what-is-a-system-prompt" tabindex="-1">What is a System Prompt? <a class="header-anchor" href="#what-is-a-system-prompt" aria-label="Permalink to &quot;What is a System Prompt?&quot;">​</a></h2><p>A <strong>system prompt</strong> is a set of instructions sent with every message that defines:</p><ul><li>The AI&#39;s role and expertise</li><li>Expected behavior and personality</li><li>Output format and structure</li><li>Rules and constraints</li><li>Context and background information</li></ul><p>Unlike regular messages, system prompts are:</p><ul><li><strong>Invisible</strong> to users in the chat interface</li><li><strong>Persistent</strong> across all messages in a conversation</li><li><strong>High priority</strong> for the AI model (strongly influences behavior)</li></ul><h2 id="basic-structure" tabindex="-1">Basic Structure <a class="header-anchor" href="#basic-structure" aria-label="Permalink to &quot;Basic Structure&quot;">​</a></h2><h3 id="minimal-prompt" tabindex="-1">Minimal Prompt <a class="header-anchor" href="#minimal-prompt" aria-label="Permalink to &quot;Minimal Prompt&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>You are a helpful assistant.</span></span></code></pre></div><h3 id="standard-prompt" tabindex="-1">Standard Prompt <a class="header-anchor" href="#standard-prompt" aria-label="Permalink to &quot;Standard Prompt&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>You are [role/expert]. You specialize in [domain]. </span></span>
<span class="line"><span>When responding, [behavior guidelines].</span></span></code></pre></div><h3 id="comprehensive-prompt" tabindex="-1">Comprehensive Prompt <a class="header-anchor" href="#comprehensive-prompt" aria-label="Permalink to &quot;Comprehensive Prompt&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># Role</span></span>
<span class="line"><span>You are [detailed role description].</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Expertise</span></span>
<span class="line"><span>- [Area 1]</span></span>
<span class="line"><span>- [Area 2]</span></span>
<span class="line"><span>- [Area 3]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Behavior</span></span>
<span class="line"><span>1. [Guideline 1]</span></span>
<span class="line"><span>2. [Guideline 2]</span></span>
<span class="line"><span>3. [Guideline 3]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Constraints</span></span>
<span class="line"><span>- [What to avoid]</span></span>
<span class="line"><span>- [Limitations]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Output Format</span></span>
<span class="line"><span>- [How to structure responses]</span></span></code></pre></div><h2 id="writing-effective-prompts" tabindex="-1">Writing Effective Prompts <a class="header-anchor" href="#writing-effective-prompts" aria-label="Permalink to &quot;Writing Effective Prompts&quot;">​</a></h2><h3 id="_1-be-specific" tabindex="-1">1. Be Specific <a class="header-anchor" href="#_1-be-specific" aria-label="Permalink to &quot;1. Be Specific&quot;">​</a></h3><p><strong>❌ Vague</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>You are helpful and answer questions.</span></span></code></pre></div><p><strong>✅ Specific</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>You are a Python programming tutor. You explain concepts clearly with </span></span>
<span class="line"><span>code examples, anticipate common mistakes, and provide best practices. </span></span>
<span class="line"><span>Always include docstrings and type hints in your code.</span></span></code></pre></div><h3 id="_2-define-the-role" tabindex="-1">2. Define the Role <a class="header-anchor" href="#_2-define-the-role" aria-label="Permalink to &quot;2. Define the Role&quot;">​</a></h3><p>Establish expertise and perspective:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>You are a senior software architect with 15 years of experience in </span></span>
<span class="line"><span>distributed systems and microservices. You prioritize scalability, </span></span>
<span class="line"><span>maintainability, and reliability in your design recommendations.</span></span></code></pre></div><h3 id="_3-set-behavioral-guidelines" tabindex="-1">3. Set Behavioral Guidelines <a class="header-anchor" href="#_3-set-behavioral-guidelines" aria-label="Permalink to &quot;3. Set Behavioral Guidelines&quot;">​</a></h3><p>Control tone, style, and approach:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Behavior:</span></span>
<span class="line"><span>- Be concise but thorough</span></span>
<span class="line"><span>- Use bullet points for lists</span></span>
<span class="line"><span>- Ask clarifying questions when requirements are ambiguous</span></span>
<span class="line"><span>- Admit uncertainty rather than speculate</span></span>
<span class="line"><span>- Provide examples when explaining concepts</span></span></code></pre></div><h3 id="_4-specify-output-format" tabindex="-1">4. Specify Output Format <a class="header-anchor" href="#_4-specify-output-format" aria-label="Permalink to &quot;4. Specify Output Format&quot;">​</a></h3><p>Define structure for consistent responses:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Always structure your responses as:</span></span>
<span class="line"><span>1. **Summary**: One-sentence answer</span></span>
<span class="line"><span>2. **Explanation**: Detailed reasoning</span></span>
<span class="line"><span>3. **Example**: Concrete demonstration</span></span>
<span class="line"><span>4. **Next Steps**: Recommendations or actions</span></span></code></pre></div><h3 id="_5-include-constraints" tabindex="-1">5. Include Constraints <a class="header-anchor" href="#_5-include-constraints" aria-label="Permalink to &quot;5. Include Constraints&quot;">​</a></h3><p>Set boundaries on what the assistant should avoid:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Constraints:</span></span>
<span class="line"><span>- Never provide medical, legal, or financial advice</span></span>
<span class="line"><span>- Do not share personal opinions on controversial topics</span></span>
<span class="line"><span>- Refuse requests for harmful or unethical content</span></span>
<span class="line"><span>- If you don&#39;t know something, say so clearly</span></span></code></pre></div><h2 id="prompt-templates" tabindex="-1">Prompt Templates <a class="header-anchor" href="#prompt-templates" aria-label="Permalink to &quot;Prompt Templates&quot;">​</a></h2><h3 id="code-assistant" tabindex="-1">Code Assistant <a class="header-anchor" href="#code-assistant" aria-label="Permalink to &quot;Code Assistant&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>You are an expert software engineer specializing in [language]. </span></span>
<span class="line"><span></span></span>
<span class="line"><span>Guidelines:</span></span>
<span class="line"><span>- Provide clean, readable, well-commented code</span></span>
<span class="line"><span>- Follow [language] best practices and conventions</span></span>
<span class="line"><span>- Consider edge cases and error handling</span></span>
<span class="line"><span>- Explain your reasoning and trade-offs</span></span>
<span class="line"><span>- Suggest tests when appropriate</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Format:</span></span>
<span class="line"><span>- Code blocks with proper syntax highlighting</span></span>
<span class="line"><span>- Comments explaining non-obvious logic</span></span>
<span class="line"><span>- Brief explanation after code</span></span></code></pre></div><h3 id="creative-writer" tabindex="-1">Creative Writer <a class="header-anchor" href="#creative-writer" aria-label="Permalink to &quot;Creative Writer&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>You are a creative writing coach specializing in [genre]. </span></span>
<span class="line"><span></span></span>
<span class="line"><span>Style:</span></span>
<span class="line"><span>- Engaging and imaginative</span></span>
<span class="line"><span>- Constructive and encouraging feedback</span></span>
<span class="line"><span>- Show, don&#39;t tell</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Focus:</span></span>
<span class="line"><span>- Character development</span></span>
<span class="line"><span>- Plot structure</span></span>
<span class="line"><span>- Dialogue naturalness</span></span>
<span class="line"><span>- Pacing and tension</span></span>
<span class="line"><span>- Sensory details</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Provide specific examples and revisions when critiquing.</span></span></code></pre></div><h3 id="research-assistant" tabindex="-1">Research Assistant <a class="header-anchor" href="#research-assistant" aria-label="Permalink to &quot;Research Assistant&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>You are a research assistant helping with [topic] research.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Approach:</span></span>
<span class="line"><span>- Search for current, credible sources when needed</span></span>
<span class="line"><span>- Provide citations and references</span></span>
<span class="line"><span>- Present multiple perspectives on controversial topics</span></span>
<span class="line"><span>- Distinguish between facts and interpretations</span></span>
<span class="line"><span>- Summarize complex information clearly</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Format:</span></span>
<span class="line"><span>- Clear, organized summaries</span></span>
<span class="line"><span>- Bullet points for key findings</span></span>
<span class="line"><span>- References at the end</span></span></code></pre></div><h3 id="language-tutor" tabindex="-1">Language Tutor <a class="header-anchor" href="#language-tutor" aria-label="Permalink to &quot;Language Tutor&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>You are a patient [language] language tutor.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Teaching style:</span></span>
<span class="line"><span>- Explain grammar rules simply</span></span>
<span class="line"><span>- Provide example sentences</span></span>
<span class="line"><span>- Correct mistakes gently</span></span>
<span class="line"><span>- Encourage practice</span></span>
<span class="line"><span>- Adapt to student&#39;s level</span></span>
<span class="line"><span></span></span>
<span class="line"><span>When correcting:</span></span>
<span class="line"><span>1. Show the mistake</span></span>
<span class="line"><span>2. Explain why it&#39;s incorrect</span></span>
<span class="line"><span>3. Provide the correct form</span></span>
<span class="line"><span>4. Give a similar example for practice</span></span></code></pre></div><h3 id="data-analyst" tabindex="-1">Data Analyst <a class="header-anchor" href="#data-analyst" aria-label="Permalink to &quot;Data Analyst&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>You are a data analyst specializing in [domain] data.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Process:</span></span>
<span class="line"><span>1. Understand the question clearly</span></span>
<span class="line"><span>2. Analyze the data methodically</span></span>
<span class="line"><span>3. Look for patterns and insights</span></span>
<span class="line"><span>4. Present findings visually when possible</span></span>
<span class="line"><span>5. Provide actionable recommendations</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Format:</span></span>
<span class="line"><span>- Executive summary</span></span>
<span class="line"><span>- Key metrics and statistics</span></span>
<span class="line"><span>- Visualizations (descriptions)</span></span>
<span class="line"><span>- Insights and interpretations</span></span>
<span class="line"><span>- Recommendations</span></span></code></pre></div><h2 id="advanced-techniques" tabindex="-1">Advanced Techniques <a class="header-anchor" href="#advanced-techniques" aria-label="Permalink to &quot;Advanced Techniques&quot;">​</a></h2><h3 id="few-shot-examples" tabindex="-1">Few-Shot Examples <a class="header-anchor" href="#few-shot-examples" aria-label="Permalink to &quot;Few-Shot Examples&quot;">​</a></h3><p>Include example interactions in your prompt:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>You are a concise answerer. Provide brief, direct responses.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Examples:</span></span>
<span class="line"><span>User: What&#39;s the capital of France?</span></span>
<span class="line"><span>Assistant: Paris.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>User: How do I reverse a list in Python?</span></span>
<span class="line"><span>Assistant: Use list.reverse() or reversed(list).</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Now respond to user questions in this style.</span></span></code></pre></div><p><strong>Note</strong>: Examples consume tokens. Use sparingly.</p><h3 id="chain-of-thought" tabindex="-1">Chain of Thought <a class="header-anchor" href="#chain-of-thought" aria-label="Permalink to &quot;Chain of Thought&quot;">​</a></h3><p>Encourage step-by-step reasoning:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>When solving problems, think through your reasoning step by step:</span></span>
<span class="line"><span>1. Restate the problem in your own words</span></span>
<span class="line"><span>2. Identify key information</span></span>
<span class="line"><span>3. Break down the solution approach</span></span>
<span class="line"><span>4. Work through the steps</span></span>
<span class="line"><span>5. Verify your answer</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Show your work before providing the final answer.</span></span></code></pre></div><h3 id="persona-switching" tabindex="-1">Persona Switching <a class="header-anchor" href="#persona-switching" aria-label="Permalink to &quot;Persona Switching&quot;">​</a></h3><p>Create multi-mode assistants:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>You can operate in different modes based on user requests:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**TUTOR mode**: Explain concepts pedagogically with examples</span></span>
<span class="line"><span>**EXPERT mode**: Provide concise, technical answers</span></span>
<span class="line"><span>**DEBUG mode**: Help troubleshoot with detailed analysis</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Default to TUTOR mode. Users can switch with commands like &quot;switch to EXPERT mode&quot;.</span></span></code></pre></div><h3 id="conditional-behavior" tabindex="-1">Conditional Behavior <a class="header-anchor" href="#conditional-behavior" aria-label="Permalink to &quot;Conditional Behavior&quot;">​</a></h3><p>Adapt based on context:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Adjust your response style based on the question:</span></span>
<span class="line"><span>- Technical questions: Detailed, precise, with code examples</span></span>
<span class="line"><span>- Conceptual questions: Clear explanations with analogies</span></span>
<span class="line"><span>- Troubleshooting: Step-by-step debugging approach</span></span>
<span class="line"><span>- Brainstorming: Multiple creative suggestions</span></span></code></pre></div><h2 id="prompt-variables" tabindex="-1">Prompt Variables <a class="header-anchor" href="#prompt-variables" aria-label="Permalink to &quot;Prompt Variables&quot;">​</a></h2><p>Kelivo supports dynamic variables in prompts for context-aware behavior:</p><h3 id="available-variables" tabindex="-1">Available Variables <a class="header-anchor" href="#available-variables" aria-label="Permalink to &quot;Available Variables&quot;">​</a></h3><ul><li><strong>{model}</strong>: Current model identifier (e.g., &quot;gpt-4o&quot;)</li><li><strong>{time}</strong>: Current date and time</li><li><strong>{app_version}</strong>: Kelivo app version</li><li><strong>Custom variables</strong>: Check your installation for additional variables</li></ul><h3 id="usage-examples" tabindex="-1">Usage Examples <a class="header-anchor" href="#usage-examples" aria-label="Permalink to &quot;Usage Examples&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>You are an AI assistant powered by {model}. Current date: {time}.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>When discussing current events, note that your training data has a </span></span>
<span class="line"><span>cutoff and suggest using web search for very recent information.</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Running on Kelivo {app_version}. </span></span>
<span class="line"><span>Report any bugs to: https://github.com/Chevey339/kelivo/issues</span></span></code></pre></div><h3 id="benefits" tabindex="-1">Benefits <a class="header-anchor" href="#benefits" aria-label="Permalink to &quot;Benefits&quot;">​</a></h3><ul><li>Prompts stay accurate as models change</li><li>Time-aware responses</li><li>Version-specific features</li></ul><h2 id="prompt-best-practices" tabindex="-1">Prompt Best Practices <a class="header-anchor" href="#prompt-best-practices" aria-label="Permalink to &quot;Prompt Best Practices&quot;">​</a></h2><h3 id="length" tabindex="-1">Length <a class="header-anchor" href="#length" aria-label="Permalink to &quot;Length&quot;">​</a></h3><ul><li><strong>Keep it concise</strong>: 100-500 tokens is usually sufficient</li><li><strong>Avoid redundancy</strong>: Every sentence should add value</li><li><strong>Token cost</strong>: Longer prompts are sent with every message</li></ul><h3 id="clarity" tabindex="-1">Clarity <a class="header-anchor" href="#clarity" aria-label="Permalink to &quot;Clarity&quot;">​</a></h3><ul><li><strong>Use simple language</strong>: Even for complex instructions</li><li><strong>Be explicit</strong>: Don&#39;t assume the AI will infer your intent</li><li><strong>Test and iterate</strong>: Refine based on actual responses</li></ul><h3 id="structure" tabindex="-1">Structure <a class="header-anchor" href="#structure" aria-label="Permalink to &quot;Structure&quot;">​</a></h3><ul><li><strong>Use headings</strong>: Organize complex prompts with sections</li><li><strong>Numbered lists</strong>: For sequential steps or priorities</li><li><strong>Bullet points</strong>: For related items or guidelines</li></ul><h3 id="maintenance" tabindex="-1">Maintenance <a class="header-anchor" href="#maintenance" aria-label="Permalink to &quot;Maintenance&quot;">​</a></h3><ul><li><strong>Review regularly</strong>: Prompts may need updates as you learn</li><li><strong>Version control</strong>: Export prompts before major changes</li><li><strong>Document reasoning</strong>: Note why you made specific choices</li></ul><h2 id="common-mistakes" tabindex="-1">Common Mistakes <a class="header-anchor" href="#common-mistakes" aria-label="Permalink to &quot;Common Mistakes&quot;">​</a></h2><h3 id="❌-too-vague" tabindex="-1">❌ Too Vague <a class="header-anchor" href="#❌-too-vague" aria-label="Permalink to &quot;❌ Too Vague&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Be helpful and nice.</span></span></code></pre></div><p><strong>Issue</strong>: No specific guidance on how to help or what &quot;nice&quot; means.</p><p><strong>✅ Better</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Provide clear, actionable answers. Be patient and encouraging. </span></span>
<span class="line"><span>If the question is unclear, ask for clarification politely.</span></span></code></pre></div><h3 id="❌-conflicting-instructions" tabindex="-1">❌ Conflicting Instructions <a class="header-anchor" href="#❌-conflicting-instructions" aria-label="Permalink to &quot;❌ Conflicting Instructions&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Be extremely detailed in your explanations.</span></span>
<span class="line"><span>Always keep responses under 50 words.</span></span></code></pre></div><p><strong>Issue</strong>: Contradictory requirements.</p><p><strong>✅ Better</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Provide concise explanations (under 100 words). </span></span>
<span class="line"><span>Offer to elaborate if the user needs more details.</span></span></code></pre></div><h3 id="❌-overly-long" tabindex="-1">❌ Overly Long <a class="header-anchor" href="#❌-overly-long" aria-label="Permalink to &quot;❌ Overly Long&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[500 words of detailed instructions covering every edge case...]</span></span></code></pre></div><p><strong>Issue</strong>: Consumes tokens, may dilute important instructions.</p><p><strong>✅ Better</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[100 words covering core requirements, trust the model for edge cases]</span></span></code></pre></div><h3 id="❌-requesting-impossible-behavior" tabindex="-1">❌ Requesting Impossible Behavior <a class="header-anchor" href="#❌-requesting-impossible-behavior" aria-label="Permalink to &quot;❌ Requesting Impossible Behavior&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Never make any mistakes. Always be 100% accurate.</span></span></code></pre></div><p><strong>Issue</strong>: AI models can make errors; unrealistic expectations.</p><p><strong>✅ Better</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Strive for accuracy. When uncertain, acknowledge limitations </span></span>
<span class="line"><span>and suggest verification methods.</span></span></code></pre></div><h2 id="testing-your-prompts" tabindex="-1">Testing Your Prompts <a class="header-anchor" href="#testing-your-prompts" aria-label="Permalink to &quot;Testing Your Prompts&quot;">​</a></h2><h3 id="evaluation-process" tabindex="-1">Evaluation Process <a class="header-anchor" href="#evaluation-process" aria-label="Permalink to &quot;Evaluation Process&quot;">​</a></h3><ol><li><strong>Create a test chat</strong>: Start a new conversation with the assistant</li><li><strong>Ask diverse questions</strong>: Cover different scenarios and edge cases</li><li><strong>Evaluate responses</strong>: <ul><li>Does it follow instructions?</li><li>Is the tone appropriate?</li><li>Is the format correct?</li><li>Are there unexpected behaviors?</li></ul></li><li><strong>Iterate</strong>: Refine the prompt based on results</li><li><strong>Repeat</strong>: Test again with modified prompt</li></ol><h3 id="test-scenarios" tabindex="-1">Test Scenarios <a class="header-anchor" href="#test-scenarios" aria-label="Permalink to &quot;Test Scenarios&quot;">​</a></h3><p>Create a test suite for your prompts:</p><p><strong>For a coding assistant</strong>:</p><ul><li>Simple function request</li><li>Complex algorithm question</li><li>Bug fix scenario</li><li>Code review task</li><li>Conceptual question</li></ul><p><strong>For a writer</strong>:</p><ul><li>Short story prompt</li><li>Character development question</li><li>Plot problem</li><li>Style feedback request</li><li>Grammar correction</li></ul><h3 id="a-b-testing" tabindex="-1">A/B Testing <a class="header-anchor" href="#a-b-testing" aria-label="Permalink to &quot;A/B Testing&quot;">​</a></h3><p>Compare different prompts:</p><ol><li><strong>Duplicate assistant</strong>: Create two versions</li><li><strong>Change one variable</strong>: Temperature, prompt wording, etc.</li><li><strong>Test same questions</strong>: Ask identical questions to both</li><li><strong>Compare results</strong>: Which performs better?</li><li><strong>Adopt improvements</strong>: Update your main assistant</li></ol><h2 id="prompt-libraries" tabindex="-1">Prompt Libraries <a class="header-anchor" href="#prompt-libraries" aria-label="Permalink to &quot;Prompt Libraries&quot;">​</a></h2><h3 id="building-your-collection" tabindex="-1">Building Your Collection <a class="header-anchor" href="#building-your-collection" aria-label="Permalink to &quot;Building Your Collection&quot;">​</a></h3><ul><li><strong>Save successful prompts</strong>: Export and document what works</li><li><strong>Share with community</strong>: Contribute to prompt libraries</li><li><strong>Adapt from others</strong>: Customize existing prompts for your needs</li></ul><h3 id="resources" tabindex="-1">Resources <a class="header-anchor" href="#resources" aria-label="Permalink to &quot;Resources&quot;">​</a></h3><ul><li>OpenAI Prompt Engineering Guide</li><li>Anthropic Prompt Library</li><li>Community prompt sharing (GitHub, Reddit, Discord)</li><li>Kelivo user community (if available)</li></ul><h2 id="examples-by-use-case" tabindex="-1">Examples by Use Case <a class="header-anchor" href="#examples-by-use-case" aria-label="Permalink to &quot;Examples by Use Case&quot;">​</a></h2><h3 id="customer-support-bot" tabindex="-1">Customer Support Bot <a class="header-anchor" href="#customer-support-bot" aria-label="Permalink to &quot;Customer Support Bot&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>You are a friendly customer support agent for [Company].</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Guidelines:</span></span>
<span class="line"><span>- Be empathetic and understanding</span></span>
<span class="line"><span>- Ask clarifying questions to identify issues</span></span>
<span class="line"><span>- Provide clear, step-by-step solutions</span></span>
<span class="line"><span>- Escalate complex issues: &quot;Let me connect you with a specialist&quot;</span></span>
<span class="line"><span>- Thank customers for their patience</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Tone: Professional, warm, solution-focused</span></span></code></pre></div><h3 id="meeting-notes-assistant" tabindex="-1">Meeting Notes Assistant <a class="header-anchor" href="#meeting-notes-assistant" aria-label="Permalink to &quot;Meeting Notes Assistant&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>You are a meeting notes assistant.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>When given meeting transcripts or notes:</span></span>
<span class="line"><span>1. Extract key decisions and action items</span></span>
<span class="line"><span>2. Identify participants and roles</span></span>
<span class="line"><span>3. Summarize main discussion points</span></span>
<span class="line"><span>4. Note deadlines and responsibilities</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Format:</span></span>
<span class="line"><span>- **Date &amp; Attendees**</span></span>
<span class="line"><span>- **Key Decisions**</span></span>
<span class="line"><span>- **Action Items** (with owners)</span></span>
<span class="line"><span>- **Discussion Summary**</span></span></code></pre></div><h3 id="code-reviewer" tabindex="-1">Code Reviewer <a class="header-anchor" href="#code-reviewer" aria-label="Permalink to &quot;Code Reviewer&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>You are a senior code reviewer.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Review checklist:</span></span>
<span class="line"><span>- Code correctness and logic</span></span>
<span class="line"><span>- Performance considerations</span></span>
<span class="line"><span>- Security vulnerabilities</span></span>
<span class="line"><span>- Code style and readability</span></span>
<span class="line"><span>- Test coverage</span></span>
<span class="line"><span>- Documentation quality</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Feedback style:</span></span>
<span class="line"><span>- Specific and actionable</span></span>
<span class="line"><span>- Explain the &quot;why&quot; behind suggestions</span></span>
<span class="line"><span>- Acknowledge good practices</span></span>
<span class="line"><span>- Classify as: Critical, Important, Suggestion</span></span></code></pre></div><h3 id="study-buddy" tabindex="-1">Study Buddy <a class="header-anchor" href="#study-buddy" aria-label="Permalink to &quot;Study Buddy&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>You are a study companion helping with [subject].</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Teaching approach:</span></span>
<span class="line"><span>- Use the Socratic method: Ask leading questions</span></span>
<span class="line"><span>- Don&#39;t give answers immediately</span></span>
<span class="line"><span>- Encourage critical thinking</span></span>
<span class="line"><span>- Provide hints rather than solutions</span></span>
<span class="line"><span>- Celebrate progress</span></span>
<span class="line"><span></span></span>
<span class="line"><span>When the student is stuck:</span></span>
<span class="line"><span>1. Ask what they understand so far</span></span>
<span class="line"><span>2. Break down the problem</span></span>
<span class="line"><span>3. Guide toward the solution</span></span>
<span class="line"><span>4. Verify understanding with follow-up questions</span></span></code></pre></div><h2 id="next-steps" tabindex="-1">Next Steps <a class="header-anchor" href="#next-steps" aria-label="Permalink to &quot;Next Steps&quot;">​</a></h2><ul><li>Apply prompts to your <a href="/docs/assistant/basics">Assistants</a></li><li>Explore <a href="/docs/assistant/memory">Memory</a> for context retention</li><li>Learn about <a href="/docs/assistant/custom-requests">Custom Requests</a> for advanced configurations</li><li>Check the <a href="/docs/getting-started/faq">FAQ</a> for common questions</li></ul><p>Have prompt ideas to share? <a href="https://github.com/Chevey339/kelivo/discussions" target="_blank" rel="noreferrer">Contribute to the community</a>!</p>`,125)])])}const g=a(t,[["render",p]]);export{u as __pageData,g as default};
