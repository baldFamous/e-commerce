import ProtectedRoute from '../../../components/ProtectedRoute';
import AdminLayout from '../../../layouts/AdminLayout';

export default function AdminPedidos() {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <h1>Listado de pedidos</h1>
      </AdminLayout>
    </ProtectedRoute>
  );
}
