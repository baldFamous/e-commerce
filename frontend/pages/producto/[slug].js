import PublicLayout from '../../layouts/PublicLayout';
import ProductDetail from '../../components/ProductDetail';
import { getProducto } from '../../services/api';

export default function ProductoPage({ product }) {
  if (!product) return (
    <PublicLayout>
      <p>Producto no encontrado</p>
    </PublicLayout>
  );

  return (
    <PublicLayout>
      <ProductDetail product={product} />
    </PublicLayout>
  );
}

export async function getServerSideProps({ params }) {
  const product = await getProducto(params.slug).catch(() => null);
  return { props: { product } };
}
