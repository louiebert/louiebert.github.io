import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [isShrunken, setIsShrunken] = useState(false);

  useEffect(() => {
    let didScroll = false;

    const handleScroll = () => {
      if (!didScroll) {
        didScroll = true;
        setTimeout(() => {
          const titleNameElement = document.getElementById('titleName');
          let changeHeaderOn = 50;

          if (titleNameElement) {
            changeHeaderOn = titleNameElement.getBoundingClientRect().top;
          }

          const sy = window.pageYOffset || document.documentElement.scrollTop;
          setIsShrunken(sy >= changeHeaderOn);
          didScroll = false;
        }, 50);
      }
    };

    window.addEventListener('scroll', handleScroll, false);

    return () => {
      window.removeEventListener('scroll', handleScroll, false);
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
