import { Select } from "@chakra-ui/react";

const SelectCategory = ({ value, handleOnChange, placeholder, colorMode }) => {
  return (
    <Select
      bg={colorMode === "light" ? "red.200" : "teal.900"}
      borderColor={colorMode === "light" ? "red.300" : "teal.500"}
      placeholder={placeholder}
      value={value}
      onChange={handleOnChange}
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
