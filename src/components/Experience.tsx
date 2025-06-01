import React, { useEffect, useRef } from 'react';
import { Briefcase } from 'lucide-react';

interface ExperienceProps {
  decryptContent: (text: string) => string;
}

const Experience: React.FC<ExperienceProps> = ({ decryptContent }) => {
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

  const experiences = [
    {
      company: decryptContent("TechNova Solutions"),
      position: decryptContent("Senior Backend Engineer"),
      period: decryptContent("2022 - Present"),
      description: decryptContent("Leading the development of high-throughput microservices handling 10M+ daily requests. Implemented distributed tracing and reduced API response times by 40%."),
      technologies: [decryptContent("Node.js"), decryptContent("Kubernetes"), decryptContent("MongoDB"), decryptContent("Redis")]
    },
    {
      company: decryptContent("DataFlow Systems"),
      position: decryptContent("Backend Developer"),
      period: decryptContent("2019 - 2022"),
      description: decryptContent("Built real-time data processing pipelines for financial services. Designed fault-tolerant architecture with 99.99% uptime and sub-second data processing latency."),
      technologies: [decryptContent("Python"), decryptContent("Apache Kafka"), decryptContent("PostgreSQL"), decryptContent("Docker")]
    },
    {
      company: decryptContent("SecureAuth Inc"),
      position: decryptContent("Backend Engineer"),
      period: decryptContent("2017 - 2019"),
      description: decryptContent("Developed secure authentication systems for enterprise clients. Implemented OAuth 2.0, SAML, and biometric authentication flows compliant with financial regulations."),
      technologies: [decryptContent("Java"), decryptContent("Spring Boot"), decryptContent("MySQL"), decryptContent("JWT")]
    },
    {
      company: decryptContent("CloudScale"),
      position: decryptContent("Junior Backend Developer"),
      period: decryptContent("2015 - 2017"),
      description: decryptContent("Assisted in building cloud infrastructure automation tools. Created APIs for resource provisioning and implemented CI/CD pipelines for deployment automation."),
      technologies: [decryptContent("Go"), decryptContent("AWS"), decryptContent("Terraform"), decryptContent("GitLab CI")]
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="section bg-primary-950">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 reveal">
            <span className="text-secondary-500">{decryptContent('Work')}</span> {decryptContent('Experience')}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto reveal" style={{ transitionDelay: '100ms' }}>
            {decryptContent('My professional journey has been focused on building robust backend systems across various industries and technical challenges.')}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-px top-0 h-full w-0.5 bg-primary-800"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col sm:flex-row items-center ${
                  index % 2 === 0 ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 sm:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-2 border-secondary-500 bg-primary-950 z-10"></div>
                
                {/* Content card */}
                <div 
                  className={`sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-12 reveal-left' : 'sm:pl-12 reveal-right'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="bg-primary-900 p-6 rounded-lg border border-primary-800 shadow-lg hover:border-secondary-500/30 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <Briefcase className="text-secondary-500 w-5 h-5 mr-2" />
                      <h3 className="text-xl font-semibold text-white">{exp.position}</h3>
                    </div>
                    <div className="mb-4">
                      <div className="text-secondary-500 font-medium">{exp.company}</div>
                      <div className="text-sm text-gray-400">{exp.period}</div>
                    </div>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="text-xs font-medium bg-primary-800 text-secondary-500 px-2.5 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center reveal-up">
          <a 
            href="#" 
            className="inline-flex items-center text-secondary-500 hover:underline hover-effect"
          >
            <span className="mr-2">{decryptContent('Download my full resume')}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;