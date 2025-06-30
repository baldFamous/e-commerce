import ProtectedRoute from '../../components/ProtectedRoute';
import AdminLayout from '../../layouts/AdminLayout';

export default function AdminHome() {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <h1>Panel de administración</h1>
      </AdminLayout>
    </ProtectedRoute>
  );
}
