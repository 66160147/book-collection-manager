import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useBooks from '../hooks/useBooks';

function AddEditBook() {
  const { id } = useParams(); // ถ้ามี id แปลว่าแก้ไข
  const { books, addBook, editBook } = useBooks();
  const navigate = useNavigate();

  // Initial state สำหรับฟอร์ม
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    year: '',
    category: '',
    status: 'to-read',
    cover: '',
    description: '',
    rating: 1,
  });

  // ถ้าเป็นการแก้ไข โหลดข้อมูลหนังสือเก่ามาใส่ในฟอร์ม
  useEffect(() => {
    if (id) {
      const book = books.find((b) => b.id === id);
      if (book) setFormData(book);
    }
  }, [id, books]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.title || !formData.author) {
      alert('Title and Author are required!');
      return;
    }
    if (formData.year && (isNaN(formData.year) || formData.year < 0)) {
      alert('Year must be a valid number!');
      return;
    }

    if (id) {
      // แก้ไขหนังสือ
      editBook(id, formData);
    } else {
      // เพิ่มหนังสือใหม่
      addBook(formData);
    }
    navigate('/books');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>{id ? 'Edit Book' : 'Add New Book'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Year:</label>
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Status:</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="to-read">To Read</option>
            <option value="reading">Reading</option>
            <option value="read">Read</option>
          </select>
        </div>
        <div>
          <label>Cover URL (optional):</label>
          <input
            type="text"
            name="cover"
            value={formData.cover}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Rating (1-5):</label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            min="1"
            max="5"
          />
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>
          {id ? 'Update' : 'Add'} Book
        </button>
      </form>
    </div>
  );
}

export default AddEditBook;