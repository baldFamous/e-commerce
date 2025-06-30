import ProtectedRoute from '../../../components/ProtectedRoute';
import AdminLayout from '../../../layouts/AdminLayout';

export default function AdminEstadisticas() {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <h1>Estadísticas de ventas</h1>
      </AdminLayout>
    </ProtectedRoute>
  );
}
