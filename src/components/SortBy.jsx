import SelectCategory from "./SelectCategory";

function SortBy({ selectedCategory, setSelectedCategory, colorMode }) {
  return (
    <SelectCategory
      colorMode={colorMode}
      value={selectedCategory}
      handleOnChange={setSelectedCategory}
      placeholder="Filter by category"
    />
  );
}

export default SortBy;
