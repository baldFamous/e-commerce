export default function InteractiveGuide() {
  return (
    <section style={{ padding: '2rem 1rem', background: 'var(--pale-pink)' }}>
      <h2 style={{ textAlign: 'center' }}>Todo lo que debes saber para vapear con conciencia</h2>
      <ol style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
        <li>Qué es un vaporizador</li>
        <li>Tipos y diferencias</li>
        <li>Cómo elegir tu e-liquid</li>
      </ol>
    </section>
  );
}
