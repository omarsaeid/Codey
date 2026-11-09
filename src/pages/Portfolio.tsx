import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { projectFilters, projects, type Project } from '../data/projects';
import { useLang } from '../i18n/LanguageContext';

export default function Portfolio() {
  const { t, tr } = useLang();
  const [filter, setFilter] = useState<(typeof projectFilters)[number]['id']>('all');
  const [active, setActive] = useState<Project | null>(null);
  const list = projects.filter((p) => filter === 'all' || p.category === filter);
  const pf = t.portfolio;

  return (
    <main className="pg on">
      <PageHeader
        crumb={pf.crumb}
        title={<>{pf.t1}<br />{pf.t2} <span style={{ color: 'var(--or)' }}>{pf.em}</span></>}
        text={pf.text}
      />
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="chips">
          {projectFilters.map((f) => (
            <button key={f.id} className={`chip${filter === f.id ? ' on' : ''}`} onClick={() => setFilter(f.id)}>{tr(f.label)}</button>
          ))}
        </div>
        <div className="grid3" key={filter}>
          {list.map((p, i) => <ProjectCard key={p.id} project={p} index={i} onOpen={setActive} />)}
        </div>
      </section>
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </main>
  );
}
