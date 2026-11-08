interface FaceProps { skin: string; hair: string; shirt: string }

/** Cartoon avatar used in the community orb, testimonials and About page. */
export default function Face({ skin, hair, shirt }: FaceProps) {
  return (
    <svg viewBox="0 0 60 60" aria-hidden="true">
      <path d="M8 60c2-14 14-18 22-18s20 4 22 18z" fill={shirt} />
      <circle cx="30" cy="28" r="14" fill={skin} />
      <path d="M15 26c0-14 30-16 30 0-6-6-20-8-30 0z" fill={hair} />
      <circle cx="25" cy="29" r="1.8" fill="#1a2026" />
      <circle cx="35" cy="29" r="1.8" fill="#1a2026" />
      <path d="M26 35q4 3 8 0" stroke="#1a2026" fill="none" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
