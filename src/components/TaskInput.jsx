import { Input } from "@chakra-ui/react";

const TaskInput = ({ value, handleOnChange, placeholder, colorMode }) => {
  return (
    <Input
      bg={colorMode === "light" ? "red.50" : "teal.700"}
      borderColor={colorMode === "light" ? "red.100" : "teal.500"}
      variant="filled"
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={handleOnChange}
    />
  );
};

export default TaskInput;
