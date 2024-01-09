import { useContext } from "react";
import { todoLayer } from "./todoContext";

const Todoview = () => {
  const { todos } = useContext(todoLayer);
  return (
    <div>
      {todos.map((todo) => {
        return <div key={todo}>{todo}</div>;
      })}
    </div>
  );
};

export default Todoview;
