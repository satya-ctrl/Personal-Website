import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import GitHubSection from './components/GitHubSection';
import ContactSection from './components/ContactSection';
import ParticleBackground from './components/ParticleBackground';
import BackgroundGlobe from './components/BackgroundGlobe';

function App() {
  return (
    <div className="font-kanit bg-[#0C0C0C]" style={{ overflowX: 'clip' }}>
      <ParticleBackground />
      <BackgroundGlobe />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <GitHubSection />
      <ContactSection />
    </div>
  );
}

export default App;
