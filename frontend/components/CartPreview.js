import Link from 'next/link';
import { useCart } from '../hooks/useCart';

export default function CartPreview() {
  const { items } = useCart();
  const count = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link href="/carrito">
      <div style={{ position: 'relative' }}>
        🛒
        {count > 0 && (
          <span style={{ position: 'absolute', top: '-4px', right: '-4px', background: 'red', color: 'white', borderRadius: '50%', padding: '2px 5px', fontSize: '0.75rem' }}>{count}</span>
        )}
      </div>
    </Link>
  );
}
