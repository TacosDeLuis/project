import React, { useState } from 'react';
import { Lock, Unlock } from 'lucide-react';

interface DecryptionPromptProps {
  onDecrypt: (phrase: string) => void;
}

const DecryptionPrompt: React.FC<DecryptionPromptProps> = ({ onDecrypt }) => {
  const [secretPhrase, setSecretPhrase] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onDecrypt(secretPhrase);
  };

  return (
    <div className="fixed inset-0 bg-primary-950 bg-opacity-95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-primary-900 p-8 rounded-lg shadow-xl border border-secondary-500/20 max-w-md w-full animate-fade-in">
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-secondary-500/10 rounded-full">
            <Lock className="w-8 h-8 text-secondary-500" />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-center mb-2 text-white">Enter Secret Phrase</h2>
        <p className="text-gray-400 text-center mb-6">
          This content is encrypted. Enter the secret phrase to decrypt the portfolio.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={secretPhrase}
              onChange={(e) => setSecretPhrase(e.target.value)}
              className="input w-full text-center"
              placeholder="Enter secret phrase"
              autoFocus
            />
          </div>
          
          <button 
            type="submit"
            className="btn btn-primary w-full flex items-center justify-center gap-2 hover-effect"
          >
            <Unlock className="w-4 h-4" />
            <span>Decrypt Content</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default DecryptionPrompt;