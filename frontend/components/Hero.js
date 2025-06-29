export default function Hero() {
  return (
    <section className="hero" style={{ textAlign: 'center', padding: '4rem 1rem' }}>
      <video
        src="/hero-video.mp4"
        autoPlay
        muted
        loop
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
      />
      <h1>Transforma tu momento. Inhala, respira, siente.</h1>
      <div style={{ marginTop: '1rem' }}>
        <button style={{ marginRight: '1rem' }}>Descubre tu primer vaporizador</button>
        <button>Ver tienda</button>
      </div>
    </section>
  );
}
