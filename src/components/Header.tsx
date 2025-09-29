import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/ui/navigation-menu';
import React, { useEffect, useState } from 'react';
import { cn } from '../lib/utils';

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

    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.slice(1);
        const targetElement = document.getElementById(targetId || '');

        if (targetElement) {
          const targetOffset = targetElement.offsetTop;
          window.scrollTo({
            top: targetOffset,
            behavior: 'smooth',
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll, false);

    // Add click listeners to navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach((link) => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll, false);
      navLinks.forEach((link) => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <>
      {/* COMMENTED OUT: Original mobile and desktop navigation with custom CSS classes */}
      {/* <nav className="absolute top-0 left-0 right-0 z-[100] hidden max-sm:block bg-gray-900 border-gray-700 mb-0" id="navbar-collapse">
        <div className="w-full px-4">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <a className="text-lg font-medium text-gray-300 hover:text-white" href="#">Louie Bertoncin</a>
          </div>
          <div className="hidden md:flex" id="navbarCollapse">
            <ul className="flex space-x-6">
              <li><a className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium" href="#about">About</a></li>
              <li><a className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium" href="#experience">Experience</a></li>
              <li><a className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium" href="#education">Education</a></li>
              <li><a className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium" href="#connect">Connect</a></li>
            </ul>
          </div>
        </div>
      </nav> */}

      {/* NEW: shadcn NavigationMenu Implementation */}
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

            {/* Navigation */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#about">About</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#experience">
                    Experience
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#education">
                    Education
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#connect">
                    Connect
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </header>
    </>
  );
};

export { Header };
