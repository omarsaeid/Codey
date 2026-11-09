import { Link } from 'react-router-dom';
import { projects, type Project } from '../../data/projects';
import { useLang } from '../../i18n/LanguageContext';
import ProjectCard from '../ProjectCard';
import Reveal from '../ui/Reveal';

export default function SelectedWork({ onOpen }: { onOpen: (p: Project) => void }) {
  const { t } = useLang();
  return (
    <Reveal as="section" className="sec" style={{ paddingTop: 90, paddingBottom: 0 }}>
      <div className="th">
        <h2>{t.work.title1}<br />{t.work.title2}</h2>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <Link className="btn s o" to="/services">{t.work.allServices}</Link>
          <Link className="btn s" to="/portfolio">{t.work.allProjects}</Link>
        </div>
      </div>
      <div className="grid3" style={{ marginTop: 40 }}>
        {projects.slice(0, 3).map((p, i) => <ProjectCard key={p.id} project={p} index={i} onOpen={onOpen} />)}
      </div>
    </Reveal>
  );
}
