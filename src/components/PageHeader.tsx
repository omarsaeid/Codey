import SplitText from './ui/SplitText';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';

interface Props { crumb: string; title: ReactNode; text: string }

export default function PageHeader({ crumb, title, text }: Props) {
  const { t } = useLang();
  return (
    <section className="ph">
      <div className="crumb"><Link to="/">{t.nav.home}</Link> / {crumb}</div>
      <SplitText as="h1" mode="intro">{title}</SplitText>
      <p>{text}</p>
    </section>
  );
}
