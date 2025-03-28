import { useState } from 'react';
import { Link } from 'react-router-dom';
import useBooks from '../hooks/useBooks';
import BookCard from '../components/BookCard';

function ListBooks() {
  const { books, deleteBook } = useBooks();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory ? book.category === filterCategory : true;
    return matchesSearch && matchesCategory;
  });

  const categories = [...new Set(books.map((book) => book.category))];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Book List</h1>
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '10px', width: '200px' }}
      />
      <select
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
        style={{ marginLeft: '10px', marginBottom: '10px' }}
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <Link to="/books/add">
        <button style={{ marginLeft: '10px' }}>Add Book</button>
      </Link>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredBooks.length === 0 ? (
          <p>No books found.</p>
        ) : (
          filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} onDelete={deleteBook} />
          ))
        )}
      </div>
    </div>
  );
}

export default ListBooks;