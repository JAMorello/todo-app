import TaskInput from "./TaskInput";

function SearchBar({ searchedWord, setSearchedWord, colorMode }) {
  return (
    <TaskInput
      value={searchedWord}
      handleOnChange={(e) => setSearchedWord(e.target.value)}
      colorMode={colorMode}
      placeholder="Search task..."
    />
  );
}

export default SearchBar;
