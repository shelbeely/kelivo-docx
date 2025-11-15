---
title: Quick Start
date: 2025-09-02 01:16:27
---

# Quick Start

Welcome to Kelivo! This guide will help you get started with your multi-platform AI chat client in minutes.

## 1) Install Kelivo

### Android
1. Download the latest APK from [GitHub Releases](https://github.com/Chevey339/kelivo/releases/latest)
2. Enable "Install from Unknown Sources" in your device settings if prompted
3. Open the downloaded APK file and follow the installation prompts
4. Launch Kelivo from your app drawer

### iOS
Choose one of the following options:
- **App Store**: Download from the [App Store](https://apps.apple.com/us/app/kelivo/id6752122930) (recommended for stable releases)
- **TestFlight**: Join the beta program at https://testflight.apple.com/join/PZZyRMyY for early access to new features

### HarmonyOS
1. Download the latest .hap or .app file from the [OpenHarmony releases](https://github.com/Chevey339/kelivo-ohos/releases/latest)
2. Install following your device's installation procedure
3. Launch Kelivo

## 2) Configure Language & Theme

Customize Kelivo's appearance to match your preferences:

1. Open the app and tap the **Settings** icon
2. Navigate to **Appearance**
3. Choose your preferred:
   - **Language**: English, 简体中文, or other available languages
   - **Theme**: Light, Dark, or System (follows device setting)
   - **Dynamic Color** (Android 12+ only): Enable Material You theming based on your wallpaper

**Tip**: Dark mode is optimized for OLED displays and reduces eye strain in low-light conditions.

## 3) Add AI Providers

Kelivo supports multiple AI providers. You'll need API keys from the services you want to use.

### Getting API Keys

- **OpenAI**: Sign up at https://platform.openai.com and create an API key
- **Google Gemini**: Get a free key from https://aistudio.google.com/apikey
- **Anthropic**: Create an account at https://console.anthropic.com
- **Other providers**: Check respective provider documentation

### Adding a Provider

1. Go to **Settings → Providers**
2. Tap **Add Provider** or the **+** button
3. Fill in the provider details:
   - **Name**: A friendly name (e.g., "My OpenAI Account")
   - **Provider Type**: Select from the dropdown (OpenAI, Google, Anthropic, etc.)
   - **API Key**: Paste your API key here
   - **Base URL** (optional): Use custom endpoints or proxies if needed
   - **Default Model** (optional): Set a preferred model for this provider

4. Tap **Save**

**Security Note**: API keys are stored locally on your device and never uploaded to external servers.

## 4) Create an Assistant

Assistants are reusable configurations that define how the AI should behave.

1. Navigate to **Assistants** from the main menu
2. Tap **Create New Assistant** or the **+** button
3. Configure your assistant:
   - **Name**: Give it a descriptive name (e.g., "Coding Helper", "Writing Assistant")
   - **Avatar**: Choose an icon or image to represent the assistant
   - **Default Provider**: Select which AI provider to use
   - **Default Model**: Pick a specific model (e.g., gpt-4o, claude-3.5-sonnet, gemini-1.5-pro)
   - **Temperature** (0.0 - 2.0): Lower for focused responses, higher for creative output
   - **Top-p** (0.0 - 1.0): Controls response diversity
   - **System Prompt**: Define the assistant's role and behavior (see [Prompts](/docs/assistant/prompts) for tips)

4. Optionally enable:
   - **Memory**: Let the assistant remember context across conversations
   - **Web Search**: Allow internet searches for up-to-date information
   - **TTS**: Enable text-to-speech for audio responses
   - **MCP Tools**: Connect external tools via Model Context Protocol

5. Tap **Save**

**Example System Prompt**:
```
You are a helpful coding assistant specializing in Python. 
Provide clear, well-commented code examples and explain your reasoning.
```

## 5) Start Your First Chat

Now you're ready to chat with your AI assistant!

1. From the main screen, tap **New Chat** or the **+** icon
2. Select one of:
   - **An Assistant**: Use a pre-configured assistant you created
   - **A Provider/Model**: Choose directly without an assistant
3. Type your message in the input box at the bottom
4. Tap **Send** or press Enter

**Pro Tips**:
- Attach images by tapping the **📎** icon (requires vision-capable models like GPT-4o or Gemini)
- Long-press messages to copy, edit, or regenerate responses
- Swipe to quickly switch between conversations

## 6) Optional Advanced Features

### Web Search Integration
1. Go to **Settings → Search Providers**
2. Add search APIs (Exa, Tavily, Brave, SearXNG, etc.)
3. Enable search in your assistant or per-chat
4. The AI will automatically search the web when needed for current information

### Text-to-Speech (TTS)
1. Enable TTS in your assistant settings or during a chat
2. Tap the speaker icon on any message to hear it read aloud
3. Configure voice and speed in Settings → TTS

### MCP (Model Context Protocol) Tools
1. Navigate to **Settings → MCP**
2. Add MCP server addresses
3. Configure authentication if required
4. Enable MCP in your assistant
5. The AI can now call external tools and APIs

See the [MCP documentation](/docs/assistant/mcp) for detailed setup instructions.

## Next Steps

- **Check the [FAQ](/docs/getting-started/faq)** for common questions
- **Read [Terminology](/docs/getting-started/terminology)** to understand key concepts
- **Explore [Assistant guides](/docs/assistant/basics)** for advanced configurations
- **Learn about specific [providers](/docs/providers/openai)** for optimization tips

If you encounter issues, please [open an issue](https://github.com/Chevey339/kelivo/issues) on GitHub.

