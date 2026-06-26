function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search memories..."
      value={search}
      onChange={(event) => setSearch(event.target.value)}
      className="search-bar"
    />
  );
}

export default SearchBar;