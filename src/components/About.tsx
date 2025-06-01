import React, { useEffect, useRef } from 'react';
import { Terminal, Code, Server, Database } from 'lucide-react';

interface AboutProps {
  decryptContent: (text: string) => string;
}

const About: React.FC<AboutProps> = ({ decryptContent }) => {
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section id="about" ref={sectionRef} className="section bg-primary-900">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-white reveal-left">
              <span className="text-secondary-500">{decryptContent('About')}</span> {decryptContent('Me')}
            </h2>
            <p className="text-gray-300 mb-4 reveal-left" style={{ transitionDelay: '100ms' }}>
              {decryptContent("I'm a passionate backend developer with over 8 years of experience building robust, scalable systems that power modern applications. I specialize in designing efficient APIs, optimizing database performance, and implementing secure authentication systems.")}
            </p>
            <p className="text-gray-300 mb-6 reveal-left" style={{ transitionDelay: '200ms' }}>
              {decryptContent("My approach combines technical expertise with a deep understanding of business needs. I believe in writing clean, maintainable code and implementing best practices that enable teams to work efficiently and deliver reliable products.")}
            </p>
            <div className="grid grid-cols-2 gap-4 reveal-left" style={{ transitionDelay: '300ms' }}>
              <div className="flex items-center space-x-2 text-gray-300">
                <span className="text-secondary-500">▹</span>
                <span>{decryptContent('Node.js')}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <span className="text-secondary-500">▹</span>
                <span>{decryptContent('Python')}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <span className="text-secondary-500">▹</span>
                <span>{decryptContent('Java')}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <span className="text-secondary-500">▹</span>
                <span>{decryptContent('Go')}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <span className="text-secondary-500">▹</span>
                <span>{decryptContent('MongoDB')}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <span className="text-secondary-500">▹</span>
                <span>{decryptContent('PostgreSQL')}</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative reveal-right">
            <div className="relative border-2 border-secondary-500/20 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt={decryptContent('John Doe at work')} 
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 p-4">
                  <div className="bg-primary-950/80 p-4 rounded-lg backdrop-blur-sm border border-primary-800 flex flex-col items-center justify-center text-center">
                    <Server className="text-secondary-500 w-8 h-8 mb-2" />
                    <span className="text-white font-medium">{decryptContent('API Architecture')}</span>
                  </div>
                  <div className="bg-primary-950/80 p-4 rounded-lg backdrop-blur-sm border border-primary-800 flex flex-col items-center justify-center text-center">
                    <Database className="text-secondary-500 w-8 h-8 mb-2" />
                    <span className="text-white font-medium">{decryptContent('Database Design')}</span>
                  </div>
                  <div className="bg-primary-950/80 p-4 rounded-lg backdrop-blur-sm border border-primary-800 flex flex-col items-center justify-center text-center">
                    <Code className="text-secondary-500 w-8 h-8 mb-2" />
                    <span className="text-white font-medium">{decryptContent('Clean Code')}</span>
                  </div>
                  <div className="bg-primary-950/80 p-4 rounded-lg backdrop-blur-sm border border-primary-800 flex flex-col items-center justify-center text-center">
                    <Terminal className="text-secondary-500 w-8 h-8 mb-2" />
                    <span className="text-white font-medium">{decryptContent('System Architecture')}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-secondary-500/10 rounded-full blur-2xl z-0"></div>
            <div className="absolute -top-4 -left-4 w-40 h-40 bg-primary-500/10 rounded-full blur-2xl z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;