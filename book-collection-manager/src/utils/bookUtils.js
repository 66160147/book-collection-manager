export function getBookStats(books) {
    return {
      totalBooks: books.length,
      totalCategories: [...new Set(books.map((book) => book.category))].length,
      latestBooks: books.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)).slice(0, 3),
    };
  }