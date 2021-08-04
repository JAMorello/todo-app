import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import {
  HStack,
  VStack,
  Input,
  Button,
  Select,
  useToast,
} from "@chakra-ui/react";

function AddTodo({ alterList, colorMode }) {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const alert = useToast();

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (!task) {
      alert({
        title: "Task description missing",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const item = {
      id: nanoid(),
      task: task,
      category: category,
      colorCat: color,
    };
    alterList(item);
    setTask("");
  };

  useEffect(() => {
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
  }, [category]);

  return (
    <form onSubmit={handleAddTodo}>
      <VStack
        p={3}
        mt={2}
        bg={colorMode === "light" ? "red.50" : "teal.600"}
        borderWidth="2px"
        borderColor={colorMode === "light" ? "gray.100" : "teal.500"}
        borderRadius="lg"
      >
        <HStack>
          <Input
            bg={colorMode === "light" ? "red.50" : "teal.700"}
            borderColor={colorMode === "light" ? "red.100" : "teal.500"}
            variant="filled"
            placeholder="Describe task here..."
            type="text"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          <Select
            bg={colorMode === "light" ? "red.200" : "teal.900"}
            borderColor={colorMode === "light" ? "red.300" : "teal.500"}
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
        <Button
          colorScheme={colorMode === "light" ? "red" : "green"}
          type="submit"
        >
          Add Task
        </Button>
      </VStack>
    </form>
  );
}

export default AddTodo;
