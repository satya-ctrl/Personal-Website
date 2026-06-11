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
    name: 'Stock Market Prediction',
    tech: ['Python', 'ML', 'React', 'FastAPI'],
    description:
      'AI-powered stock market prediction system using machine learning models to analyze market trends and forecast stock prices with real-time data visualization.',
    href: '#',
    images: {
      col1Top:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      col1Bottom:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      col2:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
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
    <div ref={cardRef} className="h-[85vh]">
      <motion.div
        className="sticky top-24 md:top-32 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 origin-top"
        style={{
          scale,
          top: `${96 + index * 28}px`,
        }}
      >
        {/* Top row */}
        <div className="flex items-start justify-between mb-4 sm:mb-6 md:mb-8 flex-wrap gap-4">
          <div className="flex items-start gap-4 sm:gap-6 md:gap-8">
            <span
              className="hero-heading font-black leading-none"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.num}
            </span>
            <div className="flex flex-col gap-1 pt-2 sm:pt-4 md:pt-6">
              <span className="text-[#D7E2EA]/60 text-sm sm:text-base uppercase tracking-wider">
                {project.category}
              </span>
              <h3
                className="text-[#D7E2EA] font-medium uppercase"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
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
          <div className="pt-2 sm:pt-4 md:pt-6">
            <LiveProjectButton href={project.href} />
          </div>
        </div>

        {/* Bottom row - image grid */}
        <div className="flex gap-3 sm:gap-4 md:gap-6">
          {/* Left column - 40% */}
          <div className="w-[40%] flex flex-col gap-3 sm:gap-4 md:gap-6">
            <img
              src={project.images.col1Top}
              alt={`${project.name} screenshot 1`}
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
              loading="lazy"
            />
            <img
              src={project.images.col1Bottom}
              alt={`${project.name} screenshot 2`}
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
              loading="lazy"
            />
          </div>
          {/* Right column - 60% */}
          <div className="w-[60%]">
            <img
              src={project.images.col2}
              alt={`${project.name} screenshot 3`}
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
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
