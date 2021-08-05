import { useState, useEffect } from "react";
import { VStack, StackDivider, useDisclosure } from "@chakra-ui/react";
import TodoItem from "./TodoItem";
import NoTasksBadge from "./NoTasksBadge";
import ModalEdit from "./ModalEdit";
import useToastAlert from "../customHooks/useToastAlert";
import detectColor from "../utilities/detectColor";

function TodoList({ todoList, deleteTask, editTask, colorMode }) {
  // Initialize varibles for Modal use
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Initialize state for the task thats going to be edited
  const [currentTask, setCurrentTask] = useState({});

  // State for color and effect fired up every time the edited category changes to change also the color
  const [color, setColor] = useState("");
  useEffect(() => {
    detectColor(currentTask.category, setColor);
  }, [currentTask]);
  /* TODO: Buscar una manera de que sea más rápido, que cambie solo al cambiar la categoría. Al dispararse cuando se ingresa texto se detecta un ligero tartamudeo */

  // Create a pop up alert using custom Hook
  const alert = useToastAlert();

  // Fire up when the editing modal is going to be opened
  const handleOpenEdit = (task) => {
    setCurrentTask(task);
    onOpen();
  };

  const handleEdit = (e, key) => {
    setCurrentTask({ ...currentTask, [key]: e.target.value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    if (!alert(currentTask)) {
      const editedItem = { ...currentTask, colorCat: color };
      editTask(editedItem);
      onClose();
    }
  };

  // If there aren't any task to be shown
  if (!todoList.length) {
    return <NoTasksBadge />;
  }

  return (
    <VStack
      shadow="md"
      divider={<StackDivider />}
      w="100%"
      borderWidth="1px"
      borderColor="gray.200"
      borderRadius="lg"
      p={3}
    >
      {todoList.map((item) => {
        return (
          <TodoItem
            item={item}
            handleOpenEdit={handleOpenEdit}
            deleteTask={deleteTask}
          />
        );
      })}
      <ModalEdit
        isOpen={isOpen}
        onClose={onClose}
        currentTask={currentTask}
        handleEdit={handleEdit}
        handleEditSubmit={handleEditSubmit}
        colorMode={colorMode}
      />
    </VStack>
  );
}

export default TodoList;
