import React, { useState, useRef, useEffect } from 'react';
import { Mail, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';

interface ContactProps {
  decryptContent: (text: string) => string;
}

const Contact: React.FC<ContactProps> = ({ decryptContent }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      const revealElements = section.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-up');
      revealElements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (section) {
        const revealElements = section.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-up');
        revealElements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Normally we would send this data to a backend
    setIsSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" ref={sectionRef} className="section bg-primary-900">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 reveal">
            <span className="text-secondary-500">{decryptContent('Get In')}</span> {decryptContent('Touch')}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto reveal" style={{ transitionDelay: '100ms' }}>
            {decryptContent("I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, I'll do my best to get back to you!")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 reveal-left">
            <div className="bg-primary-950 rounded-lg p-6 border border-primary-800 h-full">
              <h3 className="text-xl font-semibold text-white mb-6">{decryptContent('Contact Information')}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-2 bg-secondary-500/10 rounded-md mr-4">
                    <Mail className="w-5 h-5 text-secondary-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{decryptContent('Email')}</h4>
                    <a href="mailto:john.doe@example.com" className="text-gray-300 hover:text-secondary-500 transition-colors hover-effect">
                      john.doe@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-secondary-500/10 rounded-md mr-4">
                    <MapPin className="w-5 h-5 text-secondary-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{decryptContent('Location')}</h4>
                    <p className="text-gray-300">{decryptContent('San Francisco, California')}</p>
                  </div>
                </div>
                
                <div className="pt-6 mt-6 border-t border-primary-800">
                  <h4 className="text-white font-medium mb-4">{decryptContent('Connect with me')}</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="p-2 bg-primary-800 rounded-full text-white hover:bg-secondary-500 hover:text-primary-950 transition-colors duration-300 hover-effect">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-2 bg-primary-800 rounded-full text-white hover:bg-secondary-500 hover:text-primary-950 transition-colors duration-300 hover-effect">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-2 bg-primary-800 rounded-full text-white hover:bg-secondary-500 hover:text-primary-950 transition-colors duration-300 hover-effect">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute bottom-4 right-4 w-40 h-40 bg-secondary-500/5 rounded-full blur-3xl"></div>
            </div>
          </div>
          
          <div className="lg:col-span-3 reveal-right">
            <div className="bg-primary-950 rounded-lg p-6 border border-primary-800">
              <h3 className="text-xl font-semibold text-white mb-6">{decryptContent('Send Me a Message')}</h3>
              
              {isSubmitted ? (
                <div className="bg-green-900/20 border border-green-800 text-green-300 rounded-lg p-4 animate-fade-in">
                  <p className="font-medium">{decryptContent('Thank you for your message!')}</p>
                  <p className="text-sm mt-1">{decryptContent("I'll get back to you as soon as possible.")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 mb-2 text-sm">
                        {decryptContent('Your Name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="input"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2 text-sm">
                        {decryptContent('Your Email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-300 mb-2 text-sm">
                      {decryptContent('Subject')}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="input"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-300 mb-2 text-sm">
                      {decryptContent('Message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="input"
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn bg-secondary-500 text-primary-950 hover:bg-secondary-600 inline-flex items-center hover-effect"
                  >
                    <span>{decryptContent('Send Message')}</span>
                    <Send className="w-4 h-4 ml-2" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;