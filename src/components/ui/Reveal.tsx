import { motion, type HTMLMotionProps } from 'framer-motion';
import type { CSSProperties, ReactNode } from 'react';

const delays = [0, 0.12, 0.24, 0.36];
const tags = { div: motion.div, h2: motion.h2, section: motion.section } as const;

interface RevealProps {
  children?: ReactNode;
  as?: keyof typeof tags;
  /** 0–3, maps to the prototype's .d1/.d2/.d3 stagger delays */
  delay?: 0 | 1 | 2 | 3;
  className?: string;
  style?: CSSProperties;
  onEnter?: () => void;
}

/** Scroll-reveal: fades up 34px over .9s with the prototype's easing (replaces the old .rv + IntersectionObserver). */
export default function Reveal({ children, as = 'div', delay = 0, className, style, onEnter }: RevealProps) {
  const Tag = tags[as] as React.ComponentType<HTMLMotionProps<'div'>>;
  return (
    <Tag
      className={className}
      style={style}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.9, delay: delays[delay], ease: [0.16, 1, 0.3, 1] }}
      onViewportEnter={onEnter}
    >
      {children}
    </Tag>
  );
}
