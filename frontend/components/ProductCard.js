import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '4px' }}>
      <Link href={`/producto/${product.slug}`}>
        <img src={product.imagen_principal || '/placeholder-product.jpg'} alt={product.nombre} style={{ width: '100%', height: 'auto' }} />
      </Link>
      <h3>{product.nombre}</h3>
      <p>${product.precio}</p>
    </div>
  );
}
