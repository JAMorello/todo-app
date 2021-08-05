import SelectCategory from "./SelectCategory";

function SortBy({ selectedCategory, setSelectedCategory }) {
  return (
    <SelectCategory
      value={selectedCategory}
      handleOnChange={setSelectedCategory}
    />
  );
}

export default SortBy;
