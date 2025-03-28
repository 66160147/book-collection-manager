import useBooks from '../hooks/useBooks';
import { Link } from 'react-router-dom';

function HomePage() {
  const { books } = useBooks();

  // คำนวณสถิติ
  const totalBooks = books.length;
  const categories = [...new Set(books.map((book) => book.category))].length;
  const latestBooks = books.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)).slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Welcome to Book Collection Manager</h1>
        <p>Manage your personal book collection with ease!</p>
      </section>

      {/* Statistics */}
      <section style={{ padding: '20px' }}>
        <h2>Collection Stats</h2>
        <p>Total Books: {totalBooks}</p>
        <p>Total Categories: {categories}</p>
      </section>

      {/* Latest Books */}
      <section style={{ padding: '20px' }}>
        <h2>Recently Added</h2>
        {latestBooks.length === 0 ? (
          <p>No books added yet.</p>
        ) : (
          <ul>
            {latestBooks.map((book) => (
              <li key={book.id}>
                <Link to={`/books/${book.id}`}>
                  {book.title} by {book.author}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default HomePage;