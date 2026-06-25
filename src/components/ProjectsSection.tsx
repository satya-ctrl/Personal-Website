import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';

const projects = [
  {
    num: '01',
    category: 'Personal',
    name: 'Deepfake Detection System',
    tech: ['Python', 'OpenCV', 'CNN', 'TensorFlow'],
    description:
      'CNN-based deepfake image detection system achieving 94.25% accuracy, 0.981 AUC, 93.8% real-image precision, and 94.71% fake-image precision.',
    href: 'https://deepfake-detection-system-eight.vercel.app/',
    images: {
      col1Top: '/projects/project1-1.png',
      col1Bottom: '/projects/project1-2.png',
      col2: '/projects/project1-3.png',
    },
  },
  {
    num: '02',
    category: 'Personal',
    name: 'AI E-Commerce Platform',
    tech: ['Python', 'Django', 'MongoDB', 'Scikit-Learn'],
    description:
      'Full-stack e-commerce platform with authentication, product management, and a content-based recommendation engine using item similarity analysis.',
    href: 'https://nexcart-e-commerce-platform-production.up.railway.app/shop/',
    images: {
      col1Top: '/projects/project2-1.png',
      col1Bottom: '/projects/project2-2.png',
      col2: '/projects/project2-3.png',
    },
  },
  {
    num: '03',
    category: 'Personal',
    name: 'Stock Market Prediction (StockFlow)',
    tech: ['Python', 'ML', 'React', 'FastAPI'],
    description:
      'AI-powered stock market prediction system using machine learning models to analyze market trends and forecast stock prices with real-time data visualization.',
    href: 'https://stock-flow-tan-beta.vercel.app',
    images: {
      col1Top: '/projects/project3-mockup.png',
      col1Bottom: '/projects/project3-mockup.png',
      col2: '/projects/project3-mockup.png',
    },
  },
  {
    num: '04',
    category: 'Client',
    name: "February's Favourite",
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    description:
      'A professionally designed client website for the February\'s Favourite brand, featuring modern UI/UX design and responsive layouts.',
    href: 'https://www.februarysfavourite.com/',
    images: {
      col1Top: '/projects/project4-1.png',
      col1Bottom: '/projects/project4-2.png',
      col2: '/projects/project4-3.png',
    },
  },
  {
    num: '05',
    category: 'Work',
    name: 'Leave Request System',
    tech: ['Web', 'App'],
    description: 'Noventiq Work - A system for managing and processing employee leave requests efficiently.',
    href: 'https://leave-request-system-tau.vercel.app',
    images: {
      col1Top: '/projects/project5-1.png',
      col1Bottom: '/projects/project5-2.png',
      col2: '/projects/project5-3.png',
    },
  },
  {
    num: '06',
    category: 'Personal',
    name: 'Aethera (Resume Editor)',
    tech: ['React', 'PDF Processing', 'Interactive'],
    description: 'A layout-preserving document studio redefining resumes. Features an interactive custom PDF editor and visual comparison tools for precise layout reflow.',
    href: 'https://resumeeditor-9me0c4brv-satya-ctrls-projects.vercel.app/',
    images: {
      col1Top: '/projects/project6-mockup.png',
      col1Bottom: '/projects/project6-mockup.png',
      col2: '/projects/project6-mockup.png',
    },
  },
  {
    num: '07',
    category: 'Personal',
    name: 'WhatsApp Orchestrator',
    tech: ['JavaScript', 'API', 'Automation'],
    description: 'An orchestrator for managing and automating WhatsApp operations and workflows.',
    href: 'https://whatsapp-orchestrator-apkn.onrender.com/',
    images: {
      col1Top: '/projects/project7-1.png',
      col1Bottom: '/projects/project7-2.png',
      col2: '/projects/project7-3.png',
    },
  }
];

const ProjectCard = ({
  project,
  index,
  totalCards,
}: {
  project: (typeof projects)[0];
  index: number;
  totalCards: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={cardRef} className="h-[100vh]">
      <motion.div
        className="sticky top-6 md:top-10 rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border border-[#D7E2EA]/20 bg-[#0C0C0C]/60 backdrop-blur-md p-4 sm:p-5 md:p-6 origin-top flex flex-col h-[94vh]"
        style={{
          scale,
          top: `${24 + index * 20}px`,
        }}
      >
        {/* Top row */}
        <div className="flex items-start justify-between mb-2 md:mb-3 flex-wrap gap-4 flex-shrink-0">
          <div className="flex items-start gap-3 sm:gap-4 md:gap-5">
            <span
              className="hero-heading font-black leading-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 80px)' }}
            >
              {project.num}
            </span>
            <div className="flex flex-col gap-1 pt-1 sm:pt-2 md:pt-3">
              <span className="text-[#D7E2EA]/60 text-sm sm:text-base uppercase tracking-wider">
                {project.category}
              </span>
              <h3
                className="text-[#D7E2EA] font-medium uppercase"
                style={{ fontSize: 'clamp(1rem, 1.8vw, 1.8rem)' }}
              >
                {project.name}
              </h3>
              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[#D7E2EA]/50 text-xs sm:text-sm border border-[#D7E2EA]/15 rounded-full px-3 py-1 font-light"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {/* Description */}
              <p
                className="text-[#D7E2EA]/40 font-light leading-relaxed mt-2 max-w-xl"
                style={{ fontSize: 'clamp(0.8rem, 1.3vw, 1rem)' }}
              >
                {project.description}
              </p>
            </div>
          </div>
          <div className="pt-2">
            <LiveProjectButton href={project.href} />
          </div>
        </div>

        {/* Bottom row - large image preview (since iframes are blocked by Vercel) */}
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 w-full rounded-[15px] sm:rounded-[20px] md:rounded-[25px] overflow-hidden border border-[#D7E2EA]/10 bg-black/50 relative group block cursor-pointer"
        >
          <img
            src={project.images.col2 || project.images.col1Top}
            alt={`${project.name} preview`}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            loading="lazy"
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="bg-[#D7E2EA] text-[#0C0C0C] font-bold px-6 py-3 rounded-full uppercase tracking-wider text-sm sm:text-base">
              Open Live Site
            </span>
          </div>
        </a>
      </motion.div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="border-t border-[#D7E2EA]/10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      <div className="max-w-7xl mx-auto">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.num}
            project={project}
            index={i}
            totalCards={projects.length}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
