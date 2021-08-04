import { useState, useEffect } from "react";
import { HStack, VStack, Spacer } from "@chakra-ui/react";
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
  const [searchedWord, setSearchedWord] = useState("");

  useEffect(() => {
    let showList = todoList;
    if (filteredCategory !== "") {
      showList = todoList.filter((i) => i.category === filteredCategory);
    }
    if (searchedWord !== "") {
      showList = showList.filter((i) => i.task.includes(searchedWord));
    }
    setFilteredList(showList);
  }, [todoList, filteredCategory, searchedWord]);

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
      m={2}
      w="100%"
      maxW={{ base: "90vw", sm: "80vw", md: "60vw", lg: "50vw", xl: "40vw" }}
    >
      <HStack m={2}>
        <SearchBar
          searchedWord={searchedWord}
          setSearchedWord={setSearchedWord}
        />
        <Spacer />
        <SortBy
          filteredCategory={filteredCategory}
          setFilteredCategory={setFilteredCategory}
        />
      </HStack>
      <TodoList todoList={filteredList} deleteItem={deleteItem} />
      <AddTodo alterList={alterList} />
    </VStack>
  );
};

export default AppBody;
