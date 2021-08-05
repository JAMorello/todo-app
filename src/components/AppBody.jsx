import { useState, useEffect } from "react";
import { HStack, VStack, Spacer } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import SortBy from "./SortBy";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const AppBody = ({ colorMode }) => {
  // Get the tasks list from local storage or create a new empty one
  const [todoList, setTodoList] = useState(
    () => JSON.parse(localStorage.getItem("todoList")) || []
  );

  // Save the tasks list in local storage every time it changes
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  // Set up state hooks to show certain task of the list
  const [filteredList, setFilteredList] = useState(todoList);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchedWord, setSearchedWord] = useState("");

  // Effect Hook that fires up to show the proper tasks while searching, filtering, both or while not
  // Important: The app shows a copy of the original list
  useEffect(() => {
    let showList = todoList;
    if (selectedCategory !== "") {
      showList = todoList.filter((i) => i.category === selectedCategory);
    }
    if (searchedWord !== "") {
      showList = showList.filter((i) => i.task.includes(searchedWord));
    }
    setFilteredList(showList);
  }, [todoList, selectedCategory, searchedWord]);

  // The following three functions modify the original list
  const addToList = (newTask) => {
    const updatedList = [...todoList, newTask];
    setTodoList(updatedList);
  };

  const deleteTask = (taskId) => {
    const updatedList = todoList.filter((i) => i.id !== taskId);
    setTodoList(updatedList);
  };

  const editTask = (editedTask) => {
    const updatedList = todoList.map((oldTask) =>
      oldTask.id === editedTask.id ? editedTask : oldTask
    );
    setTodoList(updatedList);
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
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </HStack>
      <TodoList
        todoList={filteredList}
        deleteTask={deleteTask}
        editTask={editTask}
        colorMode={colorMode}
      />
      <AddTodo addToList={addToList} colorMode={colorMode} />
    </VStack>
  );
};

export default AppBody;
