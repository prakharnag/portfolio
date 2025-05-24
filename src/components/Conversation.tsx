import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import Win98Button from './Win98Button';
import { chatCompletion } from '../lib/actions';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const Conversation: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm Prakhar's AI assistant. I can answer questions about his experience, skills, projects, and more. What would you like to know?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await chatCompletion([...messages, { role: 'user', content: userMessage }]);
      if (!response) throw new Error('No response from AI');
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I apologize, but I'm having trouble connecting to the server. Please try again later or contact Prakhar directly through LinkedIn or email."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#c0c0c0]">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.role === 'user'
                  ? 'bg-[#000080] text-white'
                  : 'bg-white border-2 border-[#000000]'
              }`}
            >
              {message.content}
            </div>
          </motion.div>
        ))}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="bg-white border-2 border-[#000000] p-3 rounded-lg">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-[#000080] rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-[#000080] rounded-full animate-bounce delay-100" />
                <div className="w-2 h-2 bg-[#000080] rounded-full animate-bounce delay-200" />
              </div>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="p-4 border-t-2 border-[#000000]">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 win98-input"
            disabled={isLoading}
          />
          <Win98Button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="px-4"
          >
            <FaPaperPlane className="w-4 h-4" />
          </Win98Button>
        </div>
      </form>
    </div>
  );
};

export default Conversation; 