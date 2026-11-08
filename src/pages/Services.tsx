import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/ui/Reveal';
import { processSteps, services } from '../data/services';

export default function Services() {
  return (
    <main className="pg on">
      <PageHeader
        crumb="Services"
        title={<>Services That Turn<br />Ideas Into <span style={{ color: 'var(--blue)' }}>Shipped</span> Products.</>}
        text="From a first prototype to a production system, here is how I can help your team or business move faster."
      />
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="grid3">
          {services.map((s, i) => (
            <Reveal key={s.title} className="sv" delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="ic">{s.icon}</div>
              <h3>{s.title}</h3>
              <p style={{ fontSize: 13 }}>{s.description}</p>
              <ul>{s.points.map((x) => <li key={x}>{x}</li>)}</ul>
              <div className="pr">
                <span>Starting from<br /><b>{s.price}</b></span>
                <Link className="btn s o" to="/contact">Get a Quote</Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="sec" style={{ paddingTop: 0 }}>
        <Reveal as="h2" style={{ marginBottom: 34 }}>How We&apos;ll Work Together</Reveal>
        <div className="proc">
          {processSteps.map((p) => (
            <Reveal className="pc2" key={p.title}><h3>{p.title}</h3><p>{p.text}</p></Reveal>
          ))}
        </div>
      </section>
      <section className="sec" style={{ paddingTop: 0 }}>
        <Reveal className="band">
          <div>
            <h2>Have a project in mind?</h2>
            <p style={{ color: '#fff', opacity: 0.85, marginTop: 8 }}>Tell me about it and get a clear plan within 48 hours.</p>
          </div>
          <Link className="btn" to="/contact">Start a Project</Link>
        </Reveal>
      </section>
    </main>
  );
}
