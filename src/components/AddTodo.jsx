import { useState } from "react";

function AddTodo() {
  const [text, setText] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    console.log(text);
    setText("");
  };

  return (
    <form>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Task</button>
    </form>
  );
}

export default AddTodo;
