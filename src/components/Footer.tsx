import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

interface FooterProps {
  decryptContent: (text: string) => string;
}

const Footer: React.FC<FooterProps> = ({ decryptContent }) => {
  return (
    <footer className="bg-primary-950 text-gray-300 py-12 border-t border-primary-800">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">{decryptContent('John Doe')}</h3>
            <p className="mb-4 max-w-md">
              {decryptContent('Backend developer specialized in building robust, scalable systems with clean code and exceptional performance.')}
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-secondary-500 transition-colors hover-effect">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary-500 transition-colors hover-effect">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary-500 transition-colors hover-effect">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:john.doe@example.com" className="text-gray-400 hover:text-secondary-500 transition-colors hover-effect">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">{decryptContent('Quick Links')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-secondary-500 transition-colors hover-effect">{decryptContent('About')}</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-secondary-500 transition-colors hover-effect">{decryptContent('Skills')}</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-secondary-500 transition-colors hover-effect">{decryptContent('Projects')}</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-secondary-500 transition-colors hover-effect">{decryptContent('Experience')}</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-secondary-500 transition-colors hover-effect">{decryptContent('Contact')}</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">{decryptContent('Contact')}</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-secondary-500" />
                <a href="mailto:john.doe@example.com" className="hover:text-secondary-500 transition-colors hover-effect">
                  john.doe@example.com
                </a>
              </li>
              <li>
                <p>{decryptContent('San Francisco, CA')}</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-8 pt-8 text-sm text-center">
          <p>© {new Date().getFullYear()} {decryptContent('John Doe')}. {decryptContent('All rights reserved.')}</p>
          <p className="mt-2 text-gray-400">
            {decryptContent('Built with React, TypeScript & Tailwind CSS')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;