import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/ui/Reveal';
import { processSteps, services } from '../data/services';
import { useLang } from '../i18n/LanguageContext';

export default function Services() {
  const { t, tr } = useLang();
  const s = t.services;
  return (
    <main className="pg on">
      <PageHeader
        crumb={s.crumb}
        title={<>{s.t1}<br />{s.t2} <span style={{ color: 'var(--blue)' }}>{s.em}</span> {s.t3}</>}
        text={s.text}
      />
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="grid3">
          {services.map((sv, i) => (
            <Reveal key={sv.id} className="sv" delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="ic">{sv.icon}</div>
              <h3>{tr(sv.title)}</h3>
              <p style={{ fontSize: 13 }}>{tr(sv.description)}</p>
              <ul>{sv.points.map((x) => <li key={x.en}>{tr(x)}</li>)}</ul>
              <div className="pr">
                <span>{s.from}<br /><b>{tr(sv.price)}</b></span>
                <Link className="btn s o" to="/contact">{s.quote}</Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="sec" style={{ paddingTop: 0 }}>
        <Reveal as="h2" style={{ marginBottom: 34 }}>{s.process}</Reveal>
        <div className="proc">
          {processSteps.map((p) => (
            <Reveal className="pc2" key={p.title.en}><h3>{tr(p.title)}</h3><p>{tr(p.text)}</p></Reveal>
          ))}
        </div>
      </section>
      <section className="sec" style={{ paddingTop: 0 }}>
        <Reveal className="band">
          <div>
            <h2>{s.bandTitle}</h2>
            <p style={{ color: '#fff', opacity: 0.85, marginTop: 8 }}>{s.bandText}</p>
          </div>
          <Link className="btn" to="/contact">{s.bandCta}</Link>
        </Reveal>
      </section>
    </main>
  );
}
