import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

interface Section {
  id: string;
  label: string;
}

const OFFSET = 70; // Adjust this value based on your header height

const ScrollIndicator: React.FC = () => {
  // Define the sections that correspond to your navigation
  const sections: Section[] = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'connect', label: 'Connect' },
  ];

  const [activeSection, setActiveSection] = useState<string>(sections[0].id);

  useEffect(() => {
    // Create intersection observer to detect which section is currently visible
    const observerOptions = {
      root: null,
      rootMargin: `-${OFFSET}px 0px 0px 0px`, // Adjust for header height and trigger earlier
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    // Observe all sections
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - OFFSET; // Account for header height

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <TooltipProvider>
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
        <div className="flex flex-col">
          {sections.map((section) => (
            <Tooltip key={section.id}>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={cn(
                    'group flex p-2 cursor-pointer items-start transition-all duration-200 ease-in-out',
                    activeSection === section.id ? 'w-8' : 'w-6 hover:w-8',
                  )}
                  aria-label={`Navigate to ${section.label} section`}
                >
                  {/* The horizontal line (ruler mark) */}
                  <div
                    className={cn(
                      'h-0.5 transition-all duration-200 ease-in-out',
                      activeSection === section.id
                        ? 'w-full bg-blue-500 shadow-md shadow-blue-500/50 group-hover:bg-blue-600'
                        : 'w-full bg-gray-400 group-hover:bg-blue-500',
                    )}
                  />
                </button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{section.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
};

export { ScrollIndicator };
