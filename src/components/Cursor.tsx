import React, { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    // Add listener for cursor position
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    // Add listener for mouse click
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    // Add listener for link hover
    const handleLinkHoverOn = () => setLinkHovered(true);
    const handleLinkHoverOff = () => setLinkHovered(false);

    // Track mouse movement
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    // Track when cursor leaves window
    document.addEventListener('mouseout', () => setHidden(true));
    document.addEventListener('mouseover', () => setHidden(false));

    // Add hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .hover-effect');
    
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleLinkHoverOn);
      el.addEventListener('mouseleave', handleLinkHoverOff);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseout', () => setHidden(true));
      document.removeEventListener('mouseover', () => setHidden(false));

      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleLinkHoverOn);
        el.removeEventListener('mouseleave', handleLinkHoverOff);
      });
    };
  }, []);

  // Update cursor interaction for dynamically added elements
  useEffect(() => {
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, input, textarea, .hover-effect');
      
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setLinkHovered(true));
        el.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };

    // Initial setup
    addHoverListeners();

    // Set up mutation observer to watch for DOM changes
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div 
        className={`fixed pointer-events-none z-50 rounded-full mix-blend-difference transition-transform duration-150 ${
          hidden ? 'opacity-0' : 'opacity-100'
        } ${clicked ? 'scale-90' : 'scale-100'}`}
        style={{
          width: '12px',
          height: '12px',
          backgroundColor: '#00DFFF',
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%)`,
          transition: 'opacity 0.15s ease-in-out, transform 0.15s ease-in-out, width 0.15s ease-in-out, height 0.15s ease-in-out',
        }}
      />

      {/* Cursor outline/ring */}
      <div 
        className={`fixed pointer-events-none z-50 rounded-full mix-blend-difference transition-transform duration-300 ${
          hidden ? 'opacity-0' : 'opacity-100'
        } ${linkHovered ? 'scale-150 bg-white bg-opacity-10' : 'scale-100 bg-transparent'}`}
        style={{
          width: linkHovered ? '40px' : '32px',
          height: linkHovered ? '40px' : '32px',
          border: linkHovered ? 'none' : '1.5px solid #00DFFF',
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%)`,
          transition: 'opacity 0.15s ease-in-out, transform 0.2s ease-out, width 0.2s ease-out, height 0.2s ease-out, border 0.2s ease-out, background 0.2s ease-out',
        }}
      />
    </>
  );
};

export default Cursor;