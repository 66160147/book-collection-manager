function CategoryFilter({ categories, selectedCategory, onFilter }) {
    return (
      <select
        value={selectedCategory}
        onChange={(e) => onFilter(e.target.value)}
        style={{ padding: '5px', marginLeft: '10px', marginBottom: '10px' }}
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    );
  }
  
  export default CategoryFilter;