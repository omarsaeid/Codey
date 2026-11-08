import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero">
      <div>
        <svg className="doodle" style={{ left: '46%', top: -6, width: 80 }} viewBox="0 0 80 50" fill="none" stroke="#0b57d0" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
          <path d="M4 46c10-24 34-30 62-14M30 6l-3 12M44 2l1 14M60 10l-6 9" />
        </svg>
        <h1>
          Code In The<br />Cloud But In<br />A{' '}
          <em>
            Good Way!
            <svg viewBox="0 0 200 14" preserveAspectRatio="none" aria-hidden="true">
              <path d="M2 9C50 3 120 2 198 7" stroke="#f2692b" strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
          </em>
        </h1>
        <p>Now you can ship products anywhere and anytime with a developer who cares, and of course it&apos;s built to last.</p>
        <Link className="btn" to="/contact">Get Started</Link>
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
            <div className="top"><b>Create Your Own Code Story.</b><span>● Hassan</span></div>
            <div className="row">Recommended <s>See All ›</s></div>
            <div className="cards"><div className="pc a">Mount Denali</div><div className="pc b">Mount Lore</div></div>
            <div className="row">My Projects <s>See All ›</s></div>
            <div className="sch"><i></i>Mount Elbrus<u>Detail</u></div>
            <div className="tab"><i></i><i></i><i className="m"></i><i></i><i></i></div>
          </div>
        </div>
      </div>
    </section>
  );
}
