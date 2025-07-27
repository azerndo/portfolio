import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCheck } from '@fortawesome/free-solid-svg-icons';

const ContactFooter: React.FC = () => {
  const [isCopied, setIsCopied] = useState(false);
  const email = 'jhosadyanazana@gmail.com';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  };

  return (
    <footer className="w-full py-6 bg-lime-500/30 backdrop-blur-sm border-t border-lime-200/30 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h3 className="text-lg font-semibold text-lime-900">Let's Connect</h3>
          <div className="flex space-x-6">
            <a 
              href="https://instagram.com/dyone.andonly" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lime-900 hover:text-white transition-colors duration-300 ease-in-out"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/dyan-aza%C3%B1a-453202301/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lime-900 hover:text-white transition-colors duration-300 ease-in-out"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
            </a>
            <button 
              onClick={copyToClipboard}
              className="relative text-lime-900 hover:text-white transition-colors duration-300 ease-in-out group cursor-pointer"
              aria-label="Copy email to clipboard"
            >
              <FontAwesomeIcon icon={isCopied ? faCheck : faEnvelope} className="w-6 h-6" />
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-lime-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap ">
                {isCopied ? 'Copied!' : 'Copy Email'}
              </span>
            </button>
          </div>
          <p className="text-sm text-lime-900/80 mt-2">
            &copy; {new Date().getFullYear()} Dyan Azana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
