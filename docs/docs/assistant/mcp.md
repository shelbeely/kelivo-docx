---
title: MCP
date: 2025-09-02 01:16:27
---

# MCP (Model Context Protocol)

MCP is an open protocol that enables AI models to securely connect to external tools, data sources, and services in a standardized way.

## What is MCP?

**Model Context Protocol (MCP)** is an open standard developed by Anthropic that allows AI assistants to:
- **Use external tools**: File systems, databases, APIs, calculators
- **Access data sources**: Knowledge bases, documents, search engines
- **Execute functions**: Custom scripts, integrations, workflows
- **Interact with services**: Git, Slack, calendars, and more

Think of MCP as a universal plugin system for AI models.

### Key Benefits

- **Standardized**: Works across different AI providers
- **Secure**: Explicit permissions and user approval
- **Extensible**: Add new capabilities without modifying the app
- **Interoperable**: Share MCP servers across applications

## How MCP Works

### Architecture

```
┌─────────────┐
│   Kelivo    │
│  (MCP Host) │
└──────┬──────┘
       │
       │ MCP Protocol
       │
┌──────┴──────┐
│ MCP Server  │ (File System, Git, Database, etc.)
└─────────────┘
```

### Flow

1. **You enable MCP** in your assistant or globally
2. **You configure MCP servers** (addresses, authentication)
3. **AI proposes tool usage**: "I'll use the file_read tool..."
4. **You review and approve** (optional, configurable)
5. **Tool executes** and returns results
6. **AI processes results** and continues conversation

### Example Interaction

```
User: Create a new file called notes.txt with my meeting summary

AI: I'll create that file for you.
[Proposes using: file_write tool]

User: [Approves]

Tool: file_write executed successfully
AI: Done! I've created notes.txt with your meeting summary.
```

## Setting Up MCP

### Prerequisites

- **MCP server**: Running locally or remotely
- **Server URL/address**: Connection endpoint
- **Authentication** (if required): API keys, tokens, credentials
- **Permissions**: Network access from Kelivo

### Configuration Steps

1. **Enable MCP**
   - Go to **Settings → MCP** or **Settings → Advanced**
   - Toggle "Enable MCP" on
   - Save settings

2. **Add MCP Server**
   - Tap **Add Server** or **+**
   - Enter server details:
     - **Name**: Friendly identifier (e.g., "File System")
     - **Server URL**: Connection address
       - Local: `http://localhost:3000` or `stdio://path/to/server`
       - Remote: `https://mcp-server.example.com`
     - **Transport**: HTTP, WebSocket, or stdio
     - **Authentication**: API key, token, or credentials

3. **Test Connection**
   - Some implementations allow testing
   - Verify server is reachable
   - Check available tools list

4. **Enable in Assistant**
   - Open **Assistant Settings**
   - Find **Tools** or **MCP** section
   - Select which MCP servers this assistant can use
   - Save

### Configuration Example

**Server Name**: Local Files  
**Type**: stdio  
**Command**: `/usr/local/bin/mcp-server-filesystem`  
**Args**: `--path /home/user/documents`  
**Authentication**: None (local trust)

**Server Name**: GitHub Integration  
**Type**: HTTP  
**URL**: `https://mcp-github.myserver.com`  
**Authentication**: Bearer token  
**Token**: `ghp_xxxxxxxxxxxxx`

## Available MCP Servers

### Official Servers

**Filesystem** (read/write files):
```bash
npx @modelcontextprotocol/server-filesystem /path/to/allow
```

**PostgreSQL** (database queries):
```bash
npx @modelcontextprotocol/server-postgres postgres://localhost/dbname
```

**Git** (repository operations):
```bash
npx @modelcontextprotocol/server-git /path/to/repo
```

**Brave Search**:
```bash
npx @modelcontextprotocol/server-brave-search
```

**Slack**:
```bash
npx @modelcontextprotocol/server-slack
```

### Community Servers

Check the MCP ecosystem:
- GitHub topic: `mcp-server`
- Anthropic MCP server directory
- Community Discord/forums

### Building Your Own

MCP servers can be built in:
- **Python**: Using `mcp` package
- **TypeScript/JavaScript**: Using `@modelcontextprotocol/sdk`
- **Other languages**: Following MCP specification

See https://modelcontextprotocol.io for SDK and documentation.

## Use Cases

### File Management

**Server**: Filesystem MCP  
**Tools**: read_file, write_file, list_directory, search_files  
**Use Cases**:
- Read and summarize documents
- Create project files with AI-generated content
- Organize and search your files
- Batch rename or process files

**Example**:
```
User: Read the README.md file and create a CHANGELOG.md summarizing recent commits
AI: [Uses file_read to read README, git_log for commits, file_write to create CHANGELOG]
```

### Code Development

**Servers**: Git + Filesystem  
**Tools**: git_diff, git_commit, file_edit, search_code  
**Use Cases**:
- Review code changes
- Generate commit messages
- Refactor across multiple files
- Search codebase for patterns

**Example**:
```
User: Add error handling to all API calls in the src/ directory
AI: [Searches for API calls, proposes changes, edits files]
```

### Database Operations

**Server**: PostgreSQL/MySQL MCP  
**Tools**: query, insert, update, schema_info  
**Use Cases**:
- Data analysis and reporting
- Database migrations
- Query optimization
- Data cleanup tasks

**Example**:
```
User: Show me users who signed up last week and haven't logged in
AI: [Executes SQL query, formats results]
```

### Research & Information

**Servers**: Brave Search + Filesystem  
**Tools**: web_search, read_file, write_file  
**Use Cases**:
- Gather current information
- Save research notes
- Cross-reference sources
- Build knowledge bases

**Example**:
```
User: Research recent developments in quantum computing and save to research.md
AI: [Searches web, synthesizes findings, writes to file]
```

### Workflow Automation

**Servers**: Multiple (Slack + Git + Calendar)  
**Tools**: send_message, create_pr, schedule_event  
**Use Cases**:
- Automated status updates
- PR creation from specs
- Meeting scheduling
- Cross-platform workflows

**Example**:
```
User: Create a PR for the bug fix and notify the team in Slack
AI: [Creates PR, sends Slack message with link]
```

## Security & Permissions

### Permission Model

**Tool Approval**:
- **Auto-approve**: Tools execute immediately (convenient but risky)
- **Manual review**: You approve each tool call (secure)
- **Allowlist**: Pre-approve specific tools (balanced)

**Recommended**: Manual review or allowlist for sensitive operations.

### Scope Limitation

Limit MCP server capabilities:
- **Filesystem**: Restrict to specific directories
  ```bash
  --path /home/user/safe-folder
  ```
- **Database**: Read-only user, specific tables
- **API**: Scoped tokens with minimal permissions

### Best Practices

1. **Trust MCP servers**: Only connect to servers you control or trust
2. **Review tool calls**: Especially for write operations
3. **Limit scope**: Don't give filesystem server access to entire system
4. **Use read-only when possible**: Minimize write permissions
5. **Audit logs**: Review what tools are being used
6. **Revoke access**: Disable MCP servers you're not using

### What Could Go Wrong?

**Without proper security**:
- ❌ AI could delete important files
- ❌ Sensitive data could be read and exposed
- ❌ Unintended API calls (costs, data changes)
- ❌ Malicious MCP servers could exploit permissions

**With proper setup**:
- ✅ Explicit approval for risky operations
- ✅ Scoped access to safe directories/resources
- ✅ Trusted, audited MCP server code
- ✅ Logs of all tool usage

## Troubleshooting

### MCP Server Won't Connect

**Symptoms**: "Cannot connect to MCP server", timeout errors

**Solutions**:
- **Verify server running**: Check process is active
  ```bash
  ps aux | grep mcp-server
  ```
- **Check address**: Ensure correct URL/command
- **Firewall**: Allow connections if needed
- **Logs**: Check server logs for errors
- **Test manually**: Try connecting with curl/browser

### Tool Calls Failing

**Symptoms**: "Tool execution failed", error messages

**Solutions**:
- **Permissions**: Verify server has necessary permissions
- **Arguments**: Check tool call arguments are correct
- **Server logs**: Review for specific errors
- **Model support**: Ensure model supports function calling

### Tools Not Appearing

**Symptoms**: AI doesn't use or mention available tools

**Solutions**:
- **Enable in assistant**: Verify MCP enabled for this assistant
- **Model support**: Not all models support tool calling well
- **Clear prompt**: Explicitly mention what you want done
- **Server connection**: Ensure server is connected

**Example**:
```
❌ "What's in my documents folder?"
✅ "Use the file system tool to list my documents folder"
```

### Performance Issues

**Symptoms**: Slow responses when using tools

**Solutions**:
- **Reduce tool calls**: Optimize server-side processing
- **Local servers**: Use localhost for faster communication
- **Async operations**: If server supports async/streaming
- **Caching**: Implement server-side caching

## Advanced Configuration

### Environment Variables

MCP servers often use env vars for config:

```bash
export DATABASE_URL="postgres://localhost/mydb"
export API_KEY="secret-key"
npx @modelcontextprotocol/server-postgres
```

### Custom Server Arguments

```bash
npx mcp-server-custom \
  --config /path/to/config.json \
  --verbose \
  --timeout 30
```

### Multiple Servers

You can add multiple MCP servers:
- Filesystem server for documents
- Git server for code
- Database server for data
- API server for integrations

Each provides different tools to the AI.

### Conditional Enabling

Enable MCP per-assistant:
- **Code Assistant**: Filesystem + Git MCP
- **Data Analyst**: Database MCP
- **Writer**: Filesystem only (read/write notes)
- **General Chat**: No MCP (security)

## Comparison: MCP vs. Other Approaches

### MCP vs. Web Search

| Feature | MCP | Web Search |
|---------|-----|------------|
| **Scope** | Any local/remote resource | Public web only |
| **Control** | Full control over tools | Limited to search |
| **Privacy** | Can be fully local | Data sent to search provider |
| **Flexibility** | Extensible | Fixed functionality |

### MCP vs. Code Interpreter

| Feature | MCP | Code Interpreter |
|---------|-----|-----------------|
| **Execution** | External servers | Sandboxed environment |
| **Capabilities** | Unlimited (server-dependent) | Code execution only |
| **Security** | You control | Provider sandbox |
| **Persistence** | Server-dependent | Usually ephemeral |

### MCP vs. API Calls in Prompts

| Feature | MCP | API in Prompts |
|---------|-----|----------------|
| **Structure** | Standardized protocol | Ad-hoc instructions |
| **Reliability** | Direct tool execution | AI must format correctly |
| **Visibility** | Explicit tool calls | Embedded in responses |
| **Type Safety** | Typed parameters | String-based |

## Future of MCP in Kelivo

Potential enhancements:
- **MCP server marketplace**: Discover and install servers easily
- **Visual configuration**: GUI for server setup
- **Server templates**: Pre-configured popular servers
- **Tool logs**: Detailed history of tool usage
- **Permission management**: Fine-grained access control

## Resources

### Official Documentation
- MCP Specification: https://spec.modelcontextprotocol.io
- MCP SDK: https://github.com/modelcontextprotocol
- Server Examples: https://github.com/modelcontextprotocol/servers

### Community
- MCP Discord: Community discussions
- GitHub Topic: `mcp-server` for community servers
- Tutorial videos: Various platforms

### Building Servers
- Python SDK: `pip install mcp`
- TypeScript SDK: `npm install @modelcontextprotocol/sdk`
- Server templates: Available in official repos

## Getting Started Checklist

- [ ] Understand what MCP enables
- [ ] Install an MCP server (start with filesystem)
- [ ] Enable MCP in Kelivo settings
- [ ] Configure the MCP server connection
- [ ] Enable MCP in an assistant
- [ ] Test with a simple tool usage request
- [ ] Review security and permissions
- [ ] Explore additional servers for your use cases

## Next Steps

- Learn about [Assistant configuration](/docs/assistant/basics)
- Review [Custom Requests](/docs/assistant/custom-requests) for advanced networking
- Check [Security best practices](/docs/getting-started/faq#security)
- Explore official [MCP servers](https://github.com/modelcontextprotocol/servers)

Need help? [Ask in GitHub Discussions](https://github.com/Chevey339/kelivo/discussions) or [report issues](https://github.com/Chevey339/kelivo/issues).