---
title: 数据导入与导出
date: 2025-11-25 22:00:00
---

# 数据导入与导出

Kelivo 提供完整的备份与恢复功能，帮助您在不同设备间管理数据、创建备份以及迁移设置和对话记录。

## 概述

Kelivo 的导入/导出功能支持：
- **设置**：所有应用配置、服务供应商设置和助手配置
- **聊天记录**：对话和消息的完整上下文
- **文件**：上传的文件、头像和对话中使用的图片

## 备份方式

### 本地文件备份

备份数据最简单的方式是使用本地文件导出：

1. **打开设置** → 进入 **备份与恢复**
2. **点击"导出到文件"**
3. **选择备份选项**：
   - ✅ 包含设置（始终包含）
   - ✅ 包含聊天记录（可选）
   - ✅ 包含文件（可选 - 头像、上传的文件、图片）
4. **保存文件** 到您的设备或云存储

导出的文件是一个 `.zip` 压缩包，便于存储或传输。

### WebDAV 备份（云同步）

如需自动云备份，Kelivo 支持 WebDAV 服务器：

1. **打开设置** → **备份与恢复** → **WebDAV 配置**
2. **配置您的 WebDAV 服务器**：
   - **服务器地址**：您的 WebDAV 端点（如 `https://webdav.example.com`）
   - **路径**：备份远程文件夹（如 `/kelivo_backup`）
   - **用户名**：您的 WebDAV 用户名
   - **密码**：您的 WebDAV 密码
3. **测试连接** 验证设置
4. **点击"备份到 WebDAV"** 上传

**常用 WebDAV 服务**：
- Nextcloud
- ownCloud
- 群晖 NAS
- 坚果云（WebDAV 支持需付费订阅）
- Box（WebDAV 支持因套餐而异）

## 备份文件结构

了解备份文件结构有助于手动检查或排除故障：

```
kelivo_backup_YYYY-MM-DDTHH-MM-SS.zip
├── settings.json          # 应用设置和配置
├── chats.json            # 对话和消息（如已包含）
├── upload/               # 上传的文件（如已包含）
│   └── [文件...]
├── avatars/              # 助手头像（如已包含）
│   └── [图片...]
└── images/               # 生成或缓存的图片（如已包含）
    └── [图片...]
```

### settings.json

包含所有应用配置：

```json
{
  "assistants_v1": "[助手配置的 JSON 数组]",
  "provider_configs_v1": "{供应商设置的 JSON 对象}",
  "pinned_models_v1": "[置顶模型 ID 的 JSON 数组]",
  "providers_order_v1": "[供应商显示顺序的 JSON 数组]",
  "search_services_v1": "{搜索服务配置的 JSON 对象}",
  "assistant_tags_v1": "[标签定义的 JSON 数组]",
  "assistant_tag_map_v1": "{assistant_id -> tag_id 映射}",
  "...": "其他应用设置"
}
```

### chats.json

包含所有对话数据：

```json
{
  "version": 1,
  "conversations": [
    {
      "id": "conversation_uuid",
      "title": "对话标题",
      "assistantId": "assistant_uuid",
      "createdAt": "ISO8601 时间戳",
      "updatedAt": "ISO8601 时间戳"
    }
  ],
  "messages": [
    {
      "id": "message_uuid",
      "conversationId": "conversation_uuid",
      "role": "user|assistant|system",
      "content": "消息内容",
      "createdAt": "ISO8601 时间戳"
    }
  ],
  "toolEvents": {
    "message_id": [{"工具事件数据"}]
  },
  "geminiThoughtSigs": {
    "message_id": "签名"
  }
}
```

## 恢复数据

### 恢复模式

Kelivo 提供两种恢复模式来处理不同场景：

#### 覆盖模式

用备份内容完全替换现有数据：

- **适用场景**：设置新设备、重新开始、或恢复到已知状态
- **效果**：所有现有设置、聊天记录和文件都会被替换
- **警告**：无法撤销 - 现有数据将丢失

#### 合并模式

智能合并备份数据和现有数据：

- **适用场景**：在设备间同步、添加新助手、或导入部分数据
- **效果**：
  - 新项目会被添加
  - 现有项目会被保留（使用智能冲突解决）
  - 如果已设置头像和背景，则保留本地版本
- **优点**：非破坏性操作

### 从本地文件恢复

1. **打开设置** → **备份与恢复**
2. **点击"从文件导入"**
3. **选择备份 .zip 文件**
4. **选择恢复模式**：覆盖或合并
5. **等待恢复** 完成
6. **重启应用** 以应用所有更改

### 从 WebDAV 恢复

1. **打开设置** → **备份与恢复** → **WebDAV 配置**
2. **确保 WebDAV 已配置** 正确的凭据
3. **查看可用备份** 在备份列表中
4. **选择一个备份** 进行恢复
5. **选择恢复模式**：覆盖或合并
6. **等待下载和恢复**
7. **重启应用**

## 备份内容

### 始终包含

| 项目 | 说明 |
|------|------|
| 供应商设置 | API Key、基础地址、模型配置 |
| 助手配置 | 名称、头像、系统提示词、模型设置 |
| 应用偏好 | 主题、语言、显示设置 |
| 置顶模型 | 您的收藏模型列表 |
| 搜索服务配置 | 网络搜索 API 配置 |
| 助手标签 | 组织标签和映射 |

### 可选（聊天记录）

| 项目 | 说明 |
|------|------|
| 对话 | 所有聊天会话及元数据 |
| 消息 | 带时间戳的完整消息历史 |
| 工具事件 | MCP 工具调用历史 |
| 思考签名 | Gemini 模型思考过程数据 |

### 可选（文件）

| 项目 | 说明 |
|------|------|
| 上传的文件 | 发送给 AI 的文档、PDF、图片 |
| 助手头像 | 自定义头像图片 |
| 生成的图片 | 对话中创建的图片 |

## 最佳实践

### 定期备份

- **每周**：适用于活跃用户，有大量对话
- **每月**：适用于普通用户
- **更新前**：在重大应用更新前始终备份
- **更换设备前**：更换手机或平板时备份

### 备份存储

- **多个位置**：至少在 2 个地方保存备份
- **云存储**：使用 WebDAV 或手动上传到云服务
- **本地副本**：在设备或电脑上保存一份

### 安全注意事项

- **API Key 存储在备份中**：确保备份文件安全
- **不要分享备份文件**：它们包含您的 API 凭据
- **加密敏感备份**：尽可能使用加密存储
- **删除旧备份**：验证后删除过期备份

## 故障排除

### 备份失败

1. **检查存储空间**：确保设备有足够空间
2. **验证权限**：允许 Kelivo 访问存储
3. **尝试较小的备份**：如果备份太大，排除文件
4. **检查 WebDAV 连接**：在设置中测试连接

### 恢复失败

1. **验证文件完整性**：确保 .zip 文件未损坏
2. **检查文件格式**：必须是有效的 Kelivo 备份
3. **尝试覆盖模式**：合并模式可能在冲突数据时失败
4. **重启应用**：恢复后强制关闭并重新打开

### 恢复后数据丢失

1. **检查恢复模式**：使用"覆盖"确保完整恢复
2. **重启应用**：某些更改需要重启应用
3. **验证备份内容**：打开 .zip 检查数据是否存在
4. **重新导入**：再次尝试恢复

### WebDAV 问题

1. **连接错误**：验证 URL、用户名和密码
2. **路径问题**：确保远程文件夹存在
3. **权限被拒绝**：检查 WebDAV 文件夹权限
4. **超时**：大型备份可能需要更长的超时时间

## 迁移场景

### 迁移到新设备

1. 在旧设备上创建完整备份（包含所有选项）
2. 将备份文件传输到新设备
3. 在新设备上安装 Kelivo
4. 使用"从文件导入"并选择覆盖模式
5. 如需要，重新输入任何缺失的 API Key

### 设备间同步

1. 在主设备上创建备份
2. 在次设备上使用"从文件导入"并选择合并模式
3. 新助手和聊天记录将被添加
4. 现有项目保持不变

### 分享配置

分享助手配置而不包含聊天记录：

1. 创建仅启用设置的备份
2. 分享 settings.json 文件（或完整备份）
3. 接收者使用合并模式添加配置
4. 他们的现有聊天记录和设置保持不变

## 将 ChatGPT 导出转换为 Kelivo 格式

如果您正在从 ChatGPT 迁移，可以使用转换脚本将导出的 `conversations.json` 转换为 Kelivo 格式。

### ChatGPT 导出格式

ChatGPT 的导出格式如下：

```json
[
  {
    "title": "对话标题",
    "create_time": 1699000000.123,
    "update_time": 1699000100.456,
    "mapping": {
      "message-id-1": {
        "id": "message-id-1",
        "message": {
          "author": {"role": "user"},
          "content": {"parts": ["你好！"]}
        },
        "parent": null,
        "children": ["message-id-2"]
      },
      "message-id-2": {
        "id": "message-id-2",
        "message": {
          "author": {"role": "assistant"},
          "content": {"parts": ["你好！有什么可以帮助您的？"]}
        },
        "parent": "message-id-1",
        "children": []
      }
    }
  }
]
```

### 转换脚本（Python）

将以下脚本保存为 `convert_chatgpt_to_kelivo.py`：

```python
import json
import uuid
from datetime import datetime
import sys

def convert_chatgpt_to_kelivo(input_file, output_file):
    """将 ChatGPT conversations.json 转换为 Kelivo chats.json 格式"""
    
    with open(input_file, 'r', encoding='utf-8') as f:
        chatgpt_data = json.load(f)
    
    kelivo_conversations = []
    kelivo_messages = []
    
    for conv in chatgpt_data:
        # 生成对话 ID
        conv_id = str(uuid.uuid4())
        
        # 转换时间戳（ChatGPT 使用 Unix 时间戳）
        created_at = datetime.fromtimestamp(conv.get('create_time', 0)).isoformat() + 'Z'
        updated_at = datetime.fromtimestamp(conv.get('update_time', conv.get('create_time', 0))).isoformat() + 'Z'
        
        # 创建对话条目
        kelivo_conversations.append({
            "id": conv_id,
            "title": conv.get('title', '导入的对话'),
            "assistantId": None,  # 将使用默认助手
            "createdAt": created_at,
            "updatedAt": updated_at
        })
        
        # 从 mapping 提取消息（遍历树结构）
        mapping = conv.get('mapping', {})
        messages = extract_messages_from_mapping(mapping, conv_id)
        kelivo_messages.extend(messages)
    
    # 创建 Kelivo chats.json 结构
    kelivo_data = {
        "version": 1,
        "conversations": kelivo_conversations,
        "messages": kelivo_messages,
        "toolEvents": {},
        "geminiThoughtSigs": {}
    }
    
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(kelivo_data, f, ensure_ascii=False, indent=2)
    
    print(f"已转换 {len(kelivo_conversations)} 个对话，共 {len(kelivo_messages)} 条消息")

def extract_messages_from_mapping(mapping, conv_id):
    """按顺序从 ChatGPT 的树结构中提取消息"""
    messages = []
    
    # 找到根消息（无父级或父级不在 mapping 中）
    root_id = None
    for msg_id, msg_data in mapping.items():
        parent = msg_data.get('parent')
        if parent is None or parent not in mapping:
            root_id = msg_id
            break
    
    if not root_id:
        return messages
    
    # 遍历树以按顺序获取消息
    def traverse(msg_id):
        if msg_id not in mapping:
            return
        
        msg_data = mapping[msg_id]
        msg = msg_data.get('message')
        
        if msg and msg.get('content') and msg['content'].get('parts'):
            author = msg.get('author', {}).get('role', 'user')
            content_parts = msg['content']['parts']
            content = ''.join(str(p) for p in content_parts if isinstance(p, str))
            
            # 只包含用户和助手消息
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
        
        # 继续处理子节点
        for child_id in msg_data.get('children', []):
            traverse(child_id)
    
    traverse(root_id)
    return messages

if __name__ == '__main__':
    if len(sys.argv) != 3:
        print("用法: python convert_chatgpt_to_kelivo.py <输入_conversations.json> <输出_chats.json>")
        sys.exit(1)
    
    convert_chatgpt_to_kelivo(sys.argv[1], sys.argv[2])
```

### 使用转换脚本

1. **导出您的 ChatGPT 数据**：
   - 进入 ChatGPT 设置 → 数据控制 → 导出数据
   - 下载并解压 ZIP 文件
   - 找到 `conversations.json`

2. **运行转换**：
   ```bash
   python convert_chatgpt_to_kelivo.py conversations.json chats.json
   ```

3. **创建 Kelivo 备份结构**：
   ```bash
   mkdir kelivo_import
   mv chats.json kelivo_import/
   echo '{}' > kelivo_import/settings.json
   cd kelivo_import && zip -r ../chatgpt_import.zip . && cd ..
   ```

4. **导入到 Kelivo**：
   - 打开 Kelivo → 设置 → 备份与恢复
   - 点击"从文件导入"
   - 选择 `chatgpt_import.zip`
   - 选择 **合并** 模式以添加到现有对话

### 转换说明

| ChatGPT | Kelivo | 说明 |
|---------|--------|------|
| `title` | `title` | 直接映射 |
| `create_time` | `createdAt` | Unix 时间戳 → ISO8601 |
| `mapping` | `messages` | 树结构 → 平面数组 |
| `author.role` | `role` | `user` 或 `assistant` |
| `content.parts` | `content` | 数组合并为字符串 |

::: warning 限制
- **系统消息** 会被跳过（ChatGPT 的隐藏提示）
- **图片和文件** 不会转换（仅文本）
- **分支对话** 仅使用主线程
- **工具调用**（插件、代码解释器）会简化为文本
:::

### 替代方案：Node.js 脚本

如果您更喜欢 JavaScript/Node.js：

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
      title: conv.title || '导入的对话',
      assistantId: null,
      createdAt,
      updatedAt
    });
    
    // 从 mapping 提取消息
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
  console.log(`已转换 ${conversations.length} 个对话，共 ${messages.length} 条消息`);
}

function extractMessages(mapping, convId) {
  const messages = [];
  
  // 找到根节点并遍历
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

// 用法: node convert.js conversations.json chats.json
const [,, input, output] = process.argv;
if (input && output) {
  convertChatGPTToKelivo(input, output);
} else {
  console.log('用法: node convert.js <输入.json> <输出.json>');
}
```

运行命令：
```bash
npm install uuid
node convert.js conversations.json chats.json
```

## 下一步

- 了解 [助手](/zh/docs/assistant/basics) 创建强大的 AI 角色
- 配置 [AI 供应商](/zh/docs/providers/openai) 用于备份
- 探索 [最佳实践](/zh/docs/best-practices) 以优化工作流程
