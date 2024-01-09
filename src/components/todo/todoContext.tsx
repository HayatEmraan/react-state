import { createContext, useState } from "react";

export const todoLayer = createContext(null);

const TodoContext = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState([]);
  const values = {
    todos,
    setTodos,
  };
  return <todoLayer.Provider value={values}>{children}</todoLayer.Provider>;
};

export default TodoContext;
