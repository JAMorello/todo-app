import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { HStack, VStack, Input, Button } from "@chakra-ui/react";
import SelectCategory from "./SelectCategory";
import useToastAlert from "../customHooks/useToastAlert";
import detectColor from "../utilities/detectColor";

function AddTodo({ addToList, colorMode }) {
  // Initialize state hooks to create a new task
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("");

  // State for color and efect fired up every time the category changes to change also the color
  const [color, setColor] = useState("");
  useEffect(() => {
    detectColor(category, setColor);
  }, [category]);

  // Create a pop up alert using custom Hook
  const alert = useToastAlert();

  const handleAddTask = (e) => {
    e.preventDefault();

    if (!alert(task)) {
      const item = {
        id: nanoid(),
        task: task,
        category: category,
        colorCat: color,
      };
      addToList(item);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleAddTask}>
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
          <SelectCategory
            colorMode={colorMode}
            placeholder="Select category"
            value={category}
            handleOnChange={setCategory}
          />
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
