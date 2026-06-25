import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col relative" style={{ overflowX: 'clip' }}>


      {/* Hero Heading - Absolute Centered */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-10 pointer-events-none">
        <FadeIn delay={0.15} y={40} className="w-full flex justify-center items-center">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap text-center text-[11.5vw] sm:text-[12.5vw] md:text-[13.5vw] lg:text-[14.5vw] pointer-events-auto">
            i&apos;m satya
          </h1>
        </FadeIn>
      </div>

      {/* Main hero area (Bottom bar container) */}
      <div className="flex-1 flex flex-col justify-end relative px-6 md:px-10 z-20">
        {/* Bottom bar */}
        <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10">
          <FadeIn delay={0.35} y={20}>
            <p
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
              style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
            >
              a developer driven by crafting intelligent and impactful solutions
            </p>
          </FadeIn>
          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
