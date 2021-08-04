import { useState, useEffect } from "react";
import { HStack, VStack } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import SortBy from "./SortBy";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const AppBody = () => {
  const initialList = [
    { id: 1, task: "Bath", category: "", colorCat: "" },
    { id: 2, task: "Eat", category: "Sports", colorCat: "blue.500" },
  ];

  const [todoList, setTodoList] = useState(initialList);
  const [filteredList, setFilteredList] = useState(todoList);
  const [filteredCategory, setFilteredCategory] = useState("");

  useEffect(() => {
    let showList = todoList;
    if (filteredCategory !== "") {
      showList = todoList.filter((i) => i.category === filteredCategory);
    }
    setFilteredList(showList);
  }, [todoList, filteredCategory]);

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
        <SortBy
          filteredCategory={filteredCategory}
          setFilteredCategory={setFilteredCategory}
        />
      </HStack>
      <TodoList todoList={filteredList} deleteItem={deleteItem} p={2} />
      <AddTodo alterList={alterList} p={2} />
    </VStack>
  );
};

export default AppBody;
