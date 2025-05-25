interface ConversationMessage {
  role: 'user' | 'assistant';
  content: string;
}

export const updateConversation = (updatedMessages: ConversationMessage[]) => {
  return {
    messages: updatedMessages,
    isActive: true
  };
};

export const chatCompletion = async (messages: ConversationMessage[]) => {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages })
    });
    
    if (!response.ok) throw new Error('Failed to get response');
    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error('Chat Error:', error);
    throw error;
  }
};
