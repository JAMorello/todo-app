import React from "react";

function TodoList({ todoList }) {
  return (
    <div>
      {todoList.map((item) => {
        return (
          <div>
            <li key={item.id}>{item.task}</li>
            <button>Delete</button>
          </div>
        );
      })}
      <hr />
    </div>
  );
}

export default TodoList;
