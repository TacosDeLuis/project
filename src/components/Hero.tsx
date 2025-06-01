import React, { useEffect, useRef } from 'react';
import { ChevronDown, Terminal } from 'lucide-react';

interface HeroProps {
  isDecrypted: boolean;
  decryptContent: (text: string) => string;
}

const Hero: React.FC<HeroProps> = ({ isDecrypted, decryptContent }) => {
  const typingTextRef = useRef<HTMLSpanElement>(null);
  const textToType = "Backend Developer";
  
  useEffect(() => {
    const typingText = typingTextRef.current;
    if (!typingText) return;
    
    let i = 0;
    let isDeleting = false;
    let currentText = '';
    let typingSpeed = 120;
    
    function type() {
      const fullText = isDecrypted ? textToType : decryptContent(textToType);
      
      if (isDeleting) {
        currentText = fullText.substring(0, currentText.length - 1);
        typingSpeed = 80;
      } else {
        currentText = fullText.substring(0, currentText.length + 1);
        typingSpeed = 120;
      }
      
      if (typingText) {
        typingText.textContent = currentText;
      }
      
      if (!isDeleting && currentText === fullText) {
        typingSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && currentText === '') {
        isDeleting = false;
        typingSpeed = 500;
      }
      
      setTimeout(type, typingSpeed);
    }
    
    setTimeout(type, 1000);
  }, [isDecrypted]);

  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center items-center relative bg-primary-950"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-primary-950"></div>
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,223,255,0.1)_0,transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center max-w-3xl mx-auto reveal-up">
          <div className="inline-flex items-center justify-center bg-primary-800/50 rounded-full py-1 px-3 mb-6 border border-primary-700">
            <Terminal size={16} className="text-secondary-500 mr-2" />
            <span className="text-sm font-medium text-gray-300">
              {decryptContent("Hello, World!")}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            <span className="block">{decryptContent("I'm John Doe")}</span>
            <div className="flex justify-center items-center mt-2">
              <span className="text-secondary-500">
                &lt;<span ref={typingTextRef}></span>&gt;
              </span>
            </div>
          </h1>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            {decryptContent("Crafting robust, scalable backend solutions with clean code and exceptional performance. Specialized in building the systems that power modern applications.")}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#projects" className="btn btn-primary hover-effect">
              {decryptContent("View My Work")}
            </a>
            <a href="#contact" className="btn btn-outline hover-effect">
              {decryptContent("Get In Touch")}
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex items-center justify-center w-10 h-10 rounded-full border border-secondary-500/50 hover:border-secondary-500 hover-effect">
          <ChevronDown className="text-secondary-500 w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;