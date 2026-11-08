import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props { crumb: string; title: ReactNode; text: string }

export default function PageHeader({ crumb, title, text }: Props) {
  return (
    <section className="ph">
      <div className="crumb"><Link to="/">Home</Link> / {crumb}</div>
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  );
}
