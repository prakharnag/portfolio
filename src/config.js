export const config = {
  openai: {
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    model: 'gpt-3.5-turbo',
  },
  emailjs: {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    userId: process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
  },
  resume: {
    url: process.env.NEXT_PUBLIC_RESUME_URL,
  }
}; 