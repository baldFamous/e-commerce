import Link from 'next/link';
import CartPreview from './CartPreview';
import { useAuth } from '../hooks/useAuth';

export default function Nav() {
  const { user } = useAuth();
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link href="/">Inicio</Link>
        <Link href="/productos">Tienda</Link>
      </div>
      <div>
        <Link href="/">
          <img src="/logo.png" alt="Logo" style={{ height: '40px' }} />
        </Link>
      </div>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Link href="/guia">Guía</Link>
        {user ? <Link href="/mi-cuenta">Mi cuenta</Link> : <Link href="/login">Login</Link>}
        <CartPreview />
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
