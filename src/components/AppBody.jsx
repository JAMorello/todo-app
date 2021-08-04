import { useState } from "react";
import { HStack, VStack } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import SortBy from "./SortBy";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const AppBody = () => {
  const initialList = [
    { id: 1, task: "Bath" },
    { id: 2, task: "Eat" },
  ];

  const [todoList, setTodoList] = useState(initialList);

  const alterList = (todoItem) => {
    const list = [...todoList, todoItem];
    setTodoList(list);
  };

  const deleteItem = (itemId) => {
    const newList = todoList.filter((i) => i.id !== itemId);
    setTodoList(newList);
  };

  return (
    <VStack
      w="100%"
      maxW={{ base: "90vw", sm: "80vw", md: "60vw", lg: "50vw", xl: "40vw" }}
    >
      <HStack>
        <SearchBar />
        <SortBy />
      </HStack>
      <TodoList todoList={todoList} deleteItem={deleteItem} p={2} />
      <AddTodo alterList={alterList} p={2} />
    </VStack>
  );
};

export default AppBody;
