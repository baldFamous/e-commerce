export default function FilterSidebar({ categories = [], onFilter }) {
  return (
    <aside style={{ borderRight: '1px solid #ddd', paddingRight: '1rem' }}>
      <h4>Categorías</h4>
      <ul>
        {categories.map((c) => (
          <li key={c.id}>
            <button onClick={() => onFilter(c.slug)}>{c.nombre}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
