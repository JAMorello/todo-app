import SelectCategory from "./SelectCategory";

function SortBy({ selectedCategory, setSelectedCategory, colorMode }) {
  return (
    <SelectCategory
      colorMode={colorMode}
      value={selectedCategory}
      handleOnChange={(e) => setSelectedCategory(e.target.value)}
      placeholder="Filter by category"
    />
  );
}

export default SortBy;
