import { useState, useEffect } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import $ from 'jquery';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleFormSubmit = (event: JQuery.SubmitEvent) => {
      event.preventDefault(); // prevent reload

      if (isSubmitting) return; // Prevent duplicate submissions

      setIsSubmitting(true);

      const formData = new FormData(event.target as HTMLFormElement);
      formData.append('service_id', import.meta.env.VITE_EMAILJS_SERVICE_ID);
      formData.append('template_id', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
      formData.append('user_id', import.meta.env.VITE_EMAILJS_USER_ID);
      
      $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false, // no need to parse formData to string
      })
        .done(() => {
          setIsSubmitting(false);
          setIsSubmitted(true);
          setFormData({ name: '', message: '' });
          setTimeout(() => setIsSubmitted(false), 2000); // Hide success message after 2 seconds
        })
        .fail((error) => {
          setIsSubmitting(false);
          alert('Oops... ' + JSON.stringify(error));
        });
    };

    $('#myForm').on('submit', handleFormSubmit);

    return () => {
      $('#myForm').off('submit', handleFormSubmit);
    };
  }, [isSubmitting]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section id="contact" className="py-16 bg-white bg-gray-100 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-white-600 mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="mailto:prakharnagwork@gmail.com"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Mail className="w-5 h-5 text-gray-700" />
            </a>
            <a
              href="https://www.linkedin.com/in/prakhar-nag/"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-gray-700" />
            </a>
            <a
              href="https://github.com/prakharnag"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Github className="w-5 h-5 text-gray-700" />
            </a>
          </div>

          <form id="myForm" className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-800 dark:text-gray-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-800 dark:text-gray-300"
                rows={5}
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {isSubmitted && <p className="mt-4 text-green-600">Message sent successfully!</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;