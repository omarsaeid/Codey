import { Link } from 'react-router-dom';
import { projects, type Project } from '../../data/projects';
import ProjectCard from '../ProjectCard';
import Reveal from '../ui/Reveal';

export default function SelectedWork({ onOpen }: { onOpen: (p: Project) => void }) {
  return (
    <Reveal as="section" className="sec" style={{ paddingTop: 90, paddingBottom: 0 }}>
      <div className="th">
        <h2>Selected Work<br />I&apos;m Proud Of.</h2>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <Link className="btn s o" to="/services">All Services</Link>
          <Link className="btn s" to="/portfolio">View All Projects →</Link>
        </div>
      </div>
      <div className="grid3" style={{ marginTop: 40 }}>
        {projects.slice(0, 3).map((p, i) => <ProjectCard key={p.title} project={p} index={i} onOpen={onOpen} />)}
      </div>
    </Reveal>
  );
}
