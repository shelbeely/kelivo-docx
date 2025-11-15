---
title: FAQ
date: 2025-09-02 01:16:27
---

# Frequently Asked Questions

## General Questions

### Where is my data stored?
All app data (settings, API keys, chat history, attachments) is stored **locally on your device** by default. Nothing is uploaded to Kelivo servers because the app operates entirely client-side. Your conversations stay private unless you explicitly configure backup to a third-party service like WebDAV.

### Do you collect analytics or personal data?
**No.** Kelivo does not include analytics SDKs, advertising networks, or telemetry. We don't track your usage, collect crash reports automatically, or gather any personal information. Your privacy is paramount.

### Is Kelivo free to use?
Yes, Kelivo is free and open-source. However, you'll need API keys from AI providers (OpenAI, Google, Anthropic, etc.), which may have their own pricing. Many providers offer free tiers or credits for new users.

### Which platforms are supported?
- **Android**: Version 8.0 (API 26) and above
- **iOS**: iOS 14.0 and above
- **HarmonyOS**: Available as a separate build
- **Desktop**: Not currently supported, but under consideration for future releases

### Can I use Kelivo offline?
No. Kelivo requires an internet connection to communicate with AI provider APIs. However, all your settings and chat history are stored locally and accessible offline for viewing.

## Features & Usage

### Why can't I send images to the AI?
Image support (vision) requires specific models that can process visual input. Ensure you're using a vision-capable model such as:
- **OpenAI**: gpt-4o, gpt-4-turbo, gpt-4-vision-preview
- **Google**: gemini-1.5-pro, gemini-1.5-flash (multimodal variants)
- **Anthropic**: claude-3.5-sonnet, claude-3-opus, claude-3-sonnet

Text-only models like gpt-3.5-turbo or older versions cannot process images.

### How do I attach files to messages?
1. Tap the **📎 attachment icon** in the message input area
2. Choose from:
   - **Camera**: Take a photo directly
   - **Photo Gallery**: Select existing images
   - **Documents**: Upload PDF, text files, or other supported formats (model-dependent)
3. Add your message text and send

**Note**: File upload support varies by provider and model. Check your model's capabilities.

### What is the difference between an Assistant and a Provider?
- **Provider**: The AI service (OpenAI, Google, Anthropic) and your API credentials
- **Assistant**: A reusable configuration that bundles a provider, model, system prompt, and settings

Think of providers as accounts and assistants as personas. You can create multiple assistants using the same provider with different personalities or specializations (e.g., "Code Helper", "Creative Writer").

### Can I use multiple providers in the same chat?
Not in a single conversation thread. Each chat is tied to one assistant/model. However, you can:
- Create multiple chats with different providers
- Switch between assistants mid-workflow
- Copy messages between chats if needed

### How does Memory work?
When enabled, Memory allows assistants to:
- Summarize key information from conversations
- Recall facts across chat sessions
- Provide personalized responses based on past interactions

Memory is stored locally and can be cleared anytime from assistant settings. See the [Memory documentation](/docs/assistant/memory) for details.

## Troubleshooting

### I'm getting rate limit errors
AI providers impose rate limits to prevent abuse. Solutions:
1. **Wait**: Rate limits usually reset after a short time (1 minute to 1 hour)
2. **Upgrade**: Consider upgrading your provider plan for higher limits
3. **Switch models**: Use less popular models that may have higher available capacity
4. **Check status**: Visit your provider's status page (status.openai.com, etc.)

Common rate limit errors:
- `429 Too Many Requests`: You've exceeded requests per minute
- `quota_exceeded`: You've used your monthly allocation

### The AI responses are gibberish or incomplete
This usually happens when:
1. **Context window exceeded**: Reduce conversation length or clear old messages
2. **Temperature too high**: Lower temperature (try 0.7 instead of 1.5)
3. **Model mismatch**: Ensure you're using the correct model format for your provider
4. **API issues**: Check the provider's status page

### How do I use a proxy or custom base URL?
For corporate proxies, self-hosted models, or API gateways:

1. Go to **Settings → Providers**
2. Edit or create a provider
3. Enter the **Custom Base URL** (e.g., `https://my-proxy.com/v1`)
4. Add any required **Custom Headers** in JSON format:
   ```json
   {
     "X-Organization": "my-org",
     "X-Custom-Header": "value"
   }
   ```
5. Save and test with a message

See [Custom Requests](/docs/assistant/custom-requests) for advanced configuration.

### Messages are slow to send or timeout
Check these common issues:
1. **Internet connection**: Ensure stable WiFi or mobile data
2. **Provider latency**: Some models are slower than others (e.g., GPT-4 vs GPT-3.5)
3. **Large context**: Long conversations take more time to process
4. **Timeout settings**: Adjust in Settings → Advanced (if available)

Try switching to a faster model like `gpt-3.5-turbo` or `gemini-1.5-flash` for quicker responses.

## Data & Privacy

### Can I export or back up my chats?
Yes! Kelivo offers several backup options:

1. **Local Export**:
   - Go to **Settings → Backup & Restore**
   - Tap **Export Data**
   - Choose what to export (chats, settings, API keys)
   - Save the file to your device

2. **WebDAV** (if configured):
   - Automatic sync to your WebDAV server
   - Encrypted backup recommended

3. **Manual Backup**:
   - Copy app data folder (Android) or use iTunes/Finder backup (iOS)

### How do I transfer Kelivo to a new device?
1. **Export** your data on the old device (Settings → Backup & Restore → Export)
2. **Install** Kelivo on the new device
3. **Import** the backup file (Settings → Backup & Restore → Import)
4. All chats, settings, and API keys will be restored

### Can I sync between devices?
Not directly. However, you can:
- Use WebDAV backup/restore to manually sync
- Export from one device and import to another
- Future versions may include cloud sync options

### How do I reset or delete everything?
**Warning**: This action cannot be undone!

1. Go to **Settings → Advanced**
2. Tap **Clear All Data** or **Reset App**
3. Confirm the action
4. All chats, API keys, and settings will be permanently deleted

Alternatively, uninstall and reinstall the app.

### How secure are my API keys?
API keys are stored in your device's secure storage:
- **Android**: Encrypted SharedPreferences or Keystore
- **iOS**: Keychain with encryption

Keys are never transmitted except to the provider APIs you configure. Always:
- Keep your device locked with a PIN/password
- Don't share screenshots containing keys
- Revoke and regenerate keys if compromised

## Advanced Features

### How do I set up web search?
1. Go to **Settings → Search Providers**
2. Add a search API:
   - **Exa**: Get API key from exa.ai
   - **Tavily**: Sign up at tavily.com
   - **Brave**: Get key from brave.com/search/api
   - **SearXNG**: Self-hosted or public instance URL
3. Enable search in your assistant or per-chat
4. The AI will automatically search when it needs current information

### What is MCP and do I need it?
**Model Context Protocol (MCP)** is an optional feature that lets AI models use external tools like:
- File system access
- Database queries  
- API integrations
- Custom scripts

You only need MCP if you want advanced tool-calling capabilities. Most users won't need this feature. See [MCP documentation](/docs/assistant/mcp) for setup.

### How do I reset memory for an assistant?
If an assistant is "remembering" incorrect information:

1. Open the **Assistant settings**
2. Find **Memory** section
3. Tap **Clear Memory** or **Reset Memory**
4. Confirm the action

This deletes stored summaries but keeps your chat history intact.

### Can I customize the UI or theme colors?
- **Theme**: Light, Dark, or System (Settings → Appearance)
- **Dynamic Color** (Android 12+): Adapts to your wallpaper colors
- **Custom themes**: Not currently supported, but may be added in future updates

## Still Need Help?

If your question isn't answered here:

1. **Check the documentation**: Browse other sections for detailed guides
2. **Search GitHub Issues**: Someone may have had the same problem  
   https://github.com/Chevey339/kelivo/issues
3. **Open a new issue**: Describe your problem with:
   - Device and OS version
   - Kelivo version
   - Steps to reproduce
   - Screenshots (hide API keys!)

We're here to help! 🚀
