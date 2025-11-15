---
title: Troubleshooting
date: 2025-11-15 03:16:27
---

# Troubleshooting Guide

Common issues and how to resolve them. If your problem isn't listed here, check the [FAQ](/docs/getting-started/faq) or [open an issue](https://github.com/Chevey339/kelivo/issues).

## Installation Issues

### Can't Install APK on Android

**Problem**: "App not installed" or "Installation blocked"

**Solutions**:
1. **Check Android version**: Need 8.0 (Oreo) or later
   - Settings → About phone → Android version
2. **Enable Unknown Sources**:
   - Android 8-11: Settings → Security → Unknown sources → Enable for browser
   - Android 12+: Settings → Apps → Special app access → Install unknown apps → Enable for browser
3. **Enough storage**: Need ~50MB free space
4. **Download complete**: Re-download if file may be corrupted
5. **Try different browser**: Chrome, Firefox, or Samsung Internet

### iOS App Won't Download

**Problem**: App Store download fails or hangs

**Solutions**:
1. **Check connection**: Switch between WiFi and cellular
2. **Storage space**: Need ~100MB free
3. **iOS version**: Need iOS 14.0 or later
4. **Sign in**: Verify you're signed into App Store
5. **Restart device**: Force restart can help
6. **Try later**: App Store may be temporarily unavailable

## Connection & API Issues

### "Invalid API Key" Errors

**Problem**: Authentication failures with AI providers

**Diagnosis**:
```
Error messages like:
- "Incorrect API key provided"
- "Invalid authentication credentials"
- 401 Unauthorized
```

**Solutions**:
1. **Check the key**:
   - Copy entire key (no spaces before/after)
   - Verify no line breaks or special characters
   - Check you copied the correct key (not billing code or org ID)

2. **Verify key status**:
   - OpenAI: https://platform.openai.com/api-keys
   - Anthropic: https://console.anthropic.com/settings/keys
   - Google: https://aistudio.google.com/apikey
   - Check if key was revoked or expired

3. **Test the key manually**:
   ```bash
   # OpenAI
   curl https://api.openai.com/v1/models \
     -H "Authorization: Bearer YOUR_KEY"
   
   # Anthropic
   curl https://api.anthropic.com/v1/messages \
     -H "x-api-key: YOUR_KEY" \
     -H "anthropic-version: 2023-06-01"
   ```

4. **Regenerate key**: Create a new one if needed

5. **Check provider settings**:
   - Verify correct base URL
   - Ensure provider type matches key

### Rate Limit Errors (429)

**Problem**: "Rate limit exceeded" or "Too many requests"

**Understanding Rate Limits**:
- **RPM**: Requests per minute
- **TPM**: Tokens per minute
- **RPD**: Requests per day

**Immediate solutions**:
1. **Wait it out**: Most limits reset within 60 seconds
2. **Retry with backoff**: Wait 10s, then 20s, then 40s
3. **Check your tier**:
   - OpenAI: https://platform.openai.com/account/limits
   - Free tiers have very low limits

**Long-term solutions**:
1. **Upgrade tier**:
   - OpenAI: Use more to automatically upgrade
   - Anthropic: Higher usage → higher limits
   - Google: Use Vertex AI for production

2. **Use faster/cheaper models**:
   - GPT-3.5-turbo instead of GPT-4
   - Gemini Flash instead of Pro
   - Claude Haiku instead of Opus

3. **Optimize usage**:
   - Shorten system prompts
   - Clear old conversation history
   - Reduce max_tokens setting

### Connection Timeouts

**Problem**: Requests timeout or hang indefinitely

**Solutions**:
1. **Check internet**: Test other apps/websites
2. **Switch networks**: Try WiFi ↔ cellular
3. **VPN issues**: Disable VPN temporarily
4. **Increase timeout**: Settings → Advanced (if available)
5. **Use faster model**: Some models are slower
6. **Provider status**: Check status pages:
   - OpenAI: https://status.openai.com
   - Anthropic: https://status.anthropic.com
   - Google: https://status.cloud.google.com

### "Model Not Found" Errors

**Problem**: Selected model doesn't exist or isn't available

**Solutions**:
1. **Check model name**: Must be exact
   - ✅ `gpt-4o`
   - ❌ `gpt4o`, `GPT-4o`, `gpt-4-o`

2. **Verify access**:
   - Some models require waitlist approval (o1 series)
   - Check provider docs for available models

3. **Region restrictions**:
   - Azure OpenAI: Models vary by region
   - Some providers have geographic limitations

4. **Try alternative**: Use similar model that works
   - gpt-4-turbo → gpt-4o
   - claude-3-opus → claude-3.5-sonnet

## Response Quality Issues

### Responses are Gibberish or Nonsensical

**Problem**: AI outputs random characters or incoherent text

**Possible causes & fixes**:

1. **Temperature too high**:
   - Lower to 0.7 or below
   - Try 0.3 for factual tasks

2. **Context window exceeded**:
   - Clear old messages
   - Start new conversation
   - Use model with larger context

3. **Model mismatch**:
   - Verify model name is correct
   - Ensure provider type matches API key

4. **Corrupted state**:
   - Force close and restart app
   - Clear app cache
   - Reinstall if persistent

### AI Doesn't Follow Instructions

**Problem**: Responses ignore system prompt or behave incorrectly

**Solutions**:

1. **Improve system prompt**:
   ```
   ❌ "Be helpful"
   ✅ "You are a Python expert. Always provide:
       1. Working code examples
       2. Clear explanations
       3. Best practices
       Never apologize. Be direct and technical."
   ```

2. **Make instructions explicit**:
   - Use numbered lists
   - Provide examples
   - Specify format clearly

3. **Lower temperature**: More deterministic behavior

4. **Try different model**: Some follow instructions better
   - GPT-4o > GPT-3.5 for complex instructions
   - Claude excels at following detailed prompts

5. **Use few-shot examples**: Show desired behavior

### Responses are Too Short or Cut Off

**Problem**: Incomplete responses

**Diagnosis**:
- Response ends mid-sentence
- Says "..." at the end
- Clearly incomplete

**Solutions**:

1. **Increase max_tokens**:
   - Settings → Assistant → Max Response Length
   - Try 2048 or 4096 tokens

2. **Context window full**:
   - Clear old messages to make room
   - Model reserves space for its response
   - Formula: context_limit = prompt + response

3. **Ask for continuation**:
   ```
   User: Continue
   ```

4. **Chunk the request**:
   ```
   User: Part 1: Analyze the code structure
   [AI responds]
   User: Part 2: Suggest improvements
   ```

## Feature-Specific Issues

### Vision/Image Understanding Not Working

**Problem**: Can't send images or AI doesn't "see" them

**Solutions**:

1. **Verify vision support**:
   - ✅ GPT-4o, GPT-4-turbo, GPT-4-vision
   - ✅ Claude 3+, Claude 3.5
   - ✅ Gemini 1.5+, Gemini 2.0
   - ❌ GPT-3.5, older models

2. **Check image format**:
   - Supported: JPEG, PNG, WebP, GIF
   - Max size: Usually 20MB
   - Resolution: Some models resize large images

3. **Permission issues**:
   - Grant photo library access
   - Settings → Kelivo → Photos

4. **Try different image**: Test with a simple photo first

### Memory Not Working

**Problem**: Assistant doesn't remember previous conversations

**Diagnosis**:
- Repeats questions
- Doesn't recall facts you mentioned
- Behaves like first conversation

**Solutions**:

1. **Verify Memory enabled**:
   - Assistant Settings → Memory → ON

2. **Check model support**:
   - Needs function calling capability
   - Works: GPT-4+, Claude 3+, Gemini 1.5+
   - May not work: GPT-3.5, older models

3. **Give it time**: Memory builds after several exchanges

4. **Be explicit**: "Remember that I prefer..."

5. **Clear and rebuild**: If storing wrong info
   - Clear Memory
   - Reintroduce correct facts

### MCP Tools Not Working

**Problem**: AI won't use MCP tools or tools fail to execute

**Solutions**:

1. **Verify MCP enabled**:
   - Settings → MCP → ON
   - Assistant Settings → Tools → MCP servers selected

2. **Check server connection**:
   - Server must be running
   - Correct URL/address
   - No firewall blocking

3. **Model support**:
   - Requires function calling
   - Not all models support tool use well
   - Best: GPT-4o, Claude 3.5, Gemini 1.5 Pro

4. **Be explicit in request**:
   ```
   ❌ "What files are in my folder?"
   ✅ "Use the file_list tool to show files in /home/user/documents"
   ```

5. **Check server logs**: Look for errors on server side

6. **Test manually**: Verify tool works outside Kelivo

## Performance Issues

### App is Slow or Laggy

**Problem**: UI is unresponsive or sluggish

**Solutions**:

1. **Clear app cache**:
   - Android: Settings → Apps → Kelivo → Storage → Clear cache
   - iOS: Reinstall app (data preserved if backed up)

2. **Reduce conversation history**:
   - Delete old chats
   - Archive completed conversations
   - Settings → Limit history size (if available)

3. **Close other apps**: Free up RAM

4. **Check storage**: Need at least 1GB free space

5. **Update app**: Latest version may have performance fixes

6. **Restart device**: Can help with general slowness

### Messages Send Slowly

**Problem**: Long delay between sending and receiving

**Diagnosis**:
- Check if delay is before or after seeing "thinking"
- Monitor network speed

**Solutions**:

1. **Network speed**:
   - Test internet: Run speed test
   - Switch WiFi/cellular
   - Move closer to router

2. **Model is slow**:
   - GPT-4: Slower than GPT-3.5
   - o1 models: Deliberately slow (reasoning)
   - Gemini Pro: Slower than Flash
   - **Solution**: Use faster model

3. **Large context**:
   - Long conversations take more time
   - Clear history
   - Start fresh chat

4. **Provider issues**:
   - Check status pages
   - Try different time of day
   - High demand periods (weekday mornings) are slower

5. **Streaming enabled**: Should be on by default
   - Verify in settings

## Data & Sync Issues

### Lost Conversations After Reinstall

**Problem**: Chats disappeared

**Prevention**:
- Always export/backup before uninstalling
- Settings → Backup → Export Data

**Recovery**:
- Check if you have a backup file
- Import if available
- Otherwise, data is lost (local-only storage)

**Future prevention**:
- Regular backups (weekly/monthly)
- WebDAV sync (if available)
- Export important chats individually

### Can't Import Backup

**Problem**: Import fails or produces error

**Solutions**:

1. **Check file format**: Should be .json or .kelivo (or app's format)

2. **File not corrupted**: Try opening in text editor
   - Should be valid JSON
   - If garbled, file is corrupted

3. **Version compatibility**:
   - Backup from much newer version may not work
   - Try updating app first

4. **Permissions**: Ensure app can read the file

5. **File location**: Place in accessible folder

6. **Try different file**: Test with a small test export

## Crashes & Stability

### App Crashes on Startup

**Problem**: App closes immediately after opening

**Solutions**:

1. **Restart device**: Simple but often effective

2. **Clear app cache** (Android):
   - Settings → Apps → Kelivo → Storage → Clear cache

3. **Check storage space**: Need ~500MB free

4. **Update app**: May fix crash bugs

5. **Corrupted data**:
   - Backup if possible
   - Reinstall app (warning: loses data)

6. **Report crash**:
   - Note what you did before crash
   - Open GitHub issue with details

### Random Crashes During Use

**Problem**: App closes unexpectedly while using

**Debug steps**:

1. **Identify pattern**:
   - Specific action causes crash?
   - Certain model/provider?
   - After how long?

2. **Reduce load**:
   - Close other apps
   - Clear old chats
   - Smaller images

3. **Update app and OS**

4. **Report with details**:
   - Device model
   - OS version
   - Steps to reproduce
   - Screenshots if relevant

## Getting More Help

### Before Opening an Issue

**Gather information**:
- Device: Model and OS version
- Kelivo version: Settings → About
- Provider and model: Which AI service
- Error message: Exact text or screenshot
- Steps to reproduce: What leads to problem

### Where to Get Help

1. **Documentation**: Search these docs
2. **FAQ**: Check common questions
3. **GitHub Issues**: Search existing issues
4. **GitHub Discussions**: Ask questions
5. **Discord/Community**: If available

### Opening a Good Issue

**Include**:
```markdown
**Environment**
- Device: iPhone 13 Pro
- OS: iOS 17.2
- Kelivo Version: 1.2.3

**Problem**
Clear description of issue

**Steps to Reproduce**
1. Open app
2. Add OpenAI provider
3. Send message
4. Error appears

**Expected Behavior**
What should happen

**Actual Behavior**
What actually happens

**Screenshots**
Attach if relevant (hide API keys!)

**Additional Context**
Any other relevant info
```

### Emergency: Can't Use App at All

**Nuclear option (last resort)**:

1. **Export data if possible**
2. **Uninstall completely**
3. **Restart device**
4. **Reinstall app**
5. **Import backup**
6. **Reconfigure from scratch**

This usually fixes persistent issues but loses data if not backed up.

## Prevention Tips

**Avoid issues by**:
- Regular backups
- Keeping app updated
- Not filling device storage
- Using supported models
- Protecting API keys
- Monitoring provider quotas
- Starting fresh chats periodically
- Reading error messages carefully

Most issues have simple solutions. Take time to diagnose before assuming worst!
