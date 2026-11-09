import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { Project } from '../data/projects';
import { useLang } from '../i18n/LanguageContext';
import { projectVars } from './ProjectCard';

interface Props { project: Project | null; onClose: () => void }

export default function ProjectModal({ project: p, onClose }: Props) {
  const { t, tr } = useLang();
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
          <div className="mb" role="dialog" aria-modal="true" aria-label={tr(p.title)}>
            <button className="x" aria-label={t.modal.close} onClick={onClose}>✕</button>
            <div className="th2" style={projectVars(p)}></div>
            <div className="pb">
              <div className="tags">
                {p.tags.map((tag) => <span key={tag}>{tag}</span>)}
                <span>{p.year}</span>
              </div>
              <h2 style={{ fontSize: 26, margin: '10px 0' }}>{tr(p.title)}</h2>
              <p>{tr(p.description)} {t.modal.handled}</p>
              <div className="mets">
                {p.metrics.map((m) => (
                  <div key={m.label.en}><b>{m.value}</b><span>{tr(m.label)}</span></div>
                ))}
              </div>
              {p.url && !p.url.includes('example.com') ? (
                <a className="btn s" href={p.url} target="_blank" rel="noopener noreferrer">{t.modal.live}</a>
              ) : (
                <p className="preview-note">{t.modal.noLive}</p>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
