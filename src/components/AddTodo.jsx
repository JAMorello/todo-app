import { useState } from "react";
import { nanoid } from "nanoid";

function AddTodo({ alterList }) {
  const [task, setTask] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    const item = { id: nanoid(), task: task };
    alterList(item);
    setTask("");
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTodo;
