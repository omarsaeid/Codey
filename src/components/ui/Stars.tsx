export default function Stars({ value }: { value: number }) {
  return (
    <span className="stars" aria-label={`${value} out of 5`}>
      {'★'.repeat(value)}
      <i>{'★'.repeat(5 - value)}</i>
    </span>
  );
}
