---
title: Data Import & Export
date: 2025-11-25 22:00:00
---

# Data Import & Export

Kelivo provides comprehensive backup and restore functionality to help you manage your data across devices, create backups, and migrate your settings and conversations.

## Overview

Kelivo's import/export feature supports:
- **Settings**: All app configurations, provider settings, and assistant configurations
- **Chat History**: Conversations and messages with full context
- **Files**: Uploaded files, avatars, and images used in conversations

## Backup Methods

### Local File Backup

The simplest way to backup your data is using local file export:

1. **Open Settings** → Navigate to **Backup & Restore**
2. **Tap "Export to File"**
3. **Choose backup options**:
   - ✅ Include Settings (always included)
   - ✅ Include Chats (optional)
   - ✅ Include Files (optional - avatars, uploaded files, images)
4. **Save the file** to your device or cloud storage

The exported file is a `.zip` archive that can be easily stored or transferred.

### WebDAV Backup (Cloud Sync)

For automatic cloud backups, Kelivo supports WebDAV servers:

1. **Open Settings** → **Backup & Restore** → **WebDAV Configuration**
2. **Configure your WebDAV server**:
   - **Server URL**: Your WebDAV endpoint (e.g., `https://webdav.example.com`)
   - **Path**: Remote folder for backups (e.g., `/kelivo_backup`)
   - **Username**: Your WebDAV username
   - **Password**: Your WebDAV password
3. **Test Connection** to verify settings
4. **Tap "Backup to WebDAV"** to upload

**Popular WebDAV Services**:
- Nextcloud
- ownCloud
- Synology NAS
- Box (WebDAV support varies by plan)

## Backup File Structure

Understanding the backup file structure helps with manual inspection or troubleshooting:

```
kelivo_backup_YYYY-MM-DDTHH-MM-SS.zip
├── settings.json          # App settings and configurations
├── chats.json            # Conversations and messages (if included)
├── upload/               # Uploaded files (if included)
│   └── [files...]
├── avatars/              # Assistant avatars (if included)
│   └── [images...]
└── images/               # Generated or cached images (if included)
    └── [images...]
```

### settings.json

Contains all app configurations:

```json
{
  "assistants_v1": "[JSON array of assistant configurations]",
  "provider_configs_v1": "{JSON object with provider settings}",
  "pinned_models_v1": "[JSON array of pinned model IDs]",
  "providers_order_v1": "[JSON array of provider display order]",
  "search_services_v1": "{JSON object with search service configs}",
  "assistant_tags_v1": "[JSON array of tag definitions]",
  "assistant_tag_map_v1": "{assistant_id -> tag_id mapping}",
  "...": "other app settings"
}
```

### chats.json

Contains all conversation data:

```json
{
  "version": 1,
  "conversations": [
    {
      "id": "conversation_uuid",
      "title": "Conversation Title",
      "assistantId": "assistant_uuid",
      "createdAt": "ISO8601 timestamp",
      "updatedAt": "ISO8601 timestamp"
    }
  ],
  "messages": [
    {
      "id": "message_uuid",
      "conversationId": "conversation_uuid",
      "role": "user|assistant|system",
      "content": "Message content",
      "createdAt": "ISO8601 timestamp"
    }
  ],
  "toolEvents": {
    "message_id": [{"tool event data"}]
  },
  "geminiThoughtSigs": {
    "message_id": "signature"
  }
}
```

## Restoring Data

### Restore Modes

Kelivo offers two restore modes to handle different scenarios:

#### Overwrite Mode

Completely replaces existing data with backup contents:

- **Use when**: Setting up a new device, starting fresh, or restoring to a known state
- **Effect**: All existing settings, chats, and files are replaced
- **Warning**: Cannot be undone - existing data will be lost

#### Merge Mode

Intelligently combines backup data with existing data:

- **Use when**: Syncing between devices, adding new assistants, or importing partial data
- **Effect**: 
  - New items are added
  - Existing items are preserved (with smart conflict resolution)
  - Avatars and backgrounds keep local versions if already set
- **Benefit**: Non-destructive operation

### Restoring from Local File

1. **Open Settings** → **Backup & Restore**
2. **Tap "Import from File"**
3. **Select the backup .zip file**
4. **Choose restore mode**: Overwrite or Merge
5. **Wait for restoration** to complete
6. **Restart the app** to apply all changes

### Restoring from WebDAV

1. **Open Settings** → **Backup & Restore** → **WebDAV Configuration**
2. **Ensure WebDAV is configured** with correct credentials
3. **View available backups** in the backup list
4. **Select a backup** to restore
5. **Choose restore mode**: Overwrite or Merge
6. **Wait for download and restoration**
7. **Restart the app**

## What Gets Backed Up

### Always Included

| Item | Description |
|------|-------------|
| Provider Settings | API keys, base URLs, model configurations |
| Assistant Configurations | Names, avatars, system prompts, model settings |
| App Preferences | Theme, language, display settings |
| Pinned Models | Your favorite models list |
| Search Service Configs | Web search API configurations |
| Assistant Tags | Organization tags and mappings |

### Optional (Chats)

| Item | Description |
|------|-------------|
| Conversations | All chat sessions with metadata |
| Messages | Full message history with timestamps |
| Tool Events | MCP tool call history |
| Thought Signatures | Gemini model thinking process data |

### Optional (Files)

| Item | Description |
|------|-------------|
| Uploaded Files | Documents, PDFs, images sent to AI |
| Assistant Avatars | Custom avatar images |
| Generated Images | Images created during conversations |

## Best Practices

### Regular Backups

- **Weekly**: For active users with many conversations
- **Monthly**: For casual users
- **Before updates**: Always backup before major app updates
- **Before device changes**: Backup when switching phones or tablets

### Backup Storage

- **Multiple locations**: Keep backups in at least 2 places
- **Cloud storage**: Use WebDAV or manual upload to cloud services
- **Local copy**: Keep one copy on your device or computer

### Security Considerations

- **API keys are stored in backups**: Keep backup files secure
- **Don't share backup files**: They contain your API credentials
- **Encrypt sensitive backups**: Use encrypted storage when possible
- **Delete old backups**: Remove outdated backups after verification

## Troubleshooting

### Backup Failed

1. **Check storage space**: Ensure enough free space on device
2. **Verify permissions**: Allow Kelivo to access storage
3. **Try smaller backup**: Exclude files if backup is too large
4. **Check WebDAV connection**: Test connection in settings

### Restore Failed

1. **Verify file integrity**: Ensure .zip file is not corrupted
2. **Check file format**: Must be a valid Kelivo backup
3. **Try overwrite mode**: Merge mode may fail on conflicting data
4. **Restart app**: Force close and reopen after restore

### Data Missing After Restore

1. **Check restore mode**: Use "Overwrite" to ensure full restore
2. **Restart app**: Some changes require app restart
3. **Verify backup contents**: Open .zip to check if data exists
4. **Re-import**: Try restoring again

### WebDAV Issues

1. **Connection errors**: Verify URL, username, and password
2. **Path issues**: Ensure the remote folder exists
3. **Permission denied**: Check WebDAV folder permissions
4. **Timeout**: Large backups may need longer timeouts

## Migration Scenarios

### Moving to a New Device

1. Create a full backup (include all options) on old device
2. Transfer backup file to new device
3. Install Kelivo on new device
4. Use "Import from File" with Overwrite mode
5. Re-enter any missing API keys if needed

### Syncing Between Devices

1. Create backup on primary device
2. Use "Import from File" with Merge mode on secondary device
3. New assistants and chats will be added
4. Existing items remain unchanged

### Sharing Configurations

To share assistant configurations without chat history:

1. Create backup with only Settings enabled
2. Share the settings.json file (or full backup)
3. Recipient uses Merge mode to add configurations
4. Their existing chats and settings remain intact

## Converting ChatGPT Export to Kelivo Format

If you're migrating from ChatGPT, you can convert your exported `conversations.json` to Kelivo's format using a conversion script.

### ChatGPT Export Format

ChatGPT's export format looks like this:

```json
[
  {
    "title": "Conversation Title",
    "create_time": 1699000000.123,
    "update_time": 1699000100.456,
    "mapping": {
      "message-id-1": {
        "id": "message-id-1",
        "message": {
          "author": {"role": "user"},
          "content": {"parts": ["Hello!"]}
        },
        "parent": null,
        "children": ["message-id-2"]
      },
      "message-id-2": {
        "id": "message-id-2",
        "message": {
          "author": {"role": "assistant"},
          "content": {"parts": ["Hi there!"]}
        },
        "parent": "message-id-1",
        "children": []
      }
    }
  }
]
```

### Conversion Script (Python)

Save the following script as `convert_chatgpt_to_kelivo.py`:

```python
import json
import uuid
from datetime import datetime
import sys

def convert_chatgpt_to_kelivo(input_file, output_file):
    """Convert ChatGPT conversations.json to Kelivo chats.json format"""
    
    with open(input_file, 'r', encoding='utf-8') as f:
        chatgpt_data = json.load(f)
    
    kelivo_conversations = []
    kelivo_messages = []
    
    for conv in chatgpt_data:
        # Generate conversation ID
        conv_id = str(uuid.uuid4())
        
        # Convert timestamps (ChatGPT uses Unix timestamps)
        created_at = datetime.fromtimestamp(conv.get('create_time', 0)).isoformat() + 'Z'
        updated_at = datetime.fromtimestamp(conv.get('update_time', conv.get('create_time', 0))).isoformat() + 'Z'
        
        # Create conversation entry
        kelivo_conversations.append({
            "id": conv_id,
            "title": conv.get('title', 'Imported Conversation'),
            "assistantId": None,  # Will use default assistant
            "createdAt": created_at,
            "updatedAt": updated_at
        })
        
        # Extract messages from mapping (traverse tree structure)
        mapping = conv.get('mapping', {})
        messages = extract_messages_from_mapping(mapping, conv_id)
        kelivo_messages.extend(messages)
    
    # Create Kelivo chats.json structure
    kelivo_data = {
        "version": 1,
        "conversations": kelivo_conversations,
        "messages": kelivo_messages,
        "toolEvents": {},
        "geminiThoughtSigs": {}
    }
    
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(kelivo_data, f, ensure_ascii=False, indent=2)
    
    print(f"Converted {len(kelivo_conversations)} conversations with {len(kelivo_messages)} messages")

def extract_messages_from_mapping(mapping, conv_id):
    """Extract messages from ChatGPT's tree structure in order"""
    messages = []
    
    # Find root message (no parent or parent not in mapping)
    root_id = None
    for msg_id, msg_data in mapping.items():
        parent = msg_data.get('parent')
        if parent is None or parent not in mapping:
            root_id = msg_id
            break
    
    if not root_id:
        return messages
    
    # Traverse tree to get messages in order
    def traverse(msg_id):
        if msg_id not in mapping:
            return
        
        msg_data = mapping[msg_id]
        msg = msg_data.get('message')
        
        if msg and msg.get('content') and msg['content'].get('parts'):
            author = msg.get('author', {}).get('role', 'user')
            content_parts = msg['content']['parts']
            content = ''.join(str(p) for p in content_parts if isinstance(p, str))
            
            # Only include user and assistant messages
            if author in ['user', 'assistant'] and content.strip():
                created_at = datetime.fromtimestamp(
                    msg.get('create_time', 0) or 0
                ).isoformat() + 'Z' if msg.get('create_time') else datetime.now().isoformat() + 'Z'
                
                messages.append({
                    "id": str(uuid.uuid4()),
                    "conversationId": conv_id,
                    "role": author,
                    "content": content,
                    "createdAt": created_at
                })
        
        # Continue to children
        for child_id in msg_data.get('children', []):
            traverse(child_id)
    
    traverse(root_id)
    return messages

if __name__ == '__main__':
    if len(sys.argv) != 3:
        print("Usage: python convert_chatgpt_to_kelivo.py <input_conversations.json> <output_chats.json>")
        sys.exit(1)
    
    convert_chatgpt_to_kelivo(sys.argv[1], sys.argv[2])
```

### Using the Conversion Script

1. **Export your ChatGPT data**:
   - Go to ChatGPT Settings → Data controls → Export data
   - Download and extract the ZIP file
   - Find `conversations.json`

2. **Run the conversion**:
   ```bash
   python convert_chatgpt_to_kelivo.py conversations.json chats.json
   ```

3. **Create a Kelivo backup structure**:
   ```bash
   mkdir kelivo_import
   mv chats.json kelivo_import/
   echo '{}' > kelivo_import/settings.json
   cd kelivo_import && zip -r ../chatgpt_import.zip . && cd ..
   ```

4. **Import into Kelivo**:
   - Open Kelivo → Settings → Backup & Restore
   - Tap "Import from File"
   - Select `chatgpt_import.zip`
   - Choose **Merge** mode to add to existing conversations

### Conversion Notes

| ChatGPT | Kelivo | Notes |
|---------|--------|-------|
| `title` | `title` | Direct mapping |
| `create_time` | `createdAt` | Unix timestamp → ISO8601 |
| `mapping` | `messages` | Tree → flat array |
| `author.role` | `role` | `user` or `assistant` |
| `content.parts` | `content` | Array joined to string |

::: warning Limitations
- **System messages** are skipped (ChatGPT's hidden prompts)
- **Images and files** are not converted (only text)
- **Branched conversations** use the main thread only
- **Tool calls** (plugins, code interpreter) are simplified to text
:::

### Alternative: Node.js Script

If you prefer JavaScript/Node.js:

```javascript
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

function convertChatGPTToKelivo(inputFile, outputFile) {
  const chatgptData = JSON.parse(fs.readFileSync(inputFile, 'utf8'));
  
  const conversations = [];
  const messages = [];
  
  chatgptData.forEach(conv => {
    const convId = uuidv4();
    const createdAt = new Date((conv.create_time || 0) * 1000).toISOString();
    const updatedAt = new Date((conv.update_time || conv.create_time || 0) * 1000).toISOString();
    
    conversations.push({
      id: convId,
      title: conv.title || 'Imported Conversation',
      assistantId: null,
      createdAt,
      updatedAt
    });
    
    // Extract messages from mapping
    const mapping = conv.mapping || {};
    const extracted = extractMessages(mapping, convId);
    messages.push(...extracted);
  });
  
  const kelivoData = {
    version: 1,
    conversations,
    messages,
    toolEvents: {},
    geminiThoughtSigs: {}
  };
  
  fs.writeFileSync(outputFile, JSON.stringify(kelivoData, null, 2));
  console.log(`Converted ${conversations.length} conversations with ${messages.length} messages`);
}

function extractMessages(mapping, convId) {
  const messages = [];
  
  // Find root and traverse
  let rootId = Object.keys(mapping).find(id => {
    const parent = mapping[id].parent;
    return !parent || !mapping[parent];
  });
  
  function traverse(msgId) {
    if (!mapping[msgId]) return;
    
    const { message, children = [] } = mapping[msgId];
    
    if (message?.content?.parts && ['user', 'assistant'].includes(message.author?.role)) {
      const content = message.content.parts.filter(p => typeof p === 'string').join('');
      if (content.trim()) {
        messages.push({
          id: uuidv4(),
          conversationId: convId,
          role: message.author.role,
          content,
          createdAt: message.create_time 
            ? new Date(message.create_time * 1000).toISOString()
            : new Date().toISOString()
        });
      }
    }
    
    children.forEach(traverse);
  }
  
  if (rootId) traverse(rootId);
  return messages;
}

// Usage: node convert.js conversations.json chats.json
const [,, input, output] = process.argv;
if (input && output) {
  convertChatGPTToKelivo(input, output);
} else {
  console.log('Usage: node convert.js <input.json> <output.json>');
}
```

Run with:
```bash
npm install uuid
node convert.js conversations.json chats.json
```

## Next Steps

- Learn about [Assistants](/docs/assistant/basics) to create powerful AI personas
- Configure [AI Providers](/docs/providers/openai) for your backup
- Explore [Best Practices](/docs/best-practices) for optimal workflows
