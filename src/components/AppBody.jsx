import React from "react";
import SearchBar from "./SearchBar";
import SortBy from "./SortBy";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const AppBody = () => {
  const todoList = [
    { id: 1, task: "Bath" },
    { id: 2, task: "Eat" },
  ];

  return (
    <div>
      <SearchBar />
      <SortBy />
      <TodoList todoList={todoList} />
      <AddTodo />
    </div>
  );
};

export default AppBody;
