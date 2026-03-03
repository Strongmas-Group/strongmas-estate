// types/global.d.ts
declare module "*.css";
declare module "*.scss";
declare module "*.sass";

declare global {
  interface Window {
    Tawk_API: any;
    Tawk_LoadStart: Date;
    
    // Analytics
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    
    // Hotjar
    hj: (...args: any[]) => void;
    _hjSettings: { hjid: number; hjsv: number };
    
    // OneSignal
    OneSignalDeferred: any[];
    
    // Meta Pixel
    fbq: (...args: any[]) => void;
  }
}

export {};