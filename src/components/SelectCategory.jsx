import { Select } from "@chakra-ui/react";

const SelectCategory = ({ value, handleOnChange }) => {
  return (
    <Select
      placeholder="Filter by category"
      value={value}
      onChange={(e) => handleOnChange(e.target.value)}
    >
      <option value="House">House</option>
      <option value="Work">Work</option>
      <option value="Family">Family</option>
      <option value="Sports">Sports</option>
      <option value="Studies">Studies</option>
    </Select>
  );
};

export default SelectCategory;
