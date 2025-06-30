import ProtectedRoute from '../../../components/ProtectedRoute';
import AdminLayout from '../../../layouts/AdminLayout';

export default function AdminProductos() {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <h1>Gestión de productos</h1>
      </AdminLayout>
    </ProtectedRoute>
  );
}
