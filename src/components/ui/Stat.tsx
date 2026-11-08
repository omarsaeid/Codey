import { useState } from 'react';
import { useCountUp } from '../../hooks/useCountUp';
import Reveal from './Reveal';

interface StatProps { text: string; n?: number; suffix?: string; label?: string; delay?: 0 | 1 | 2 | 3; animated?: boolean }

/** One cell of the blue stats bar. Numbers count up when scrolled into view (home); static on About. */
export default function Stat({ text, n = 0, suffix = '', label, delay = 0, animated = true }: StatProps) {
  const { text: counted, start } = useCountUp(n, suffix);
  const [entered, setEntered] = useState(false);
  const value = label ? (entered || !animated ? label : '0') : animated ? counted : `${n}${suffix}`;
  const body = (
    <>
      <b>{value}</b>
      <span>{text}</span>
    </>
  );
  if (!animated) return <div className="st">{body}</div>;
  return (
    <Reveal className="st" delay={delay} onEnter={() => (label ? setEntered(true) : start())}>
      {body}
    </Reveal>
  );
}
