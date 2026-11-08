import type { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import Reveal from '../ui/Reveal';

const pins = [
  { left: '11%', top: 128, size: 30, g: 'linear-gradient(#3a8a6a,#1d4e3c)', d: 0 as const },
  { left: '42%', top: 62, size: 36, g: 'linear-gradient(#4aa9b8,#c0452e)', d: 1 as const, anim: '-1s' },
  { left: '24%', top: 166, size: 68, g: 'linear-gradient(#5cc0d8,#2d9a74 55%,#f4a950)', d: 0 as const, anim: '-2s' },
  { left: '8%', top: 300, size: 30, g: 'linear-gradient(#4b6e4c,#27412a)', d: 2 as const, anim: '-.5s' },
  { left: '38%', top: 330, size: 34, g: 'linear-gradient(#7aa4c4,#5a7a52)', d: 3 as const, anim: '-3s' },
];

export default function WorldMap() {
  const navigate = useNavigate();
  const toContact = () => navigate('/contact');
  return (
    <section className="map">
      <div className="world"></div>
      {pins.map((p) => (
        <Reveal key={p.left + p.top} className="mp" delay={p.d} style={{ left: p.left, top: p.top, animationDelay: p.anim }}>
          <i style={{ width: p.size, height: p.size, ['--g' as string]: p.g } as CSSProperties}></i>
        </Reveal>
      ))}
      <svg className="doodle" style={{ right: 18, top: 20, width: 80 }} viewBox="0 0 60 120" fill="none" stroke="#9ab4e8" strokeWidth="1.5" aria-hidden="true">
        <path d="M30 2c30 20 20 40-6 50S4 80 36 118" />
      </svg>
      <Reveal className="mapt">
        <h2>Code, Coffee, Deadlines, What Else Do You Need?</h2>
        <p>Explore my services across more than 20 technologies, find the stack that fits and book a call now.</p>
        <div className="search">
          <div className="f" onClick={toContact}><em>⌖</em><div><b>Service ▾</b>Choose Service</div></div>
          <div className="f" onClick={toContact}><em>▦</em><div><b>Date ▾</b>Add Date</div></div>
          <button className="go" aria-label="Search" onClick={toContact}>⌕</button>
        </div>
      </Reveal>
    </section>
  );
}
