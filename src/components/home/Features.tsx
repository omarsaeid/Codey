import Icon from '../ui/Icon';
import SplitText from '../ui/SplitText';
import { useLang } from '../../i18n/LanguageContext';
import Reveal from '../ui/Reveal';

export default function Features() {
  const { t } = useLang();
  const f = t.features;
  return (
    <section className="feat">
      <Reveal>
        <svg width="18" viewBox="0 0 18 18" stroke="#0b57d0" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M2 14l4-5M8 8l1-6M12 10l5-3" />
        </svg>
        <SplitText>{f.title1}<br />{f.title2}</SplitText>
        <p>{f.text}</p>
      </Reveal>
      <div className="fl">
        <Reveal className="fi" delay={1}>
          <Icon name="users" /><h3>{f.f1}</h3>
          <p>{f.f1t}</p>
        </Reveal>
        <Reveal className="fi" delay={2}>
          <Icon name="code" /><h3>{f.f2}</h3>
          <p>{f.f2t}</p>
        </Reveal>
        <Reveal className="fi" delay={3}>
          <Icon name="shield" /><h3>{f.f3}</h3>
          <p>{f.f3t}</p>
        </Reveal>
      </div>
    </section>
  );
}
