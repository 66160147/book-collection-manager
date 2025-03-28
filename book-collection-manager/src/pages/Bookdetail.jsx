import { useParams, useNavigate, Link } from 'react-router-dom';
import useBooks from '../hooks/useBooks';

function BookDetail() {
  const { id } = useParams(); // ดึง id จาก URL
  const { books, deleteBook } = useBooks();
  const navigate = useNavigate();

  const book = books.find((b) => b.id === id);

  if (!book) {
    return <p>Book not found!</p>;
  }

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      deleteBook(id);
      navigate('/books');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Year:</strong> {book.year}</p>
      <p><strong>Category:</strong> {book.category}</p>
      <p><strong>Status:</strong> {book.status}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Rating:</strong> {book.rating}/5</p>
      {book.cover && <img src={book.cover} alt="Book cover" style={{ maxWidth: '200px' }} />}
      
      <div style={{ marginTop: '20px' }}>
        <Link to={`/books/edit/${id}`} style={{ marginRight: '10px' }}>
          <button>Edit</button>
        </Link>
        <button onClick={handleDelete} style={{ marginRight: '10px' }}>
          Delete
        </button>
        <Link to="/books">
          <button>Back to List</button>
        </Link>
      </div>
    </div>
  );
}

export default BookDetail;