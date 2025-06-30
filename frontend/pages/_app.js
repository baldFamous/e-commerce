import '../styles/globals.css';
import { AuthProvider } from '../hooks/useAuth';
import { CartProvider } from '../hooks/useCart';

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </AuthProvider>
  );


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
