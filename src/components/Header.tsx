import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [isShrunken, setIsShrunken] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px', // Trigger when element is 50px from top
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // Header should be shrunken when titleName is NOT intersecting (scrolled past)
        setIsShrunken(!entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    // Observe the titleName element
    const titleNameElement = document.getElementById('titleName');
    if (titleNameElement) {
      observer.observe(titleNameElement);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="mx-auto px-2 container">
        <div
          className={cn(
            'flex items-center justify-between h-16 transition-all duration-200',
            isShrunken && 'h-10',
          )}
        >
          <a
            href="#"
            className={cn(
              'text-xl font-bold transition-all duration-200',
              isShrunken && 'text-lg',
            )}
          >
            Louie Bertoncin
          </a>
        </div>
      </div>
    </header>
  );
};

export { Header };
