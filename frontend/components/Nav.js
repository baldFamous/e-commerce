export default function Nav() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <a href="#">Inicio</a>
        <a href="#">Tienda</a>
      </div>
      <div>
        <img src="/logo.png" alt="Logo" style={{ height: '40px' }} />
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <a href="#">Guía</a>
        <a href="#">Contacto</a>
      </div>
    </nav>
  );
}
