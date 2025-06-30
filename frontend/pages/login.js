import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import PublicLayout from '../layouts/PublicLayout';

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password });
    } catch (err) {
      alert('Error al iniciar sesión');
    }
  };

  return (
    <PublicLayout>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '300px' }}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" required />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
        <button type="submit">Entrar</button>
      </form>
    </PublicLayout>
  );
}
