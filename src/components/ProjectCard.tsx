import type { CSSProperties } from 'react';
import type { Project } from '../data/projects';

export const projectVars = (p: Project) => ({ '--g': p.gradient, '--a': p.accent }) as CSSProperties;

interface Props { project: Project; index: number; onOpen: (p: Project) => void }

export default function ProjectCard({ project: p, index, onOpen }: Props) {
  return (
    <div
      className="prj"
      style={{ animationDelay: `${index * 70}ms` }}
      role="button"
      tabIndex={0}
      onClick={() => onOpen(p)}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpen(p)}
    >
      <div className="th2" style={projectVars(p)}></div>
      <div className="pb">
        <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
        <h3 style={{ marginTop: 10 }}>{p.title}</h3>
        <p>{p.description}</p>
        <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--blue)' }}>View Case Study →</span>
      </div>
    </div>
  );
}
