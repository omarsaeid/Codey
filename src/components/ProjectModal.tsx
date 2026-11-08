import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { Project } from '../data/projects';
import { projectVars } from './ProjectCard';

interface Props { project: Project | null; onClose: () => void }

export default function ProjectModal({ project: p, onClose }: Props) {
  useEffect(() => {
    if (!p) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [p, onClose]);

  return createPortal(
    <AnimatePresence>
      {p && (
        <motion.div
          className="md o"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <div className="mb" role="dialog" aria-modal="true" aria-label={p.title}>
            <button className="x" aria-label="Close" onClick={onClose}>✕</button>
            <div className="th2" style={projectVars(p)}></div>
            <div className="pb">
              <div className="tags">
                {p.tags.map((t) => <span key={t}>{t}</span>)}
                <span>{p.year}</span>
              </div>
              <h2 style={{ fontSize: 26, margin: '10px 0' }}>{p.title}</h2>
              <p>{p.description} I handled the discovery, UX, front-end and delivery end to end.</p>
              <div className="mets">
                {p.metrics.map((m) => (
                  <div key={m.label}><b>{m.value}</b><span>{m.label}</span></div>
                ))}
              </div>
              <a className="btn s" href={p.url} target="_blank" rel="noreferrer">Live Preview ↗</a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
