export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: '#fff', padding: '1rem', borderRadius: '4px', minWidth: '300px' }}>
        <button style={{ float: 'right' }} onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
}
