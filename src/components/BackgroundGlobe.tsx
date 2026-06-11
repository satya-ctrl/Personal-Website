import { motion, useScroll, useTransform } from 'framer-motion';

const BackgroundGlobe = () => {
  const { scrollYProgress } = useScroll();
  
  // As the user scrolls from top (0) to bottom (1) of the page,
  // the globe moves from top of the screen (-30%) to the bottom of the screen (70vh)
  const y = useTransform(scrollYProgress, [0, 1], ['-30vh', '70vh']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 0.3, 0.3, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.7, 0.9]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 flex justify-center">
      <motion.div
        style={{ y, opacity, scale }}
        className="w-[320px] sm:w-[420px] md:w-[520px] lg:w-[600px] h-fit relative"
      >
        <img
          src="/hero-sphere.png"
          alt="AI Neural Network Visualization"
          className="w-full h-auto animate-pulse-slow"
          style={{
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 72%)',
            maskImage:
              'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 72%)',
            filter: 'drop-shadow(0 0 40px rgba(118, 33, 176, 0.3))',
            mixBlendMode: 'screen',
          }}
        />
      </motion.div>
    </div>
  );
};

export default BackgroundGlobe;
