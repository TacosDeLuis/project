import React, { useEffect, useRef, useState } from 'react';
import { Database, Server, Lock, Globe } from 'lucide-react';

interface ProjectsProps {
  decryptContent: (text: string) => string;
}

const Projects: React.FC<ProjectsProps> = ({ decryptContent }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState('all');

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

  const projects = [
    {
      id: 1,
      title: decryptContent("E-commerce API Platform"),
      description: decryptContent("A high-performance RESTful API for e-commerce applications handling 10M+ daily requests with 99.99% uptime."),
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: [decryptContent("Node.js"), decryptContent("Express"), decryptContent("MongoDB"), decryptContent("Redis")],
      category: "api",
      link: "#",
      icon: <Server className="w-6 h-6" />
    },
    {
      id: 2,
      title: decryptContent("Financial Data Pipeline"),
      description: decryptContent("Real-time data processing pipeline for financial transactions, handling 5TB of data daily with sub-second latency."),
      image: "https://images.pexels.com/photos/7567564/pexels-photo-7567564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: [decryptContent("Python"), decryptContent("Apache Kafka"), decryptContent("PostgreSQL"), decryptContent("Docker")],
      category: "data",
      link: "#",
      icon: <Database className="w-6 h-6" />
    },
    {
      id: 3,
      title: decryptContent("Authentication Microservice"),
      description: decryptContent("Secure OAuth 2.0 implementation for microservice architecture with biometric and MFA support."),
      image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: [decryptContent("Java"), decryptContent("Spring Boot"), decryptContent("JWT"), decryptContent("MySQL")],
      category: "security",
      link: "#",
      icon: <Lock className="w-6 h-6" />
    },
    {
      id: 4,
      title: decryptContent("Global CDN Service"),
      description: decryptContent("Distributed content delivery network optimizing media delivery across 50+ global regions."),
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: [decryptContent("Go"), decryptContent("Kubernetes"), decryptContent("AWS"), decryptContent("Terraform")],
      category: "infrastructure",
      link: "#",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const filteredProjects = activeTab === 'all' ? projects : projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" ref={sectionRef} className="section bg-primary-900">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 reveal">
            <span className="text-secondary-500">{decryptContent('Featured')}</span> {decryptContent('Projects')}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto reveal" style={{ transitionDelay: '100ms' }}>
            {decryptContent('A selection of backend projects that showcase my technical expertise, problem-solving abilities, and attention to detail.')}
          </p>
        </div>
        
        <div className="flex justify-center mb-10 overflow-x-auto reveal-up">
          <div className="inline-flex bg-primary-800 rounded-lg p-1">
            {[
              { id: 'all', name: decryptContent('All Projects') },
              { id: 'api', name: decryptContent('APIs') },
              { id: 'data', name: decryptContent('Data Systems') },
              { id: 'security', name: decryptContent('Security') },
              { id: 'infrastructure', name: decryptContent('Infrastructure') }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md transition-all duration-200 hover-effect ${
                  activeTab === tab.id 
                    ? 'bg-secondary-500 text-primary-950 font-medium'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="card group relative overflow-hidden reveal-up"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/70 to-transparent opacity-90"></div>
                <div className="absolute top-4 left-4 bg-primary-800/90 p-2 rounded-full">
                  <div className="text-secondary-500">
                    {project.icon}
                  </div>
                </div>
              </div>

              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-secondary-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="text-xs font-medium bg-primary-800 text-secondary-500 px-2.5 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="text-secondary-500 font-medium inline-flex items-center hover:underline hover-effect"
                >
                  View Project Details
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <a href="#" className="btn btn-outline hover-effect">
            {decryptContent('View All Projects')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;