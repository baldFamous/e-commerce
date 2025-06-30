import ProtectedRoute from '../../components/ProtectedRoute';
import PublicLayout from '../../layouts/PublicLayout';
import { useAuth } from '../../hooks/useAuth';

export default function MiCuenta() {
  const { user } = useAuth();
  return (
    <ProtectedRoute>
      <PublicLayout>
        <h1>Mi Cuenta</h1>
        <p>Bienvenido {user?.email}</p>
      </PublicLayout>
    </ProtectedRoute>
  );
}
