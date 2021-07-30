import { useState } from "react";

function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <form>
      <input
        type="text"
        placeholder="search..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button>Search</button>
    </form>
  );
}

export default SearchBar;
