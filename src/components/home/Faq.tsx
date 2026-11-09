import SplitText from '../ui/SplitText';
import { useState, type FormEvent } from 'react';
import { faqs } from '../../data/content';
import Reveal from '../ui/Reveal';
import { contactEmail } from '../../config/site';
import { useLang } from '../../i18n/LanguageContext';

export default function Faq() {
  const { t, tr } = useLang();
  const [openIdx, setOpenIdx] = useState<Set<number>>(new Set());
  const [email, setEmail] = useState('');

  const toggle = (i: number) =>
    setOpenIdx((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(t.faq.subject);
    const body = encodeURIComponent(`${t.faq.body} ${email}`);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="faq">
      <Reveal>
        <SplitText>{t.faq.title1}<br />{t.faq.title2}</SplitText>
        <p>{t.faq.text}</p>
        <form className="mail" onSubmit={submit}>
          <input type="email" required placeholder={t.faq.placeholder} value={email} onChange={(e) => setEmail(e.target.value)} aria-label={t.faq.placeholder} />
          <button type="submit" className="btn s" style={{ padding: '14px 22px' }}>
            {t.faq.button}
          </button>
        </form>
      </Reveal>
      <Reveal delay={1}>
        <p style={{ margin: '0 0 14px', color: 'var(--ink)', fontSize: 13 }}>{t.faq.answered}</p>
        {faqs.map((f, i) => (
          <div key={f.q.en}>
            <div className="q" role="button" tabIndex={0} aria-expanded={openIdx.has(i)} onClick={() => toggle(i)} onKeyDown={(e) => e.key === 'Enter' && toggle(i)}>
              {tr(f.q)}<span className="flip">→</span>
            </div>
            <div className={`qa${openIdx.has(i) ? ' o' : ''}`}>{tr(f.a)}</div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
