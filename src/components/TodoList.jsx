import React from "react";

function TodoList({ todoList, deleteItem }) {
  return (
    <div>
      {todoList.map((item) => {
        return (
          <li key={item.id}>
            <p>{item.task}</p>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        );
      })}
      <hr />
    </div>
  );
}

export default TodoList;
