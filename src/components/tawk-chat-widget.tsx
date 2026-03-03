'use client';

import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function TawkChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Function to load Tawk.to script
    const loadTawkScript = () => {
      if (document.getElementById('tawk-script')) return;

      const script = document.createElement('script');
      script.id = 'tawk-script';
      script.async = true;
      script.src = 'https://embed.tawk.to/6964eec1895de4198b8ffe63/1jep498vj';
      script.charset = 'UTF-8';
      script.setAttribute('crossorigin', '*');
      
      script.onload = () => {
        // Wait for Tawk API to be available
        const waitForTawk = setInterval(() => {
          if (window.Tawk_API) {
            clearInterval(waitForTawk);
            setIsLoaded(true);
            
            // Initialize Tawk
            initializeTawk();
          }
        }, 100);
      };
      
      document.body.appendChild(script);
    };

    // Function to initialize Tawk
    const initializeTawk = () => {
      if (!window.Tawk_API) return;

      // Hide widget initially
      window.Tawk_API.hideWidget = () => {
        const widget = document.querySelector('.tawk-button') as HTMLElement;
        if (widget) widget.style.display = 'none';
      };

      window.Tawk_API.showWidget = () => {
        const widget = document.querySelector('.tawk-button') as HTMLElement;
        if (widget) widget.style.display = 'block';
      };

      // Set event listeners
      window.Tawk_API.onLoad = function() {
        // Customize Tawk position to left side
        customizeTawkPosition();
        // Hide Tawk's default button
        hideDefaultTawkButton();
      };

      window.Tawk_API.onChatMaximized = function() {
        setIsOpen(true);
        customizeTawkPosition();
      };

      window.Tawk_API.onChatMinimized = function() {
        setIsOpen(false);
      };

      window.Tawk_API.onChatHidden = function() {
        setIsOpen(false);
      };

      // Apply custom styles
      applyCustomStyles();
    };

    // Function to customize Tawk position
    const customizeTawkPosition = () => {
      setTimeout(() => {
        // Position the chat widget on left side
        const tawkIframe = document.querySelector('iframe[title*="Tawk"]') as HTMLElement;
        const tawkButton = document.querySelector('.tawk-button') as HTMLElement;
        
        if (tawkIframe) {
          tawkIframe.style.position = 'fixed';
          tawkIframe.style.left = '20px';
          tawkIframe.style.right = 'auto';
          tawkIframe.style.bottom = '100px';
          tawkIframe.style.zIndex = '9998';
          tawkIframe.style.borderRadius = '12px';
          tawkIframe.style.boxShadow = '0 10px 40px rgba(0,0,0,0.3)';
          tawkIframe.style.border = 'none';
          
          // Responsive sizing
          if (window.innerWidth < 768) {
            tawkIframe.style.width = 'calc(100vw - 40px)';
            tawkIframe.style.maxWidth = '350px';
            tawkIframe.style.height = '400px';
          } else {
            tawkIframe.style.width = '400px';
            tawkIframe.style.height = '500px';
          }
        }
        
        if (tawkButton) {
          tawkButton.style.position = 'fixed';
          tawkButton.style.left = '20px';
          tawkButton.style.right = 'auto';
          tawkButton.style.bottom = '20px';
          tawkButton.style.zIndex = '9999';
          tawkButton.style.display = 'none'; // Hide default button
        }
      }, 100);
    };

    // Function to hide Tawk's default button
    const hideDefaultTawkButton = () => {
      const tawkButton = document.querySelector('.tawk-button') as HTMLElement;
      if (tawkButton) {
        tawkButton.style.display = 'none';
      }
    };

    // Function to apply custom styles
    const applyCustomStyles = () => {
      const style = document.createElement('style');
      style.innerHTML = `
        .tawk-button { display: none !important; }
        .tawk-min-container { display: none !important; }
        
        /* Mobile styles */
        @media (max-width: 767px) {
          iframe[title*="Tawk"] {
            left: 16px !important;
            right: auto !important;
            bottom: 100px !important;
            width: calc(100vw - 32px) !important;
            max-width: 350px !important;
            height: 400px !important;
          }
        }
        
        /* Desktop styles */
        @media (min-width: 768px) {
          iframe[title*="Tawk"] {
            left: 32px !important;
            right: auto !important;
            bottom: 120px !important;
            width: 400px !important;
            height: 500px !important;
          }
        }
      `;
      document.head.appendChild(style);
    };

    // Load Tawk script
    loadTawkScript();

    // Cleanup
    return () => {
      const script = document.getElementById('tawk-script');
      if (script) document.body.removeChild(script);
    };
  }, []);

  // Function to toggle chat
  const toggleChat = () => {
    if (!isLoaded || !window.Tawk_API) return;

    if (isOpen) {
      window.Tawk_API.minimize();
    } else {
      window.Tawk_API.maximize();
    }
  };

  // Function to manually show/hide Tawk
  const showTawkChat = () => {
    if (!window.Tawk_API) return;
    
    // Show Tawk chat
    const tawkIframe = document.querySelector('iframe[title*="Tawk"]') as HTMLElement;
    if (tawkIframe) {
      tawkIframe.style.display = 'block';
    }
    
    // Maximize chat
    if (window.Tawk_API.maximize) {
      window.Tawk_API.maximize();
    }
    
    setIsOpen(true);
  };

  const hideTawkChat = () => {
    if (!window.Tawk_API) return;
    
    // Minimize chat
    if (window.Tawk_API.minimize) {
      window.Tawk_API.minimize();
    }
    
    // Hide iframe after a delay
    setTimeout(() => {
      const tawkIframe = document.querySelector('iframe[title*="Tawk"]') as HTMLElement;
      if (tawkIframe) {
        tawkIframe.style.display = 'none';
      }
    }, 300);
    
    setIsOpen(false);
  };

  // Handle click
  const handleClick = () => {
    if (!isLoaded) return;
    
    if (isOpen) {
      hideTawkChat();
    } else {
      showTawkChat();
    }
  };

  return (
    <>
      {/* Custom chat button */}
      <button
        onClick={handleClick}
        className={`
          fixed z-[9999] flex items-center justify-center 
          w-14 h-14 rounded-full shadow-lg transition-all duration-300 
          hover:scale-110
          ${isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-600 hover:bg-blue-700'}
          left-6 bottom-6 md:left-8 md:bottom-8
        `}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        disabled={!isLoaded}
        style={{ cursor: isLoaded ? 'pointer' : 'not-allowed' }}
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <MessageCircle size={24} className="text-white" />
        )}
        
        {/* Loading indicator */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-400 rounded-full">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
        {/* Active indicator */}
        {isLoaded && !isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse border-2 border-white"></span>
        )}
      </button>
      
      {/* Status indicator */}
      {!isLoaded && (
        <div className="fixed left-6 bottom-24 z-[9998] px-4 py-2 bg-blue-500/90 text-white text-sm rounded-lg shadow-lg animate-pulse">
          Loading chat...
        </div>
      )}
      
      {/* Custom CSS for Tawk */}
      <style jsx global>{`
        /* Hide Tawk's default button and container */
        .tawk-button,
        .tawk-min-container,
        .tawk-button-circle,
        .tawk-button-container {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
        }
        
        /* Style Tawk iframe */
        iframe[title*="Tawk"] {
          border-radius: 12px !important;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3) !important;
          border: none !important;
        }
      `}</style>
    </>
  );
}