import { Select } from "@chakra-ui/react";

function SortBy({ filteredCategory, setFilteredCategory }) {
  return (
    <Select
      placeholder="Filter by category"
      value={filteredCategory}
      onChange={(e) => setFilteredCategory(e.target.value)}
    >
      <option value="House">House</option>
      <option value="Work">Work</option>
      <option value="Family">Family</option>
      <option value="Sports">Sports</option>
      <option value="Studies">Studies</option>
    </Select>
  );
}

export default SortBy;
