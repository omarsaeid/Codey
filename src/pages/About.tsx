import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StatsBar from '../components/home/StatsBar';
import Face from '../components/ui/Face';
import { skills, technologies, timeline } from '../data/about';
import { useLang } from '../i18n/LanguageContext';

export default function About() {
  const { t, tr } = useLang();
  const a = t.about;
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const id = window.setTimeout(() => setReady(true), 250);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <main className="pg on">
      <section className="ph">
        <div className="crumb"><Link to="/">{t.nav.home}</Link> / {a.crumb}</div>
        <div className="ab">
          <div className="me">
            <div><Face skin="#e0a074" hair="#1a2026" shirt="#0b57d0" /></div>
            <span className="bd bd1">{a.badge1}</span>
            <span className="bd bd2" style={{ animationDelay: '-2s' }}>{a.badge2}</span>
          </div>
          <div>
            <h1>{a.t1}<br />{a.t2}</h1>
            <p style={{ margin: '18px 0 26px', maxWidth: 520 }}>{a.text}</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a className="btn" href="/resume.pdf" download>{a.download}</a>
              <Link className="btn o" to="/contact">{a.talk}</Link>
            </div>
          </div>
        </div>
      </section>
      <StatsBar animated={false} style={{ marginTop: 30 }} />
      <section className="sec" style={{ paddingTop: 80 }}>
        <div className="ab2">
          <div>
            <h2 style={{ marginBottom: 30 }}>{a.experience}</h2>
            <div className="tl">
              {timeline.map((item) => (
                <div className="ti" key={item.period.en}>
                  <small>{tr(item.period)}</small>
                  <h3>{tr(item.role)}</h3>
                  <p style={{ fontWeight: 600, color: 'var(--ink)', fontSize: 12 }}>{tr(item.place)}</p>
                  <p>{tr(item.text)}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 style={{ marginBottom: 30 }}>{a.skills}</h2>
            {skills.map((s) => (
              <div className="sk" key={s.name.en}>
                <div><span>{tr(s.name)}</span><span>{s.level}%</span></div>
                <div className="bar"><i style={{ width: ready ? `${s.level}%` : 0 }}></i></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="sec" style={{ paddingTop: 0 }}>
        <h2 style={{ marginBottom: 26 }}>{a.tech}</h2>
        <div className="tech">{technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
      </section>
    </main>
  );
}
