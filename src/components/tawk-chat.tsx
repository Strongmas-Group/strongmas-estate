'use client';

import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function TawkChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // 1. KILLER CSS - Completely destroy all Tawk buttons
    const killCSS = document.createElement('style');
    killCSS.id = 'tawk-killer';
    killCSS.innerHTML = `
      /* COMPLETELY DESTROY every possible Tawk element */
      .tawk-button, 
      .tawk-button-container, 
      .tawk-min-container, 
      .tawk-button-circle, 
      .tawk-visitor, 
      .tawk-widget,
      .tawk-chat,
      .tawk-chat-button,
      .tawk-branding,
      .tawk-teleport,
      .tawk-launcher,
      .tawk-widget-container,
      .tawk-maximized,
      .tawk-minimized,
      .tawk-open,
      .tawk-closed,
      .tawk-offline,
      .tawk-online,
      [class*="tawk"],
      [id*="tawk"],
      [id*="Tawk"],
      [class*="Tawk"],
      a[href*="tawk.to"],
      button[title*="Tawk"],
      button[aria-label*="Tawk"],
      div[data-tawk],
      iframe[src*="tawk.to"] + *,
      .tawk-custom-color,
      .tawk-custom-border,
      .tawk-shadow,
      .tawk-rounded,
      .tawk-chat-icon,
      .tawk-chat-close,
      .tawk-chat-open,
      .tawk-widget-button {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
        width: 0px !important;
        height: 0px !important;
        max-width: 0px !important;
        max-height: 0px !important;
        min-width: 0px !important;
        min-height: 0px !important;
        margin: 0px !important;
        padding: 0px !important;
        border: 0px !important;
        position: absolute !important;
        top: -999999px !important;
        left: -999999px !important;
        z-index: -999999 !important;
        clip: rect(0,0,0,0) !important;
        clip-path: inset(50%) !important;
        overflow: hidden !important;
      }

      /* Style ONLY the chat iframe - POSITIONED VERY HIGH */
      iframe[title*="Tawk"],
      iframe[src*="tawk.to"],
      iframe[id*="tawk"] {
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
        position: fixed !important;
        right: 16px !important;
        left: auto !important;
        bottom: 90px !important;
        width: calc(100vw - 32px) !important;
        max-width: 350px !important;
        height: 400px !important;
        border-radius: 12px !important;
        box-shadow: 0 10px 40px rgba(0,0,0,0.3) !important;
        border: none !important;
        z-index: 999999 !important;
        pointer-events: auto !important;
      }

      @media (min-width: 768px) {
        iframe[title*="Tawk"],
        iframe[src*="tawk.to"],
        iframe[id*="tawk"] {
          right: 32px !important;
          left: auto !important;
          bottom: 110px !important;
          width: 400px !important;
          height: 500px !important;
          max-width: 400px !important;
        }
      }

      /* Hide ANY floating elements that might appear */
      div:not(iframe):not(style):not(script):not(link)[style*="fixed"][style*="bottom"],
      div:not(iframe):not(style):not(script):not(link)[style*="fixed"][style*="right"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
      }
    `;
    document.head.appendChild(killCSS);

    // 2. Inject Tawk script WITHOUT any default button
    const script = document.createElement('script');
    script.id = 'tawk-script';
    script.async = true;
    script.src = 'https://embed.tawk.to/6964eec1895de4198b8ffe63/1jep498vj';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    
    script.onload = () => {
      // Wait for Tawk API
      const checkInterval = setInterval(() => {
        if (window.Tawk_API) {
          clearInterval(checkInterval);
          
          // COMPLETELY DISABLE Tawk's default UI
          try {
            // Force hide everything
            window.Tawk_API.hideWidget();
            window.Tawk_API.minimize();
            
            // Override ALL UI methods
            window.Tawk_API.showWidget = () => { console.log('Blocked showWidget'); };
            window.Tawk_API.hideWidget = () => { console.log('Blocked hideWidget'); };
            window.Tawk_API.toggle = () => { console.log('Blocked toggle'); };
            window.Tawk_API.popup = () => { console.log('Blocked popup'); };
            
            // Prevent Tawk from creating any UI
            window.Tawk_API.widgetPosition = () => {};
            window.Tawk_API.setAttributes = () => {};
            
            // Remove any existing buttons
            removeTawkButtons();
            
            setIsLoaded(true);
          } catch (e) {
            console.error('Tawk init error:', e);
          }
        }
      }, 100);
    };
    
    document.body.appendChild(script);

    // 3. Function to aggressively remove any Tawk buttons
    const removeTawkButtons = () => {
      // Direct DOM removal
      const elementsToRemove = document.querySelectorAll(
        '.tawk-button, .tawk-button-container, .tawk-min-container, ' +
        '.tawk-button-circle, [id*="tawk"], [class*="tawk"], ' +
        'button[title*="Tawk"], div[data-tawk], .tawk-visitor, .tawk-widget'
      );
      
      elementsToRemove.forEach(el => {
        if (el && el.parentNode) {
          el.remove();
        }
      });
    };

    // 4. Mutation observer to KILL any Tawk button that appears
    const observer = new MutationObserver((mutations) => {
      let shouldRemove = false;
      
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) {
              const el = node as HTMLElement;
              
              if (el.className?.includes?.('tawk') || 
                  el.id?.includes?.('tawk') ||
                  el.id?.includes?.('Tawk') ||
                  el.className?.includes?.('Tawk') ||
                  el.getAttribute?.('class')?.includes?.('tawk') ||
                  el.getAttribute?.('id')?.includes?.('tawk')) {
                
                setTimeout(() => {
                  if (el && el.parentNode) {
                    el.remove();
                  }
                }, 0);
                shouldRemove = true;
              }
            }
          });
        }
      });
      
      if (shouldRemove) {
        setTimeout(removeTawkButtons, 10);
        setTimeout(removeTawkButtons, 50);
        setTimeout(removeTawkButtons, 100);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'id', 'style']
    });

    // 5. Run removal immediately and repeatedly
    removeTawkButtons();
    setTimeout(removeTawkButtons, 100);
    setTimeout(removeTawkButtons, 500);
    setTimeout(removeTawkButtons, 1000);
    setTimeout(removeTawkButtons, 2000);
    setTimeout(removeTawkButtons, 5000);

    // 6. Handle window resize
    const handleResize = () => {
      positionChatOnLeft();
      removeTawkButtons();
    };
    
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      const scriptEl = document.getElementById('tawk-script');
      if (scriptEl) scriptEl.remove();
      const killStyle = document.getElementById('tawk-killer');
      if (killStyle) killStyle.remove();
    };
  }, []);

  // Function to position chat on left - VERY HIGH POSITION
  const positionChatOnLeft = () => {
    const iframes = document.querySelectorAll('iframe[title*="Tawk"], iframe[src*="tawk.to"]');
    const isMobile = window.innerWidth < 768;
    
    iframes.forEach((iframe) => {
      const el = iframe as HTMLElement;
      el.style.cssText = `
        position: fixed !important;
        right: ${isMobile ? '16px' : '32px'} !important;
        left: auto !important;
        bottom: ${isMobile ? '90px' : '110px'} !important;
        width: ${isMobile ? 'calc(100vw - 32px)' : '400px'} !important;
        height: ${isMobile ? '400px' : '500px'} !important;
        max-width: ${isMobile ? '350px' : '400px'} !important;
        border-radius: 12px !important;
        box-shadow: 0 10px 40px rgba(0,0,0,0.3) !important;
        border: none !important;
        z-index: 999999 !important;
        display: ${isOpen ? 'block' : 'none'} !important;
        visibility: visible !important;
        opacity: 1 !important;
      `;
    });
  };

  // Toggle chat
  const toggleChat = () => {
    if (!isLoaded || !window.Tawk_API) return;

    try {
      if (isOpen) {
        // Hide the iframe
        const iframes = document.querySelectorAll('iframe[title*="Tawk"], iframe[src*="tawk.to"]');
        iframes.forEach((iframe) => {
          (iframe as HTMLElement).style.display = 'none';
        });
        
        window.Tawk_API.minimize();
        setIsOpen(false);
      } else {
        // Show the iframe
        const iframes = document.querySelectorAll('iframe[title*="Tawk"], iframe[src*="tawk.to"]');
        iframes.forEach((iframe) => {
          (iframe as HTMLElement).style.display = 'block';
        });
        
        window.Tawk_API.showWidget();
        window.Tawk_API.maximize();
        setTimeout(() => {
          positionChatOnLeft();
          removeTawkButtons();
        }, 100);
        setIsOpen(true);
      }
      
      setTimeout(removeTawkButtons, 10);
      setTimeout(removeTawkButtons, 50);
      setTimeout(removeTawkButtons, 100);
    } catch (e) {
      console.error('Toggle error:', e);
    }
  };

  // Helper to remove buttons
  const removeTawkButtons = () => {
    const selectors = [
      '.tawk-button', 
      '.tawk-button-container', 
      '.tawk-min-container', 
      '.tawk-button-circle',
      '.tawk-visitor',
      '.tawk-widget',
      '[id*="tawk"]:not(iframe)',
      '[class*="tawk"]:not(iframe)',
      'button[title*="Tawk"]',
      'div[data-tawk]'
    ];
    
    selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        if (el && el.parentNode) {
          el.remove();
        }
      });
    });
  };

  return (
    <button
      onClick={toggleChat}
      className={`
        fixed z-[999999] flex items-center justify-center
        w-14 h-14 md:w-16 md:h-16
        rounded-full shadow-lg transition-all duration-300
        hover:scale-110 active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed
        ${isOpen 
          ? 'bg-red-500 hover:bg-red-600' 
          : 'bg-[#142B54] hover:bg-[#0F1F3A]'
        }
        right-4 bottom-6 md:right-8 md:bottom-8
      `}
      style={{
        boxShadow: '0 4px 14px rgba(20, 43, 84, 0.4)'
      }}
      aria-label={isOpen ? 'Close chat' : 'Open chat'}
    >
      {isOpen ? (
        <X className="w-6 h-6 md:w-7 md:h-7 text-white" />
      ) : (
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white" />
      )}

      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-500 rounded-full">
          <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {isLoaded && !isOpen && (
        <span className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full animate-pulse border-2 border-white" />
      )}
    </button>
  );
}