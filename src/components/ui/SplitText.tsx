import { motion, useReducedMotion } from 'framer-motion';
import {
  Children, cloneElement, isValidElement, useEffect, useRef, useState, type CSSProperties, type ReactElement, type ReactNode,
} from 'react';

/**
 * Word-by-word headline motion.
 * - mode "scroll" (default): words flip up in 3D when the heading enters, flip away near the top,
 *   and reverse when scrolling back up (like tiqnia.com). Each move plays fully — never stuck half-way.
 * - mode "intro": CSS keyframe on page load (page H1s), 35ms stagger.
 * Strings are split into words; <br/> and wrapper elements (em, span) are kept.
 */
type Tag = 'h1' | 'h2' | 'h3';
interface Props {
  as?: Tag;
  mode?: 'scroll' | 'intro';
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const WORD = {
  below: (i: number) => ({ y: '110%', rotateX: -80, opacity: 0, transition: { duration: 0.5, ease: [0.5, 0, 0.75, 0], delay: i * 0.03 } }),
  in: (i: number) => ({ y: '0%', rotateX: 0, opacity: 1, transition: { duration: 0.9, ease: EASE, delay: i * 0.06 } }),
  above: (i: number) => ({ y: '-70%', rotateX: 55, opacity: 0, transition: { duration: 0.6, ease: [0.5, 0, 0.75, 0], delay: i * 0.03 } }),
};

export default function SplitText({ as = 'h2', mode = 'scroll', className, style, children }: Props) {
  const ref = useRef<HTMLHeadingElement>(null);
  const reduce = useReducedMotion();
  // below → in (scrolling down) · in → above (flips away near the top) · back again when scrolling up
  const [pos, setPos] = useState<'below' | 'in' | 'above'>('below');
  useEffect(() => {
    const el = ref.current;
    if (!el || mode !== 'scroll') return;
    const io = new IntersectionObserver(([e]) => {
      setPos(e.isIntersecting ? 'in' : e.boundingClientRect.top > 0 ? 'below' : 'above');
    }, { rootMargin: '-12% 0px -10% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, [mode]);
  let idx = 0;

  const walk = (node: ReactNode): ReactNode =>
    Children.map(node, (c) => {
      if (typeof c === 'string' || typeof c === 'number') {
        return String(c).split(/(\s+)/).map((p, k) => {
          if (!p.trim()) return p;
          const i = idx++;
          if (mode === 'intro') {
            return <span key={k} className="w"><span className="wi" style={{ animationDelay: `${i * 0.035}s` }}>{p}</span></span>;
          }
          return (
            <span key={k} className="w">
              <motion.span
                style={{ transformOrigin: '50% 100% -40px' }}
                variants={WORD}
                initial="below"
                animate={pos}
                custom={i}
              >
                {p}
              </motion.span>
            </span>
          );
        });
      }
      if (isValidElement(c) && c.type !== 'br' && c.type !== 'svg') {
        const el = c as ReactElement<{ children?: ReactNode }>;
        return cloneElement(el, undefined, walk(el.props.children));
      }
      return c;
    });

  const Tag = as;
  return (
    <Tag ref={ref} className={['split', className].filter(Boolean).join(' ')} style={style}>
      {reduce ? children : walk(children)}
    </Tag>
  );
}
