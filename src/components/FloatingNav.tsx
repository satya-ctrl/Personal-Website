import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const FloatingNav = () => {
  const [active, setActive] = useState('Home');

  // Scroll spy logic to automatically update active state based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1)).filter(id => id);
      let current = 'Home';
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Offset to trigger earlier when scrolling down
          if (rect.top <= 150) {
            current = navLinks.find(l => l.href === `#${section}`)?.label || 'Home';
          }
        }
      }
      
      // If at the very top, set Home active
      if (window.scrollY < 100) {
        current = 'Home';
      }
      
      setActive(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-max max-w-[95vw]">
      <nav className="flex items-center gap-1 sm:gap-2 px-1.5 py-1.5 rounded-full border border-[#D7E2EA]/20 bg-[#0C0C0C]/80 backdrop-blur-md shadow-lg">
        {navLinks.map((link) => {
          const isActive = active === link.label;
          return (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                isActive
                  ? 'bg-[#D7E2EA]/15 text-[#D7E2EA]'
                  : 'text-[#D7E2EA]/50 hover:text-[#D7E2EA] hover:bg-[#D7E2EA]/5'
              }`}
            >
              {link.label}
            </a>
          );
        })}
      </nav>
    </div>
  );
};

export default FloatingNav;
