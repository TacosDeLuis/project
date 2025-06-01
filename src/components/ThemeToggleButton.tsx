import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleButtonProps {
  isBright: boolean;
  onToggle: () => void;
}

const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({ isBright, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`btn btn-outline flex items-center gap-2 hover:bg-blue-200/20 transition-colors duration-300`}
      aria-label={isBright ? 'Switch to default color' : 'Switch to bright blue'}
      style={{ minWidth: 44 }}
    >
      {isBright ? <Moon className="w-5 h-5 text-blue-700" /> : <Sun className="w-5 h-5 text-blue-400" />}
      <span className="hidden sm:inline">
        {isBright ? 'Default Color' : 'Bright Blue'}
      </span>
    </button>
  );
};

export default ThemeToggleButton;



//isDecrypt