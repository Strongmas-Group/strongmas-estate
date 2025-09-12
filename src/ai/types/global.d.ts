export {};

declare global {
  interface Window {
    hj?: (...args: any[]) => void;
    gtag?: (...args: any[]) => void;
  }
}