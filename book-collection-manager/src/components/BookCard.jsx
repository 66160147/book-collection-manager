import { Link } from 'react-router-dom';

function BookCard({ book, onDelete }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '200px' }}>
      <h3>{book.title}</h3>
      <p>by {book.author}</p>
      <p>{book.category}</p>
      {book.cover && <img src={book.cover} alt="cover" style={{ maxWidth: '100px' }} />}
      <div>
        <Link to={`/books/${book.id}`}>Details</Link>{' '}
        <button onClick={() => onDelete(book.id)}>Delete</button>
      </div>
    </div>
  );
}

export default BookCard;