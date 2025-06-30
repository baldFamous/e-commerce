const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export async function getProductos() {
  const res = await fetch(`${API_URL}/products/`);
  if (!res.ok) throw new Error('Error fetching products');
  return res.json();
}

export async function getProducto(slug) {
  const res = await fetch(`${API_URL}/products/${slug}/`);
  if (!res.ok) throw new Error('Error fetching product');
  return res.json();
}

export async function login(credentials) {
  const res = await fetch(`${API_URL}/auth/login/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  if (!res.ok) throw new Error('Login failed');
  return res.json();
}
