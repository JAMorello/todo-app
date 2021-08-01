import { useState } from "react";
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
    <div>
      <SearchBar />
      <SortBy />
      <TodoList todoList={todoList} deleteItem={deleteItem} />
      <AddTodo alterList={alterList} />
    </div>
  );
};

export default AppBody;
