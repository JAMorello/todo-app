import { useState } from "react";
import { nanoid } from "nanoid";
import { HStack, VStack, Input, Button, Select } from "@chakra-ui/react";

function AddTodo({ alterList }) {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    const item = { id: nanoid(), task: task, category: category };
    alterList(item);
    setTask("");
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
            onChange={(e) => setTask(e.target.value)}
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
