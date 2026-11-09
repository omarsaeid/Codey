import type { CSSProperties } from 'react';
import type { Project } from '../data/projects';
import { useLang } from '../i18n/LanguageContext';

export const projectVars = (p: Project) => ({ '--g': p.gradient, '--a': p.accent }) as CSSProperties;

interface Props { project: Project; index: number; onOpen: (p: Project) => void }

export default function ProjectCard({ project: p, index, onOpen }: Props) {
  const { t, tr } = useLang();
  const title = tr(p.title);
  return (
    <div
      className="prj"
      style={{ animationDelay: `${index * 70}ms` }}
      role="button"
      tabIndex={0}
      aria-label={`${t.work.openCase} ${title}`}
      aria-haspopup="dialog"
      onClick={() => onOpen(p)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpen(p);
        }
      }}
    >
      <div className="th2" style={projectVars(p)}></div>
      <div className="pb">
        <div className="tags">{p.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <h3 style={{ marginTop: 10 }}>{title}</h3>
        <p>{tr(p.description)}</p>
        <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--blue)' }}>{t.work.caseStudy}</span>
      </div>
    </div>
  );
}
