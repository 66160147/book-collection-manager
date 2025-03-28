import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import ListBooks from './pages/ListBooks.jsx';
import BookDetail from './pages/Bookdetail.jsx';
import AddEditBook from './pages/AddEditBook.jsx';
import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<ListBooks />} />
        <Route path="/books/:id" element={<BookDetail />} />
        <Route path="/books/add" element={<AddEditBook />} />
        <Route path="/books/edit/:id" element={<AddEditBook />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;