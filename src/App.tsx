import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import GitHubSection from './components/GitHubSection';
import ContactSection from './components/ContactSection';
import FloatingNav from './components/FloatingNav';
import NeuralBackground from './components/NeuralBackground';

function App() {
  return (
    <div className="font-kanit bg-black" style={{ overflowX: 'clip' }}>
      <FloatingNav />
      <NeuralBackground />
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
