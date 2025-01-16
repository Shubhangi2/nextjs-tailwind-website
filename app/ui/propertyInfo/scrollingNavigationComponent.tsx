import React, { useState, useEffect, useRef } from 'react';

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'configurations', label: 'Configurations' },
  { id: 'amenities', label: 'Amenities' },
  { id: 'locality', label: 'Locality' },
  { id: 'payment-calculator', label: 'Payment Calculator' },
  { id: 'bank-offers', label: 'Bank Offers' },
  { id: 'developer', label: 'Developer' },
  { id: 'nearby-projects', label: 'Nearby Projects' },
  { id: 'similar-projects', label: 'Similar Projects' }
];

const ScrollingNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(sections[0].id);
  const navRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<Map<string, HTMLElement | null>>(new Map());

  // Initialize section refs
  useEffect(() => {
    sections.forEach(section => {
      const element = document.getElementById(section.id);
      sectionRefs.current.set(section.id, element);
    });
  }, []);

  // Scroll spy functionality
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for header

      for (const section of sections) {
        const element = sectionRefs.current.get(section.id);
        
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            
            // Scroll nav to keep active item visible
            if (navRef.current) {
              const navItem = document.querySelector<HTMLElement>(
                `[data-section="${section.id}"]`
              );
              if (navItem) {
                navRef.current.scrollTo({
                  left: navItem.offsetLeft - navRef.current.offsetWidth / 2 + navItem.offsetWidth / 2,
                  behavior: 'smooth'
                });
              }
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle nav item click
  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs.current.get(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 60, // Offset for header
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full py-4">
      {/* Fixed navigation header */}
      <div className="sticky top-[80px] bg-white left-0 right-0 border-b-[1px] border-gray-200 shadow-md z-50">
        <div 
          ref={navRef}
          className="max-w-screen-xl mx-auto overflow-x-auto whitespace-nowrap px-4"
        >
          <div className="flex space-x-8 py-4">
            {sections.map(section => (
              <button
                key={section.id}
                data-section={section.id}
                className={`px-2 py-1 text-sm font-medium transition-colors duration-200 ${
                  activeSection === section.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
                onClick={() => scrollToSection(section.id)}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content sections */}
      <div className="">
            
      </div>
    </div>
  );
};

export default ScrollingNav;