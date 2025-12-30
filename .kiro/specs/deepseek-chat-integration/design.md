# Design Document

## Overview

This document describes the design for integrating DeepSeek AI API into the AgentChatPage Vue.js component. The integration will replace mock AI responses with real-time API calls to DeepSeek's language model, providing intelligent conversational capabilities.

The DeepSeek API is OpenAI-compatible, which simplifies integration. We will create a dedicated service layer to handle API communication, maintain conversation context, and manage error states.

## Architecture

### High-Level Architecture

```
┌─────────────────┐
│  AgentChatPage  │
│   (Vue Component)│
└────────┬────────┘
         │
         ├─ User Input
         ├─ Message Display
         └─ State Management
         │
         ▼
┌─────────────────┐
│  ChatService    │
│  (API Layer)    │
└────────┬────────┘
         │
         ├─ Message Formatting
         ├─ Context Management
         └─ Error Handling
         │
         ▼
┌─────────────────┐
│  DeepSeek API   │
│  (External)     │
└─────────────────┘
```

### Component Responsibilities

1. **AgentChatPage.vue**: UI component handling user interactions and message display
2. **ChatService.js**: Service layer managing API communication and conversation state
3. **API Configuration**: Environment-based configuration for API credentials

## Components and Interfaces

### 1. ChatService Module

Location: `src/services/chatService.js`

```javascript
// API Configuration
const API_CONFIG = {
  baseURL: 'https://api.deepseek.com',
  model: 'deepseek-chat',
  timeout: 30000,
  maxTokens: 2000,
  temperature: 0.7
}

// Service Interface
class ChatService {
  constructor(apiKey)
  async sendMessage(userMessage, conversationHistory)
  formatConversationHistory(messages)
  handleAPIError(error)
}
```

**Methods:**

- `constructor(apiKey)`: Initialize service with API credentials
- `sendMessage(userMessage, conversationHistory)`: Send message to DeepSeek API and return response
- `formatConversationHistory(messages)`: Convert internal message format to DeepSeek API format
- `handleAPIError(error)`: Process and categorize API errors

### 2. API Configuration Module

Location: `src/config/apiConfig.js`

```javascript
export const DEEPSEEK_CONFIG = {
  apiKey: process.env.VUE_APP_DEEPSEEK_API_KEY || 'sk-b816f2dde75341598dde441df259eca8',
  baseURL: 'https://api.deepseek.com',
  chatEndpoint: '/chat/completions'
}
```

### 3. AgentChatPage Updates

The existing Vue component will be updated to:
- Import and initialize ChatService
- Replace `simulateAIResponse()` with real API calls
- Handle loading states during API calls
- Display error messages appropriately

## Data Models

### Message Format (Internal)

```javascript
{
  type: 'user' | 'ai',
  content: string,
  time: string,  // HH:MM format
  error: boolean  // optional, for error messages
}
```

### DeepSeek API Request Format

```javascript
{
  model: 'deepseek-chat',
  messages: [
    {
      role: 'system' | 'user' | 'assistant',
      content: string
    }
  ],
  temperature: number,  // 0-2
  max_tokens: number,
  stream: boolean
}
```

### DeepSeek API Response Format

```javascript
{
  id: string,
  object: 'chat.completion',
  created: number,
  model: string,
  choices: [
    {
      index: number,
      message: {
        role: 'assistant',
        content: string
      },
      finish_reason: 'stop' | 'length' | 'content_filter'
    }
  ],
  usage: {
    prompt_tokens: number,
    completion_tokens: number,
    total_tokens: number
  }
}
```

### Error Response Format

```javascript
{
  error: {
    message: string,
    type: string,
    code: string
  }
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*


### Property 1: Message Flow Integrity
*For any* user message sent through the system, the message should be passed to the Chat_Service and result in an API request being made.
**Validates: Requirements 1.2, 1.3**

### Property 2: API Request Format
*For any* message sent to the DeepSeek API, the request should include the authorization header with the API key and use HTTPS protocol.
**Validates: Requirements 1.4, 8.3**

### Property 3: Response Extraction
*For any* successful API response, the Chat_Service should extract the content from the response and return it as a string.
**Validates: Requirements 1.5**

### Property 4: User Message Addition
*For any* user message submitted, the message should be added to the chat history with type 'user' and a timestamp.
**Validates: Requirements 2.1**

### Property 5: Typing Indicator State Management
*For any* message being sent, the typing indicator should be displayed (isTyping = true) until either a response is received or an error occurs, at which point it should be removed (isTyping = false).
**Validates: Requirements 2.2, 2.3, 2.4, 3.5**

### Property 6: AI Response Addition
*For any* successful API response, an AI message should be added to the chat history with type 'ai', the response content, and a timestamp.
**Validates: Requirements 2.5, 6.1, 6.3**

### Property 7: Conversation History Formatting
*For any* internal message array, when formatted for the API, each message should be converted to the DeepSeek format with correct role mapping (user → user, ai → assistant) and content field.
**Validates: Requirements 4.2**

### Property 8: Conversation History Inclusion
*For any* message sent to the API when conversation history exists, the request should include the formatted conversation history.
**Validates: Requirements 4.1**

### Property 9: Context Window Management
*For any* conversation history that exceeds the maximum context length, only the most recent messages should be included in the API request to stay within token limits.
**Validates: Requirements 4.3**

### Property 10: Line Break Preservation
*For any* AI response containing line break characters (\n), the line breaks should be preserved when displayed in the chat interface.
**Validates: Requirements 6.2**

### Property 11: Send Button State Management
*For any* message being sent, the send button should be disabled until either a response is received or an error occurs, at which point it should be re-enabled.
**Validates: Requirements 7.1, 7.3, 7.4**

### Property 12: API Key Security
*For any* console log or debug output, the API key should not be exposed in plain text.
**Validates: Requirements 8.2**

### Property 13: Response Logging Security
*For any* logging operation, full API response objects containing potentially sensitive information should not be logged.
**Validates: Requirements 8.4**

## Error Handling

### Error Categories

1. **Network Errors**
   - Connection timeout
   - Network unavailable
   - DNS resolution failure
   
   **Handling**: Display user-friendly message: "无法连接到服务器，请检查网络连接"

2. **Authentication Errors (401)**
   - Invalid API key
   - Expired API key
   
   **Handling**: Display message: "API 认证失败，请检查配置"

3. **Rate Limit Errors (429)**
   - Too many requests
   
   **Handling**: Display message: "请求过于频繁，请稍后再试"

4. **Server Errors (5xx)**
   - Internal server error
   - Service unavailable
   
   **Handling**: Display message: "服务暂时不可用，请稍后重试"

5. **Timeout Errors**
   - Request exceeds timeout limit
   
   **Handling**: Display message: "请求超时，请重试"

### Error Handling Flow

```
User sends message
    ↓
Display typing indicator
    ↓
Call API
    ↓
    ├─ Success → Display response
    │
    └─ Error → Categorize error
              ↓
              Display error message
              ↓
              Remove typing indicator
              ↓
              Re-enable send button
```

### Error Message Format

Error messages will be displayed as AI messages with an error flag:

```javascript
{
  type: 'ai',
  content: '错误信息文本',
  time: 'HH:MM',
  error: true
}
```

## Testing Strategy

### Unit Testing

We will use **Vitest** as the testing framework for Vue 3 applications.

**Test Coverage:**

1. **ChatService Tests**
   - Service initialization with API key
   - Message formatting and API request construction
   - Response parsing and extraction
   - Error handling for different error types
   - Conversation history formatting
   - Context window management

2. **AgentChatPage Component Tests**
   - Message sending flow
   - UI state management (typing indicator, button states)
   - Message display and formatting
   - Error message display
   - Chat clearing functionality

3. **Integration Tests**
   - End-to-end message flow from user input to API response
   - Error recovery scenarios
   - Conversation context maintenance across multiple messages

**Example Unit Tests:**

```javascript
// Test error handling
describe('ChatService Error Handling', () => {
  it('should handle network errors', async () => {
    // Test network error scenario
  })
  
  it('should handle authentication errors', async () => {
    // Test 401 error scenario
  })
  
  it('should handle rate limit errors', async () => {
    // Test 429 error scenario
  })
})
```

### Property-Based Testing

We will use **fast-check** library for property-based testing in JavaScript.

Each property test will run a minimum of 100 iterations to ensure comprehensive coverage.

**Property Test Implementation:**

1. **Property 1: Message Flow Integrity**
   - Generate random user messages
   - Verify API request is made for each message
   - Tag: **Feature: deepseek-chat-integration, Property 1: Message Flow Integrity**

2. **Property 2: API Request Format**
   - Generate random messages
   - Verify all requests include authorization header and use HTTPS
   - Tag: **Feature: deepseek-chat-integration, Property 2: API Request Format**

3. **Property 4: User Message Addition**
   - Generate random user messages
   - Verify each message is added to chat history with correct format
   - Tag: **Feature: deepseek-chat-integration, Property 4: User Message Addition**

4. **Property 7: Conversation History Formatting**
   - Generate random message arrays
   - Verify formatting produces correct DeepSeek API format
   - Tag: **Feature: deepseek-chat-integration, Property 7: Conversation History Formatting**

5. **Property 9: Context Window Management**
   - Generate conversation histories of varying lengths
   - Verify only recent messages are included when exceeding limits
   - Tag: **Feature: deepseek-chat-integration, Property 9: Context Window Management**

6. **Property 10: Line Break Preservation**
   - Generate responses with various line break patterns
   - Verify line breaks are preserved in display
   - Tag: **Feature: deepseek-chat-integration, Property 10: Line Break Preservation**

7. **Property 12: API Key Security**
   - Generate various log scenarios
   - Verify API key is never exposed in logs
   - Tag: **Feature: deepseek-chat-integration, Property 12: API Key Security**

**Example Property Test:**

```javascript
import fc from 'fast-check'

// Feature: deepseek-chat-integration, Property 7: Conversation History Formatting
describe('Property: Conversation History Formatting', () => {
  it('should format any message array correctly', () => {
    fc.assert(
      fc.property(
        fc.array(fc.record({
          type: fc.constantFrom('user', 'ai'),
          content: fc.string(),
          time: fc.string()
        })),
        (messages) => {
          const formatted = chatService.formatConversationHistory(messages)
          
          // Verify each message has correct structure
          formatted.forEach((msg, index) => {
            expect(msg).toHaveProperty('role')
            expect(msg).toHaveProperty('content')
            expect(msg.role).toMatch(/^(user|assistant|system)$/)
            expect(msg.content).toBe(messages[index].content)
          })
        }
      ),
      { numRuns: 100 }
    )
  })
})
```

### Testing Tools

- **Vitest**: Unit testing framework
- **@vue/test-utils**: Vue component testing utilities
- **fast-check**: Property-based testing library
- **msw** (Mock Service Worker): API mocking for integration tests

### Test Configuration

```javascript
// vitest.config.js
export default {
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'dist/']
    }
  }
}
```

## Implementation Notes

### API Key Management

For development, the API key can be hardcoded in the configuration file. For production:

1. Use environment variables (`.env` file)
2. Never commit API keys to version control
3. Add `.env` to `.gitignore`

### Rate Limiting Considerations

DeepSeek API has rate limits. Consider implementing:
- Request queuing for multiple rapid messages
- Exponential backoff for rate limit errors
- User feedback for rate limit status

### Performance Optimization

1. **Debouncing**: Prevent accidental double-sends
2. **Request Cancellation**: Cancel pending requests if user navigates away
3. **Caching**: Consider caching responses for identical queries (optional)

### Conversation Context Management

To manage token limits effectively:
- Track token count for conversation history
- Implement sliding window approach (keep last N messages)
- Consider summarization for very long conversations (future enhancement)

### Accessibility

Ensure the chat interface remains accessible:
- Screen reader announcements for new messages
- Keyboard navigation support
- ARIA labels for interactive elements

## Future Enhancements

1. **Streaming Responses**: Implement streaming for real-time response display
2. **Message Editing**: Allow users to edit and resend messages
3. **Conversation Export**: Export chat history
4. **Multi-turn Context**: Smarter context management with summarization
5. **Voice Input Integration**: Connect voice recording to text transcription
6. **Rich Media Support**: Handle images and files in conversations
