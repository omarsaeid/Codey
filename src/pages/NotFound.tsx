import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { useLang } from '../i18n/LanguageContext';

export default function NotFound() {
  const { t } = useLang();
  const n = t.notFound;
  return (
    <main className="pg on">
      <PageHeader crumb="404" title={<>{n.title} <span style={{ color: 'var(--or)' }}>{n.em}</span></>} text={n.text} />
      <section className="sec" style={{ paddingTop: 0 }}><Link className="btn" to="/">{n.back}</Link></section>
    </main>
  );
}
