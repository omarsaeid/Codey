import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StatsBar from '../components/home/StatsBar';
import Face from '../components/ui/Face';
import { skills, technologies, timeline } from '../data/about';

export default function About() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 250);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <main className="pg on">
      <section className="ph">
        <div className="crumb"><Link to="/">Home</Link> / About</div>
        <div className="ab">
          <div className="me">
            <div><Face skin="#e0a074" hair="#1a2026" shirt="#0b57d0" /></div>
            <span className="bd" style={{ left: -18, top: 36 }}>⚡ 10+ yrs coding</span>
            <span className="bd" style={{ right: -14, bottom: 60, animationDelay: '-2s' }}>☕ Powered by coffee</span>
          </div>
          <div>
            <h1>Hi, I&apos;m Omar —<br />a Full-Stack Developer.</h1>
            <p style={{ margin: '18px 0 26px', maxWidth: 520 }}>
              I&apos;m a developer based in Cairo, Egypt, helping startups and growing companies turn ideas into fast, reliable and beautiful products. I care about clean code, clear communication and shipping on time.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a className="btn" href="/resume.pdf" download>Download Resume</a>
              <Link className="btn o" to="/contact">Let&apos;s Talk</Link>
            </div>
          </div>
        </div>
      </section>
      <StatsBar animated={false} style={{ marginTop: 30 }} />
      <section className="sec" style={{ paddingTop: 80 }}>
        <div className="ab2">
          <div>
            <h2 style={{ marginBottom: 30 }}>Experience</h2>
            <div className="tl">
              {timeline.map((t) => (
                <div className="ti" key={t.period}>
                  <small>{t.period}</small>
                  <h3>{t.role}</h3>
                  <p style={{ fontWeight: 600, color: 'var(--ink)', fontSize: 12 }}>{t.place}</p>
                  <p>{t.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 style={{ marginBottom: 30 }}>Skills</h2>
            {skills.map((s) => (
              <div className="sk" key={s.name}>
                <div><span>{s.name}</span><span>{s.level}%</span></div>
                <div className="bar"><i style={{ width: ready ? `${s.level}%` : 0 }}></i></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="sec" style={{ paddingTop: 0 }}>
        <h2 style={{ marginBottom: 26 }}>Technologies I Use</h2>
        <div className="tech">{technologies.map((t) => <span key={t}>{t}</span>)}</div>
      </section>
    </main>
  );
}
