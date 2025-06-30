import Nav from '../components/Nav';

export default function AdminLayout({ children }) {
  return (
    <>
      <Nav />
      <main style={{ padding: '2rem' }}>{children}</main>
    </>
  );
}
