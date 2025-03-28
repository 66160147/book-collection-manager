import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{ padding: '10px', background: '#f0f0f0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Book Manager</h2>
        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{ display: 'block', background: 'none', border: 'none', fontSize: '20px' }}
        >
          ☰
        </button>
      </div>

      {/* Menu */}
      <div
        style={{
          display: isOpen ? 'block' : 'none',
          marginTop: '10px',
        }}
      >
        <Link to="/" onClick={() => setIsOpen(false)} style={{ marginRight: '15px' }}>
          Home
        </Link>
        <Link to="/books" onClick={() => setIsOpen(false)} style={{ marginRight: '15px' }}>
          Book List
        </Link>
        <Link to="/books/add" onClick={() => setIsOpen(false)}>
          Add Book
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;