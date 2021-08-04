import { useState, useEffect } from "react";
import { HStack, VStack, Spacer } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import SortBy from "./SortBy";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const AppBody = () => {
  // const demoList = [
  //   {
  //     id: 1,
  //     task: "I see this is the first time you enter this app! :D",
  //     category: "",
  //     colorCat: "",
  //   },
  //   {
  //     id: 2,
  //     task: "The following are demo-tasks [Courtesy from Homer Simpson]",
  //     category: "",
  //     colorCat: "",
  //   },
  //   {
  //     id: 3,
  //     task: "You can delete them and start from zero",
  //     category: "",
  //     colorCat: "",
  //   },
  //   {
  //     id: 4,
  //     task: "Eat a hearty breakfast",
  //     category: "House",
  //     colorCat: "gray.500",
  //   },
  //   {
  //     id: 5,
  //     task: "Make a videotape for Maggie",
  //     category: "Family",
  //     colorCat: "orange.500",
  //   },
  //   {
  //     id: 6,
  //     task: "Have man-to-man with Bart",
  //     category: "Family",
  //     colorCat: "orange.500",
  //   },
  //   {
  //     id: 7,
  //     task: "Listen to Lisa play her sax",
  //     category: "Family",
  //     colorCat: "orange.500",
  //   },
  //   {
  //     id: 8,
  //     task: "Make funeral arrangements",
  //     category: "",
  //     colorCat: "",
  //   },
  //   {
  //     id: 9,
  //     task: "Make peace with Dad",
  //     category: "Family",
  //     colorCat: "orange.500",
  //   },
  //   {
  //     id: 10,
  //     task: "Beer with the boys at the bar",
  //     category: "",
  //     colorCat: "",
  //   },
  //   {
  //     id: 11,
  //     task: "Tell off boss",
  //     category: "Work",
  //     colorCat: "red.500",
  //   },
  //   {
  //     id: 12,
  //     task: "Go hang gliding",
  //     category: "Sports",
  //     colorCat: "blue.500",
  //   },
  //   {
  //     id: 13,
  //     task: "Plant a tree",
  //     category: "House",
  //     colorCat: "gray.500",
  //   },
  //   {
  //     id: 14,
  //     task: "A final dinner with my loved family",
  //     category: "Family",
  //     colorCat: "orange.500",
  //   },
  //   {
  //     id: 15,
  //     task: "Be intamit with Marge",
  //     category: "Family",
  //     colorCat: "orange.500",
  //   },
  // ];

  const [todoList, setTodoList] = useState(
    () => JSON.parse(localStorage.getItem("todoList")) || []
  );

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

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
