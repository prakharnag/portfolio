'use client';

import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Win98Button from './Win98Button';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });

  useEffect(() => {
    // Initialize EmailJS with the public key
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID || '');
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (status.type) {
      timeoutId = setTimeout(() => {
        setStatus({ type: null, message: '' });
      }, 3000);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [status.type]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: '' });

    try {
      // Validate environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

      if (!serviceId || !templateId || !userId) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
      }

      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Prakhar'
        },
        userId
      );

      if (result.status === 200) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-header">Get in Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="contact-form"
          >
            <div className="win98-title-bar mb-4">
              <span>Send Message</span>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="win98-input w-full"
                  placeholder="Enter your name here..."
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="win98-input w-full"
                  placeholder="Enter your email here..."
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-1">Subject:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="win98-input w-full"
                  placeholder="Enter your subject here..."
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="win98-input w-full h-32 resize-none"
                  placeholder="Enter your message here..."
                  required
                />
              </div>
              {status.message && (
                <div className={`p-2 ${status.type === 'success' ? 'bg-green-100' : 'bg-red-100'}`}>
                  {status.message}
                </div>
              )}
              <Win98Button
                type="submit"
                disabled={isLoading}
                className="w-full"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </Win98Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="win98-window p-6"
          >
            <div className="win98-title-bar mb-4">
              <span>Contact Information</span>
            </div>
            <div className="space-y-6">
              <p className="text-gray-800">
                Feel free to reach out to me through any of the following channels:
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:prakharnagwork@gmail.com"
                  className="flex items-center gap-2 hover:text-[#000080]"
                >
                  <FaEnvelope className="text-xl" />
                  <span>prakharnagwork@gmail.com</span>
                </a>
                <a
                  href="https://github.com/prakharnag"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#000080]"
                >
                  <FaGithub className="text-xl" />
                  <span>github.com/prakharnag</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/prakhar-nag/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#000080]"
                >
                  <FaLinkedin className="text-xl" />
                  <span>linkedin.com/in/prakhar-nag/</span>
                </a>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-bold text-[#000080] mb-2">Location</h3>
                <p className="text-gray-800">Chicago, IL</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
