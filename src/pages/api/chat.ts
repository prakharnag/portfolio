import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
import { generateSystemPrompt } from '../../config/systemPrompt';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages } = req.body;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: 'system', content: generateSystemPrompt() },
        ...messages
      ],
    });

    res.status(200).json({ message: completion.choices[0].message.content });
  } catch (error) {
    console.error('OpenAI API Error:', error);
    res.status(500).json({ error: 'Failed to get response from AI' });
  }
} 