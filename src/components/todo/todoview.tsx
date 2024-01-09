import { useContext } from "react";
import { todoLayer } from "./todoContext";

const Todoview = () => {
  const { todos, setTodos } = useContext(todoLayer);
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <p
              onClick={() =>
                setTodos({ type: "completeTodo", payload: todo.id })
              }
              className={`cursor-pointer ${
                todo.completed ? "line-through" : ""
              }`}>
              {todo.title}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Todoview;
