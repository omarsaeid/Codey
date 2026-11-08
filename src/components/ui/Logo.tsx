import { Link } from 'react-router-dom';

export default function Logo({ color = '#0b57d0' }: { color?: string }) {
  return (
    <Link to="/" className="logo" aria-label="Codey. home">
      <svg viewBox="0 0 28 26" aria-hidden="true">
        <path d="M0 26C0 10 8 0 14 0s14 10 14 26h-9c0-8-2-13-5-13s-5 5-5 13z" fill={color} />
      </svg>
      Codey.
    </Link>
  );
}
