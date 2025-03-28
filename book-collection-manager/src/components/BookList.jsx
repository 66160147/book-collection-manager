import BookCard from './BookCard';

function BookList({ books, onDelete }) {
  if (books.length === 0) {
    return <p>No books to display.</p>;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {books.map((book) => (
        <BookCard key={book.id} book={book} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default BookList;