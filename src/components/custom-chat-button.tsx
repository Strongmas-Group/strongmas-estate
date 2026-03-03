// components/custom-chat-button.tsx
'use client';

import { useState, useEffect, useCallback } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function CustomChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Function to force reposition Tawk elements
  const repositionTawkElements = useCallback(() => {
    if (typeof window === 'undefined') return;
    
    // Apply positioning to Tawk elements
    const applyPositioning = () => {
      // Target Tawk iframe
      const tawkIframe = document.querySelector('iframe[title*="Tawk"]') as HTMLElement;
      const tawkContainer = document.querySelector('.tawk-min-container') as HTMLElement;
      const tawkButton = document.querySelector('.tawk-button') as HTMLElement;
      
      // Get screen width for responsive positioning
      const isMobile = window.innerWidth < 768;
      const leftPosition = isMobile ? '16px' : '32px';
      const bottomPosition = isMobile ? '80px' : '32px';
      const iframeBottom = isMobile ? '140px' : '100px';
      
      // Apply positioning
      [tawkIframe, tawkContainer, tawkButton].forEach((element) => {
        if (element) {
          element.style.position = 'fixed';
          element.style.left = leftPosition;
          element.style.right = 'auto';
          element.style.zIndex = '9998';
          
          if (element === tawkIframe) {
            element.style.bottom = iframeBottom;
            element.style.height = isMobile ? '400px' : '500px';
            element.style.width = isMobile ? 'calc(100vw - 32px)' : '400px';
            element.style.maxWidth = isMobile ? '350px' : '400px';
            element.style.borderRadius = '12px';
            element.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.3)';
            element.style.border = 'none';
          } else {
            element.style.bottom = bottomPosition;
          }
        }
      });
    };
    
    // Apply immediately
    applyPositioning();
    
    // Also apply on window resize
    const handleResize = () => {
      applyPositioning();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Function to initialize Tawk
    const initTawk = () => {
      if (window.Tawk_API) {
        setIsLoaded(true);
        
        // Set up event listeners
        window.Tawk_API.onChatMaximized = () => {
          setIsOpen(true);
          setTimeout(() => repositionTawkElements(), 100);
        };
        
        window.Tawk_API.onChatMinimized = () => {
          setIsOpen(false);
          setTimeout(() => repositionTawkElements(), 100);
        };
        
        window.Tawk_API.onChatHidden = () => {
          setIsOpen(false);
        };
        
        window.Tawk_API.onLoad = function() {
          // Hide initially - use hide() instead of hideWidget()
          if (window.Tawk_API.hide) {
            window.Tawk_API.hide();
          }
          if (window.Tawk_API.minimize) {
            window.Tawk_API.minimize();
          }
          repositionTawkElements();
        };
        
        // Hide initially - check if methods exist
        if (window.Tawk_API.hide) {
          window.Tawk_API.hide();
        }
        if (window.Tawk_API.minimize) {
          window.Tawk_API.minimize();
        }
        
        // Apply positioning
        repositionTawkElements();
      }
    };

    // Check if Tawk is already loaded
    if (window.Tawk_API) {
      initTawk();
    } else {
      // Poll for Tawk to load
      const interval = setInterval(() => {
        if (window.Tawk_API) {
          clearInterval(interval);
          initTawk();
        }
      }, 500);

      return () => clearInterval(interval);
    }
  }, [repositionTawkElements]);

  const toggleChat = () => {
    if (window.Tawk_API && isLoaded) {
      if (isOpen) {
        // Close chat - use hide() instead of hideWidget()
        if (window.Tawk_API.minimize) {
          window.Tawk_API.minimize();
        }
        if (window.Tawk_API.hide) {
          window.Tawk_API.hide();
        }
      } else {
        // Show and maximize
        if (window.Tawk_API.show) {
          window.Tawk_API.show();
        }
        if (window.Tawk_API.maximize) {
          window.Tawk_API.maximize();
        }
        
        // Reposition after a delay to ensure DOM is updated
        setTimeout(() => repositionTawkElements(), 100);
      }
    }
  };

  return (
    <>
      <button
        onClick={toggleChat}
        className={cn(
          "fixed z-[9999] flex items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 group",
          "left-4 bottom-4 md:left-8 md:bottom-8", // Responsive positioning
          "w-12 h-12 md:w-14 md:h-14", // Responsive sizing
          isOpen 
            ? "bg-red-500 hover:bg-red-600" 
            : "bg-[#3b82f6] hover:bg-[#2563eb]" // Blue colors
        )}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        disabled={!isLoaded}
      >
        {isOpen ? (
          <X size={20} className="text-white md:w-6 md:h-6" />
        ) : (
          <MessageCircle size={20} className="text-white md:w-6 md:h-6" />
        )}
        
        {/* Loading indicator */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-400 rounded-full">
            <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
        {/* Active indicator */}
        {isLoaded && !isOpen && (
          <span className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full animate-pulse border-2 border-white"></span>
        )}
        
        {/* Tooltip */}
        <span className="absolute right-full top-1/2 -translate-y-1/2 mr-2 px-2 py-1 md:mr-3 md:px-3 md:py-2 bg-gray-900 text-white text-xs md:text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          {isLoaded 
            ? (isOpen ? 'Close chat' : 'Chat with us')
            : 'Loading...'
          }
        </span>
      </button>
      
      {/* Desktop notification */}
      {isLoaded && !isOpen && typeof window !== 'undefined' && window.innerWidth >= 768 && (
        <div className="fixed left-8 bottom-24 z-[9998] px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm rounded-lg shadow-lg animate-bounce border border-white/20">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>💬 Chat available</span>
          </div>
        </div>
      )}
    </>
  );
}