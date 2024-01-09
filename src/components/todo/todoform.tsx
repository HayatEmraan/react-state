import { FormEvent, useContext } from "react";
import { todoLayer } from "./todoContext";

const Todoform = () => {
  const { todos, setTodos } = useContext(todoLayer);
  return (
    <div>
      <form
        action=""
        onSubmit={(e: FormEvent) => {
          e.preventDefault();
          setTodos([...todos, e.target.todo.value]);
        }}>
        <input className="border border-red-200 p-2" type="text" name="todo" id="" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Todoform;
