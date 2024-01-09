import { FormEvent, useContext, useState } from "react";
import { todoLayer } from "./todoContext";

const Todoform = () => {
  const { setTodos } = useContext(todoLayer);
  const [task, setTask] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const todo = {
      id: new Date().getTime().toString(36),
      title: task,
      completed: false,
    };
    setTodos({
      type: "addTodo",
      payload: todo,
    });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          className="border border-red-200 p-2"
          type="text"
          onBlur={(e) => setTask(e.target.value)}
          name="todo"
          id=""
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Todoform;
