function BookSearch({ searchTerm, onSearch }) {
    return (
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        style={{ padding: '5px', width: '200px', marginBottom: '10px' }}
      />
    );
  }
  
  export default BookSearch;