import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { projectFilters, projects, type Project } from '../data/projects';

export default function Portfolio() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]['id']>('all');
  const [active, setActive] = useState<Project | null>(null);
  const list = projects.filter((p) => filter === 'all' || p.category === filter);

  return (
    <main className="pg on">
      <PageHeader
        crumb="Portfolio"
        title={<>Work That Speaks<br />For <span style={{ color: 'var(--or)' }}>Itself.</span></>}
        text="A selection of products I designed, built and launched for startups and companies."
      />
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="chips">
          {projectFilters.map((f) => (
            <button key={f.id} className={`chip${filter === f.id ? ' on' : ''}`} onClick={() => setFilter(f.id)}>{f.label}</button>
          ))}
        </div>
        <div className="grid3" key={filter}>
          {list.map((p, i) => <ProjectCard key={p.title} project={p} index={i} onOpen={setActive} />)}
        </div>
      </section>
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </main>
  );
}
