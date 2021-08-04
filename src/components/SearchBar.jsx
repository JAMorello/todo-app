import { Input } from "@chakra-ui/react";

function SearchBar({ searchedWord, setSearchedWord }) {
  return (
    <Input
      variant="filled"
      type="text"
      placeholder="Search task..."
      value={searchedWord}
      onChange={(e) => setSearchedWord(e.target.value)}
    />
  );
}

export default SearchBar;
