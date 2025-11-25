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

## Next Steps

- Learn about [Assistants](/docs/assistant/basics) to create powerful AI personas
- Configure [AI Providers](/docs/providers/openai) for your backup
- Explore [Best Practices](/docs/best-practices) for optimal workflows
