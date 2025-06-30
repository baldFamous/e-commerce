import PublicLayout from '../../layouts/PublicLayout';
import ProductCard from '../../components/ProductCard';
import { getProductos } from '../../services/api';

export default function Productos({ products }) {
  return (
    <PublicLayout>
      <h1>Productos</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </PublicLayout>
  );
}

export async function getServerSideProps() {
  const products = await getProductos().catch(() => []);
  return { props: { products } };
}
