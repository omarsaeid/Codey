import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import Face from '../ui/Face';
import Reveal from '../ui/Reveal';

type F = [string, string, string];
const avatars: { s: CSSProperties; f: F; big?: boolean }[] = [
  { s: { width: 112, height: 112, left: 130, top: 100, background: '#c5dcff', zIndex: 2 }, f: ['#e0a074', '#1a2026', '#2a7cf0'] },
  { s: { width: 62, height: 62, left: 80, top: 20, background: '#bfe9d4', animationDelay: '-1s' }, f: ['#e0a074', '#1a2026', '#e9743f'] },
  { s: { width: 46, height: 46, left: 266, top: 44, background: '#d8cdf7', animationDelay: '-2s' }, f: ['#f0b98d', '#3a2a1a', '#7a5be0'] },
  { s: { width: 60, height: 60, left: 314, top: 150, background: '#ffd9c2', animationDelay: '-3s' }, f: ['#e0a074', '#1a2026', '#f2692b'] },
  { s: { width: 76, height: 76, left: 40, top: 210, background: '#ffc6c6', animationDelay: '-1.5s' }, f: ['#e8a98a', '#2a1a1a', '#e0443f'] },
  { s: { width: 36, height: 36, left: 240, top: 236, background: '#fde9a8', animationDelay: '-2.5s' }, f: ['#f0b98d', '#1a2026', '#e0b02a'] },
];

export default function Community() {
  return (
    <section className="com">
      <Reveal>
        <svg width="22" viewBox="0 0 22 18" stroke="#f2692b" strokeWidth="2" strokeLinecap="round" style={{ float: 'right', marginRight: 40 }} aria-hidden="true">
          <path d="M4 14l5-8M12 14l1-10M17 12l4-6" />
        </svg>
        <h2>Community Is Calling, No Need For Stalling.</h2>
        <p>Want more clean code? Join my developer community, meet friends who build together and feel the sensation.</p>
        <Link className="btn s" to="/contact">Join Community</Link>
      </Reveal>
      <Reveal className="orb" delay={1}>
        {avatars.map((a, i) => (
          <div className="av" key={i} style={a.s}><Face skin={a.f[0]} hair={a.f[1]} shirt={a.f[2]} /></div>
        ))}
        <span className="bub" style={{ left: 206, top: 60 }}>Join Us!!</span>
        <span className="bub" style={{ left: 76, top: 130 }}>Welcome!!</span>
        <span className="bub" style={{ left: 276, top: 210 }}>Hola!!</span>
        <span className="soc" style={{ left: 196, top: 2 }}>t</span>
        <span className="soc" style={{ left: 6, top: 130, color: '#e1306c' }}>◎</span>
        <span className="soc" style={{ left: 150, top: 290, color: '#111' }}>♪</span>
      </Reveal>
    </section>
  );
}
