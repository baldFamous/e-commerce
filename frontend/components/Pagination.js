export default function Pagination({ current, total, onPage }) {
  const pages = Array.from({ length: total }, (_, i) => i + 1);
  return (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      {pages.map((p) => (
        <button key={p} disabled={p === current} onClick={() => onPage(p)}>
          {p}
        </button>
      ))}
    </div>
  );
}
