import { AnimatePresence, motion } from 'framer-motion';
import { useState, type FormEvent } from 'react';
import PageHeader from '../components/PageHeader';
import { createWhatsAppUrl } from '../config/site';
import { contactBudgets, contactInfo, contactServices } from '../data/content';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [chosen, setChosen] = useState<Set<string>>(new Set([contactServices[0]]));
  const [budget, setBudget] = useState(contactBudgets[1]);
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const toggle = (s: string) =>
    setChosen((prev) => {
      const next = new Set(prev);
      next.has(s) ? next.delete(s) : next.add(s);
      return next;
    });
  const buildWhatsAppMessage = () => [
    'Hello Omar, I would like to discuss a project.',
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    `Services: ${chosen.size ? [...chosen].join(', ') : 'Not specified'}`,
    `Budget: ${budget}`,
    `Project details: ${form.message}`,
  ].join('\n');

  const submit = (e: FormEvent) => {
    e.preventDefault();
    window.open(createWhatsAppUrl(buildWhatsAppMessage()), '_blank', 'noopener,noreferrer');
    setSent(true);
  };
  const reset = () => {
    setForm({ name: '', email: '', message: '' });
    setSent(false);
  };

  return (
    <main className="pg on">
      <PageHeader
        crumb="Contact"
        title={<>Let&apos;s Build Something<br /><span style={{ color: 'var(--blue)' }}>Great</span> Together.</>}
        text="Share a few details about your project and I'll reply within one business day."
      />
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="ct">
          <div>
            <div className="av2">Available for new projects</div>
            {contactInfo.map((c) => {
              const inner = (
                <>
                  <div className="ic">{c.icon}</div>
                  <div><small>{c.label}</small><b>{c.value}</b></div>
                </>
              );
              return c.href ? (
                <a key={c.label} className="ci" href={c.href} style={{ color: 'inherit', textDecoration: 'none' }}>{inner}</a>
              ) : (
                <div key={c.label} className="ci">{inner}</div>
              );
            })}
          </div>
          <div className="fm">
            <AnimatePresence mode="wait">
              {!sent ? (
                <motion.form key="form" onSubmit={submit} autoComplete="off" exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                  <div className="two" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div className="fld"><input id="fn" placeholder=" " required value={form.name} onChange={set('name')} /><label htmlFor="fn">Your Name</label></div>
                    <div className="fld"><input id="fe" type="email" placeholder=" " required value={form.email} onChange={set('email')} /><label htmlFor="fe">Email Address</label></div>
                  </div>
                  <p className="lb">I&apos;m interested in</p>
                  <div className="chips">
                    {contactServices.map((s) => (
                      <button key={s} type="button" className={`chip${chosen.has(s) ? ' on' : ''}`} onClick={() => toggle(s)}>{s}</button>
                    ))}
                  </div>
                  <p className="lb">Budget</p>
                  <div className="chips">
                    {contactBudgets.map((b) => (
                      <button key={b} type="button" className={`chip${budget === b ? ' on' : ''}`} onClick={() => setBudget(b)}>{b}</button>
                    ))}
                  </div>
                  <div className="fld"><textarea id="fm" rows={4} placeholder=" " required value={form.message} onChange={set('message')} /><label htmlFor="fm">Tell me about your project</label></div>
                  <button className="btn" type="submit">Continue to WhatsApp ➜</button>
                </motion.form>
              ) : (
                <motion.div key="ok" className="ok o" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <svg viewBox="0 0 60 60" width="70" aria-hidden="true">
                    <circle cx="30" cy="30" r="28" fill="none" stroke="var(--blue)" strokeWidth="3" />
                    <path d="M18 31l9 9 16-18" fill="none" stroke="var(--or)" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                  <h2 style={{ fontSize: 26, margin: '16px 0 8px' }}>WhatsApp Message Ready</h2>
                  <p>WhatsApp should open in a new tab with your message ready. Review it there and press Send to complete your request.</p>
                  <a className="btn s" style={{ marginTop: 8 }} href={createWhatsAppUrl(buildWhatsAppMessage())} target="_blank" rel="noopener noreferrer">Open WhatsApp</a>
                  <button className="btn s o" style={{ marginTop: 18 }} onClick={reset}>Send another</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </main>
  );
}
