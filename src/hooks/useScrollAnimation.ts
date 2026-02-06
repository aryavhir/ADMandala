import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Disconnect old observer if exists
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.animate-on-scroll');
    hiddenElements.forEach((el) => observerRef.current?.observe(el));

    // Cleanup function
    return () => {
      observerRef.current?.disconnect();
    };
  }, []); // Empty dependency array means this runs once on mount
  // Note: In a real app with dynamic content, you might need to re-run this when content changes
}
