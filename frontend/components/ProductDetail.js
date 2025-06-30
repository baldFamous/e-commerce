import { useCart } from '../hooks/useCart';

export default function ProductDetail({ product }) {
  const { addItem } = useCart();

  return (
    <div>
      <img src={product.imagen_principal || '/placeholder-product.jpg'} alt={product.nombre} style={{ width: '100%', maxWidth: '400px' }} />
      <h1>{product.nombre}</h1>
      <p>{product.descripcion}</p>
      <p>${product.precio}</p>
      <button onClick={() => addItem(product)}>Agregar al carrito</button>
    </div>
  );
}
