import { Link } from 'react-router-dom';
import { useLang } from '../../i18n/LanguageContext';

export default function Hero() {
  const { t } = useLang();
  const h = t.hero;
  return (
    <section className="hero">
      <div>
        <svg className="doodle hero-doodle" style={{ left: '46%', top: -6, width: 80 }} viewBox="0 0 80 50" fill="none" stroke="#0b57d0" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
          <path d="M4 46c10-24 34-30 62-14M30 6l-3 12M44 2l1 14M60 10l-6 9" />
        </svg>
        <h1>
          {h.l1}<br />{h.l2}<br />{h.l3}{h.l3 && ' '}
          <em>
            {h.em}
            <svg viewBox="0 0 200 14" preserveAspectRatio="none" aria-hidden="true">
              <path d="M2 9C50 3 120 2 198 7" stroke="#f2692b" strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
          </em>
        </h1>
        <p>{h.text}</p>
        <Link className="btn" to="/contact">{h.cta}</Link>
      </div>
      <div className="stage">
        <span className="cloud" style={{ top: 40, left: '4%' }}></span>
        <span className="cloud" style={{ top: 90, right: '2%', width: 50, animationDelay: '-3s' }}></span>
        <svg className="hand" viewBox="0 0 300 380" aria-hidden="true">
          <defs>
            <linearGradient id="hg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#e9ecef" />
              <stop offset="1" stopColor="#6b7077" />
            </linearGradient>
          </defs>
          <path d="M30 380C20 280 30 200 70 150c10-30 30-40 50-20l40 60c20-30 50-20 60 10 30-10 50 20 40 60l-20 120z" fill="url(#hg)" />
        </svg>
        <div className="phone">
          <div className="scr">
            <div className="top"><b>{h.phoneTitle}</b><span>{h.phoneUser}</span></div>
            <div className="row">{h.featured} <s>{h.seeAll}</s></div>
            <div className="cards"><div className="pc a">{h.p1}</div><div className="pc b">{h.p2}</div></div>
            <div className="row">{h.myProjects} <s>{h.seeAll}</s></div>
            <div className="sch"><i></i>{h.p3}<u>{h.detail}</u></div>
            <div className="tab"><i></i><i></i><i className="m"></i><i></i><i></i></div>
          </div>
        </div>
      </div>
    </section>
  );
}
