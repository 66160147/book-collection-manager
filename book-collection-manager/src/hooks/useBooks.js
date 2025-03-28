import { useState, useEffect } from 'react';

function useBooks() {
  const [books, setBooks] = useState([]);

  // โหลดข้อมูลจาก localStorage ตอนเริ่มต้น
  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    setBooks(storedBooks);
  }, []);

  // บันทึกข้อมูลลง localStorage เมื่อ books เปลี่ยน
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  // ฟังก์ชันเพิ่มหนังสือ
  const addBook = (book) => {
    const newBook = { ...book, id: crypto.randomUUID(), dateAdded: new Date() };
    setBooks([...books, newBook]);
  };

  // ฟังก์ชันแก้ไขหนังสือ
  const editBook = (id, updatedBook) => {
    setBooks(books.map((book) => (book.id === id ? { ...book, ...updatedBook } : book)));
  };

  // ฟังก์ชันลบหนังสือ
  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return { books, addBook, editBook, deleteBook };
}

export default useBooks;