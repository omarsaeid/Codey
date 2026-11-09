import { AnimatePresence, motion } from 'framer-motion';
import { useState, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { createWhatsAppUrl, isPromoActive, promo } from '../config/site';
import { contactBudgets, contactInfo, contactServices } from '../data/content';
import { useLang } from '../i18n/LanguageContext';
import { fill } from '../i18n/ui';

export default function Contact() {
  const { t, tr } = useLang();
  const c = t.contact;
  const [params] = useSearchParams();
  const withPromo = params.get('promo') === '1' && isPromoActive();

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [chosen, setChosen] = useState<Set<string>>(new Set([contactServices[0].id]));
  const [budget, setBudget] = useState(contactBudgets[1]);
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const toggle = (id: string) =>
    setChosen((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  const chosenLabels = contactServices.filter((s) => chosen.has(s.id)).map((s) => tr(s.label));
  const buildWhatsAppMessage = () => [
    c.msgHello,
    ...(withPromo ? [fill(c.msgPromo, { percent: promo.percent })] : []),
    `${c.msgName}: ${form.name}`,
    `${c.msgEmail}: ${form.email}`,
    `${c.msgServices}: ${chosenLabels.length ? chosenLabels.join('، ') : c.msgNone}`,
    `${c.msgBudget}: ${budget}`,
    `${c.msgDetails}: ${form.message}`,
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
        crumb={c.crumb}
        title={<>{c.t1}<br /><span style={{ color: 'var(--blue)' }}>{c.em}</span> {c.t2}</>}
        text={c.text}
      />
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="ct">
          <div>
            <div className="av2">{c.available}</div>
            {contactInfo.map((info) => {
              const inner = (
                <>
                  <div className="ic">{info.icon}</div>
                  <div><small>{tr(info.label)}</small><b dir="auto">{tr(info.value)}</b></div>
                </>
              );
              return info.href ? (
                <a key={info.label.en} className="ci" href={info.href} style={{ color: 'inherit', textDecoration: 'none' }}>{inner}</a>
              ) : (
                <div key={info.label.en} className="ci">{inner}</div>
              );
            })}
          </div>
          <div className="fm">
            {withPromo && (
              <div className="promo-applied">🎁 {c.promoApplied}: -{promo.percent}%</div>
            )}
            <AnimatePresence mode="wait">
              {!sent ? (
                <motion.form key="form" onSubmit={submit} autoComplete="off" exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                  <div className="two" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div className="fld"><input id="fn" placeholder=" " required value={form.name} onChange={set('name')} /><label htmlFor="fn">{c.name}</label></div>
                    <div className="fld"><input id="fe" type="email" placeholder=" " required value={form.email} onChange={set('email')} /><label htmlFor="fe">{c.email}</label></div>
                  </div>
                  <p className="lb">{c.interested}</p>
                  <div className="chips">
                    {contactServices.map((s) => (
                      <button key={s.id} type="button" className={`chip${chosen.has(s.id) ? ' on' : ''}`} onClick={() => toggle(s.id)}>{tr(s.label)}</button>
                    ))}
                  </div>
                  <p className="lb">{c.budget}</p>
                  <div className="chips">
                    {contactBudgets.map((b) => (
                      <button key={b} type="button" dir="ltr" className={`chip${budget === b ? ' on' : ''}`} onClick={() => setBudget(b)}>{b}</button>
                    ))}
                  </div>
                  <div className="fld"><textarea id="fm" rows={4} placeholder=" " required value={form.message} onChange={set('message')} /><label htmlFor="fm">{c.message}</label></div>
                  <button className="btn" type="submit">{c.submit}</button>
                </motion.form>
              ) : (
                <motion.div key="ok" className="ok o" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <svg viewBox="0 0 60 60" width="70" aria-hidden="true">
                    <circle cx="30" cy="30" r="28" fill="none" stroke="var(--blue)" strokeWidth="3" />
                    <path d="M18 31l9 9 16-18" fill="none" stroke="var(--or)" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                  <h2 style={{ fontSize: 26, margin: '16px 0 8px' }}>{c.readyTitle}</h2>
                  <p>{c.readyText}</p>
                  <a className="btn s" style={{ marginTop: 8 }} href={createWhatsAppUrl(buildWhatsAppMessage())} target="_blank" rel="noopener noreferrer">{c.open}</a>
                  <button className="btn s o" style={{ marginTop: 18 }} onClick={reset}>{c.again}</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </main>
  );
}
