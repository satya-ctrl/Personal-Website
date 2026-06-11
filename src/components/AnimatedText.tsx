import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const CharSpan = ({
  char,
  index,
  total,
  scrollYProgress,
}: {
  char: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) => {
  const start = index / total;
  const end = Math.min((index + 1) / total, 1);
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

  const display = char;

  return (
    <span className="relative inline">
      <span className="invisible">{display}</span>
      <motion.span
        className="absolute left-0 top-0"
        style={{ opacity }}
      >
        {display}
      </motion.span>
    </span>
  );
};

const AnimatedText = ({ text, className = '', style }: AnimatedTextProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = text.split('');

  return (
    <p ref={ref} className={`${className} whitespace-pre-wrap`} style={style}>
      {chars.map((char, i) => (
        <CharSpan
          key={i}
          char={char}
          index={i}
          total={chars.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </p>
  );
};

export default AnimatedText;
