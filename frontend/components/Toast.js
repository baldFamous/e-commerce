export default function Toast({ message }) {
  if (!message) return null;
  return (
    <div style={{ position: 'fixed', bottom: '1rem', right: '1rem', background: '#333', color: '#fff', padding: '0.5rem 1rem', borderRadius: '4px' }}>
      {message}
    </div>
  );
}
