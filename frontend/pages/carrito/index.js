import PublicLayout from '../../layouts/PublicLayout';
import { useCart } from '../../hooks/useCart';
import Link from 'next/link';

export default function Carrito() {
  const { items, removeItem, clear } = useCart();

  const total = items.reduce((acc, item) => acc + item.product.precio * item.quantity, 0);

  return (
    <PublicLayout>
      <h1>Tu carrito</h1>
      {items.length === 0 ? (
        <p>Carrito vacío</p>
      ) : (
        <>
          <ul>
            {items.map(({ product, quantity }) => (
              <li key={product.id} style={{ marginBottom: '1rem' }}>
                {product.nombre} x {quantity} - ${product.precio * quantity}
                <button onClick={() => removeItem(product.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <p>Total: ${total}</p>
          <button onClick={clear}>Vaciar carrito</button>
          <Link href="/checkout"><button>Proceder al pago</button></Link>
        </>
      )}
    </PublicLayout>
  );
}
