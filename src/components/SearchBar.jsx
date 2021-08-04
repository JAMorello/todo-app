import { useState } from "react";
import { Input } from "@chakra-ui/react";

function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <Input
      variant="filled"
      type="text"
      placeholder="Search task..."
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
      }}
    />
  );
}

export default SearchBar;
