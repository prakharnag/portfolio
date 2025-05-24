import OpenAI from 'openai';
import { generateSystemPrompt } from '../config/systemPrompt';

interface ConversationMessage {
  role: 'user' | 'assistant';
  content: string;
}

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export const updateConversation = (updatedMessages: ConversationMessage[]) => {
  return {
    messages: updatedMessages,
    isActive: true
  };
};

export const chatCompletion = async (messages: ConversationMessage[]) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: 'system', content: generateSystemPrompt() },
        ...messages
      ],
    });
    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Chat Error:', error);
    throw error;
  }
};
