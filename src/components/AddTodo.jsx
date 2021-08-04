import { useState } from "react";
import { nanoid } from "nanoid";
import { HStack, VStack, Input, Button, Select } from "@chakra-ui/react";

function AddTodo({ alterList }) {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    const item = {
      id: nanoid(),
      task: task,
      category: category,
      colorCat: color,
    };
    alterList(item);
    setTask("");
  };

  const handleOnChange = (e) => {
    setTask(e.target.value);
    switch (category) {
      case "House":
        setColor("gray.500");
        break;
      case "Work":
        setColor("red.500");
        break;
      case "Family":
        setColor("orange.500");
        break;
      case "Sports":
        setColor("blue.500");
        break;
      case "Studies":
        setColor("green.500");
        break;
      default:
        setColor("");
    }
  };

  return (
    <form onSubmit={handleAddTodo}>
      <VStack>
        <HStack>
          <Input
            variant="filled"
            placeholder="Describe task here..."
            type="text"
            value={task}
            onChange={handleOnChange}
          />
          <Select
            placeholder="Select category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="House">House</option>
            <option value="Work">Work</option>
            <option value="Family">Family</option>
            <option value="Sports">Sports</option>
            <option value="Studies">Studies</option>
          </Select>
        </HStack>
        <Button colorScheme="blue" type="submit">
          Add Task
        </Button>
      </VStack>
    </form>
  );
}

export default AddTodo;
