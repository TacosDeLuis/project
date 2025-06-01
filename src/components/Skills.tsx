import React, { useEffect, useRef } from 'react';
import { Server, Database, Shield, GitBranch, Clock, Bot, Cpu, BarChart } from 'lucide-react';

interface SkillsProps {
  decryptContent: (text: string) => string;
}

const Skills: React.FC<SkillsProps> = ({ decryptContent }) => {
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

  const skills = [
    {
      category: decryptContent("Backend Development"),
      icon: <Server className="w-6 h-6 text-secondary-500" />,
      items: [
        { name: decryptContent("Node.js"), proficiency: 95 },
        { name: decryptContent("Python"), proficiency: 90 },
        { name: decryptContent("Java"), proficiency: 85 },
        { name: decryptContent("Go"), proficiency: 75 }
      ]
    },
    {
      category: decryptContent("Databases"),
      icon: <Database className="w-6 h-6 text-secondary-500" />,
      items: [
        { name: decryptContent("PostgreSQL"), proficiency: 90 },
        { name: decryptContent("MongoDB"), proficiency: 95 },
        { name: decryptContent("Redis"), proficiency: 85 },
        { name: decryptContent("MySQL"), proficiency: 80 }
      ]
    },
    {
      category: decryptContent("DevOps & Infrastructure"),
      icon: <Cpu className="w-6 h-6 text-secondary-500" />,
      items: [
        { name: decryptContent("Docker"), proficiency: 90 },
        { name: decryptContent("Kubernetes"), proficiency: 80 },
        { name: decryptContent("AWS"), proficiency: 85 },
        { name: decryptContent("CI/CD"), proficiency: 90 }
      ]
    },
    {
      category: decryptContent("Security & Performance"),
      icon: <Shield className="w-6 h-6 text-secondary-500" />,
      items: [
        { name: decryptContent("OAuth 2.0"), proficiency: 90 },
        { name: decryptContent("API Security"), proficiency: 95 },
        { name: decryptContent("Performance Optimization"), proficiency: 85 },
        { name: decryptContent("Caching Strategies"), proficiency: 90 }
      ]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="section bg-primary-950">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 reveal">
            <span className="text-secondary-500">{decryptContent('Technical')}</span> {decryptContent('Skills')}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto reveal" style={{ transitionDelay: '100ms' }}>
            {decryptContent("With a focus on backend development, I've built expertise in a wide range of technologies and methodologies that enable me to create robust, scalable systems.")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <div 
              key={groupIndex} 
              className="card p-6 hover:transform hover:-translate-y-1 reveal-up"
              style={{ transitionDelay: `${groupIndex * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-secondary-500/10 rounded-md mr-4">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {skillGroup.category}
                </h3>
              </div>

              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-secondary-500">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-primary-800 rounded-full h-2.5">
                      <div 
                        className="bg-gradient-to-r from-secondary-700 to-secondary-500 h-2.5 rounded-full" 
                        style={{ 
                          width: `${skill.proficiency}%`,
                          transition: 'width 1s ease-in-out',
                          transitionDelay: `${groupIndex * 100 + skillIndex * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal-up" style={{ transitionDelay: '400ms' }}>
          <div className="bg-primary-900 rounded-lg p-6 border border-primary-800 text-center">
            <Clock className="w-10 h-10 text-secondary-500 mx-auto mb-3" />
            <h4 className="text-lg font-semibold text-white mb-2">{decryptContent('Efficiency')}</h4>
            <p className="text-gray-300 text-sm">{decryptContent('Optimizing code and processes for maximum performance')}</p>
          </div>

          <div className="bg-primary-900 rounded-lg p-6 border border-primary-800 text-center">
            <GitBranch className="w-10 h-10 text-secondary-500 mx-auto mb-3" />
            <h4 className="text-lg font-semibold text-white mb-2">{decryptContent('Scalability')}</h4>
            <p className="text-gray-300 text-sm">{decryptContent('Designing systems that grow with your business needs')}</p>
          </div>

          <div className="bg-primary-900 rounded-lg p-6 border border-primary-800 text-center">
            <Bot className="w-10 h-10 text-secondary-500 mx-auto mb-3" />
            <h4 className="text-lg font-semibold text-white mb-2">{decryptContent('Automation')}</h4>
            <p className="text-gray-300 text-sm">{decryptContent('Building automated workflows for repeatable tasks')}</p>
          </div>

          <div className="bg-primary-900 rounded-lg p-6 border border-primary-800 text-center">
            <BarChart className="w-10 h-10 text-secondary-500 mx-auto mb-3" />
            <h4 className="text-lg font-semibold text-white mb-2">{decryptContent('Monitoring')}</h4>
            <p className="text-gray-300 text-sm">{decryptContent('Implementing metrics for system health and performance')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;