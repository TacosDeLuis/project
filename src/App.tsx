import { useEffect, useState } from 'react';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DecryptionPrompt from './components/DecryptionPrompt';
import { setupScrollReveal } from './utils/scrollReveal';
import { generateRandomText } from './utils/encryption';
import ThemeToggleButton from './components/ThemeToggleButton';

function App() {
  const [isDecrypted, setIsDecrypted] = useState(false);
  const [isBright, setIsBright] = useState(false);

  useEffect(() => {
    // Setup scroll reveal animations
    const observer = setupScrollReveal();
    
    // Update page title
    document.title = "John Doe | Backend Developer";

    return () => {
      // Cleanup observer on component unmount
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    // Change background color on theme toggle
    if (isBright) {
      document.body.classList.add('bright-theme');
    } else {
      document.body.classList.remove('bright-theme');
    }
  }, [isBright]);

  const handleDecrypt = () => {
    setIsDecrypted(true);
  };

  const decryptContent = (text: string): string => {
    if (!isDecrypted) {
      return generateRandomText(text.length);
    }
    return text;
  };

  return (
    <div className="min-h-screen bg-primary-950 text-gray-100 font-sans">
      {!isDecrypted && <DecryptionPrompt onDecrypt={handleDecrypt} />}
      
      {/* Custom cursor */}
      <Cursor />
      
      {/* Theme toggle button */}
      <div className="fixed top-6 right-6 z-50 hidden md:block">
        <ThemeToggleButton isBright={isBright} onToggle={() => setIsBright((b) => !b)} />
      </div>
      
      {/* Navigation */}
      <Navbar decryptContent={decryptContent} />
      {/* Main Content */}
      <main className={`transition-opacity duration-1000 ${isDecrypted ? 'opacity-100' : 'opacity-80'}`}>
        <Hero isDecrypted={isDecrypted} decryptContent={decryptContent} />
        <About decryptContent={decryptContent} />
        <Skills decryptContent={decryptContent} />
        <Projects decryptContent={decryptContent} />
        <Experience decryptContent={decryptContent} />
        <Contact decryptContent={decryptContent} />
      </main>
      {/* Footer */}
      <Footer decryptContent={decryptContent} />
    </div>
  );
}

export default App;