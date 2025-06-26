export default function SubscriptionSection() {
  return (
    <section style={{ padding: '2rem 1rem', textAlign: 'center' }}>
      <h2>Recibe promociones y rituales directo en tu bandeja</h2>
      <form style={{ marginTop: '1rem' }}>
        <input type="email" placeholder="Tu correo" style={{ padding: '0.5rem' }} />
        <button style={{ marginLeft: '0.5rem' }}>Suscribirse</button>
      </form>
    </section>
  );
}
