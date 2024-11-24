'use client';

// Define the gtag function type
type GtagFunction = (
  command: 'event',
  action: string,
  params: {
    event_category: string;
    event_label?: string;
    [key: string]: unknown;
  }
) => void;

declare global {
  interface Window {
    gtag: GtagFunction;
  }
}

export const useAnalytics = () => {
  const trackEvent = (category: string, action: string, label?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
      });
    }
  };

  return { trackEvent };
}; 