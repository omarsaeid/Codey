import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

export default function NotFound() {
  return (
    <main className="pg on">
      <PageHeader crumb="404" title={<>Page Not <span style={{ color: 'var(--or)' }}>Found.</span></>} text="The page you are looking for does not exist or has moved." />
      <section className="sec" style={{ paddingTop: 0 }}><Link className="btn" to="/">Back to Home</Link></section>
    </main>
  );
}
