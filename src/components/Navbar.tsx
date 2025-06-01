import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

interface NavbarProps {
  decryptContent: (text: string) => string;
}

const Navbar: React.FC<NavbarProps> = ({ decryptContent }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest('#mobile-menu') && !target.closest('#menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${
      scrolled ? 'bg-primary-950/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 text-white hover-effect">
            <Terminal className="w-6 h-6 text-secondary-500" />
            <span className="font-mono font-bold text-xl">{decryptContent('John.Doe')}</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#about" className="text-gray-300 hover:text-secondary-500 transition-colors duration-300 hover-effect">{decryptContent('About')}</a>
            <a href="#skills" className="text-gray-300 hover:text-secondary-500 transition-colors duration-300 hover-effect">{decryptContent('Skills')}</a>
            <a href="#projects" className="text-gray-300 hover:text-secondary-500 transition-colors duration-300 hover-effect">{decryptContent('Projects')}</a>
            <a href="#experience" className="text-gray-300 hover:text-secondary-500 transition-colors duration-300 hover-effect">{decryptContent('Experience')}</a>
            <a href="#contact" className="btn btn-outline">{decryptContent('Contact')}</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            id="menu-button"
            className="md:hidden text-gray-200 hover:text-white focus:outline-none hover-effect"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        id="mobile-menu"
        className={`fixed top-0 right-0 h-full w-64 bg-primary-900/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out z-50 pt-20 px-6 shadow-xl ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button 
          className="absolute top-5 right-5 text-gray-400 hover:text-white hover-effect"
          onClick={toggleMenu}
        >
          <X className="w-6 h-6" />
        </button>
        <div className="flex flex-col space-y-6">
          <a 
            href="#about" 
            className="text-gray-300 hover:text-secondary-500 transition-colors duration-300 py-2 border-b border-primary-800 hover-effect"
            onClick={toggleMenu}
          >
            {decryptContent('About')}
          </a>
          <a 
            href="#skills" 
            className="text-gray-300 hover:text-secondary-500 transition-colors duration-300 py-2 border-b border-primary-800 hover-effect"
            onClick={toggleMenu}
          >
            {decryptContent('Skills')}
          </a>
          <a 
            href="#projects" 
            className="text-gray-300 hover:text-secondary-500 transition-colors duration-300 py-2 border-b border-primary-800 hover-effect"
            onClick={toggleMenu}
          >
            {decryptContent('Projects')}
          </a>
          <a 
            href="#experience" 
            className="text-gray-300 hover:text-secondary-500 transition-colors duration-300 py-2 border-b border-primary-800 hover-effect"
            onClick={toggleMenu}
          >
            {decryptContent('Experience')}
          </a>
          <a 
            href="#contact" 
            className="btn btn-outline text-center mt-4 hover-effect"
            onClick={toggleMenu}
          >
            {decryptContent('Contact')}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;