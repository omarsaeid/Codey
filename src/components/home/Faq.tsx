import { useState, type FormEvent } from 'react';
import { faqs } from '../../data/content';
import Reveal from '../ui/Reveal';
import { contactEmail } from '../../config/site';

export default function Faq() {
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
    const subject = encodeURIComponent('Question from the Codey portfolio');
    const body = encodeURIComponent(`Please contact me at ${email}.`);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="faq">
      <Reveal>
        <h2>Got A Question<br />For Me?</h2>
        <p>If there are questions you want to ask, we will answer all your questions.</p>
        <form className="mail" onSubmit={submit}>
          <input type="email" required placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Email" />
          <button type="submit" className="btn s" style={{ borderRadius: '0 99px 99px 0', padding: '14px 22px' }}>
            Email Me
          </button>
        </form>
      </Reveal>
      <Reveal delay={1}>
        <p style={{ margin: '0 0 14px', color: 'var(--ink)', fontSize: 13 }}>Maybe your question has been answered, check this out.</p>
        {faqs.map((f, i) => (
          <div key={f.q}>
            <div className="q" role="button" tabIndex={0} aria-expanded={openIdx.has(i)} onClick={() => toggle(i)} onKeyDown={(e) => e.key === 'Enter' && toggle(i)}>
              {f.q}<span>→</span>
            </div>
            <div className={`qa${openIdx.has(i) ? ' o' : ''}`}>{f.a}</div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
