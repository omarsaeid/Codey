import { useState } from 'react';
import { testimonials } from '../../data/content';
import { useLang } from '../../i18n/LanguageContext';
import Face from '../ui/Face';
import Reveal from '../ui/Reveal';
import Stars from '../ui/Stars';

export default function Testimonials() {
  const { t: tx, tr } = useLang();
  const [start, setStart] = useState(0);
  const n = testimonials.length;
  const visible = [0, 1, 2].map((k) => testimonials[(start + k) % n]);

  return (
    <section className="tes">
      <Reveal className="th">
        <h2>{tx.testimonials.title1}<br />{tx.testimonials.title2}</h2>
        <div className="ar">
          <button aria-label={tx.testimonials.prev} onClick={() => setStart((s) => (s + n - 1) % n)}><span className="flip">←</span></button>
          <button aria-label={tx.testimonials.next} onClick={() => setStart((s) => (s + 1) % n)}><span className="flip">→</span></button>
        </div>
      </Reveal>
      {/* key forces the slide-in animation (.sw) to replay on each change */}
      <div className="tg sw" key={start}>
        {visible.map((t) => (
          <div className="tc" key={t.name.en}>
            <b>“</b>
            <q>{tr(t.quote)}</q>
            <div className="au">
              <Face skin={t.face[0]} hair={t.face[1]} shirt={t.face[2]} />
              <div>{tr(t.name)}<small>{tr(t.role)}</small><Stars value={t.stars} /></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
