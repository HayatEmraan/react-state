import { createContext, useReducer } from "react";

export const todoLayer = createContext<
  { todos: TTodo[]; setTodos: React.Dispatch<TAction> } | undefined
>(undefined);

type TAction = {
  type: "addTodo" | "completeTodo";
  payload: TTodo | string;
};

const reducer = (state: TTodo[], action: TAction) => {
  switch (action.type) {
    case "addTodo":
      return [...state, action.payload];
    case "completeTodo":
      return state.map((todo) => {
        return todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : state;
      });
    default:
      return state;
  }
};

type TTodo = {
  id: string;
  title: string;
  completed: boolean;
};

const initialState: TTodo[] = [];

const TodoContext = ({ children }: { children: React.ReactNode }) => {
  // const [todos, setTodos] = useState([]);
  const [todos, setTodos] = useReducer(reducer, initialState);
  const values = {
    todos,
    setTodos,
  };
  return <todoLayer.Provider value={values}>{children}</todoLayer.Provider>;
};

export default TodoContext;
