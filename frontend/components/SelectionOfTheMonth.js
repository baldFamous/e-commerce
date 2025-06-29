export default function SelectionOfTheMonth() {
  return (
    <section style={{ padding: '2rem 1rem' }}>
      <h2 style={{ textAlign: 'center' }}>Selección del mes</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
        <div style={{ border: '1px solid #ccc', padding: '1rem', textAlign: 'center' }}>
          <img src="/placeholder-product.jpg" alt="Producto" style={{ width: '100%', height: 'auto' }} />
          <p>Etiqueta</p>
          <p>$0.000</p>
          <button>Comprar</button>
          <p>★★★★★ 4.8</p>
        </div>
      </div>
    </section>
  );
}
