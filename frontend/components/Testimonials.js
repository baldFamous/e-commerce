export default function Testimonials() {
  return (
    <section style={{ padding: '2rem 1rem', background: 'var(--mint)' }}>
      <h2 style={{ textAlign: 'center' }}>Testimonios</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
        <figure>
          <img src="/user1.jpg" alt="Usuario" style={{ width: '100px', borderRadius: '50%' }} />
          <figcaption>"Me cambió la forma de tomarme un break"</figcaption>
        </figure>
        <figure>
          <img src="/user2.jpg" alt="Usuario" style={{ width: '100px', borderRadius: '50%' }} />
          <figcaption>"Es como un ritual diario para mí"</figcaption>
        </figure>
      </div>
    </section>
  );
}
