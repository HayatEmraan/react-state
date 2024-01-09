import { FormEvent, useReducer } from "react";

type TAction = {
  type: "addName" | "addAge" | "addHobbies";
  payload: string;
};
const reducer = (state: typeof initialState, action: TAction) => {
  switch (action.type) {
    case "addName":
      return {
        ...state,
        name: action.payload,
      };
    case "addAge":
      return {
        ...state,
        age: action.payload,
      };
    case "addHobbies":
      return {
        ...state,
        hobbies: [...state.hobbies, action.payload],
      };
    default:
      return state;
  }
};

const initialState = {
  name: "",
  age: "0",
  hobbies: [] as string[],
};

const UserInfoWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div>
      <form
        action=""
        onSubmit={handleSubmit}
        className="border p-8 rounded-md border-red-600 space-x-3">
        <input
          className="border p-4 rounded-md"
          onChange={(e) =>
            dispatch({ type: "addName", payload: e.target.value })
          }
          type="text"
          name="name"
          placeholder="name"
          id=""
        />
        <input
          className="border p-4 rounded-md"
          onChange={(e) =>
            dispatch({ type: "addAge", payload: e.target.value })
          }
          type="text"
          name="age"
          placeholder="age"
          id=""
        />
        <input
          className="border p-4 rounded-md"
          type="text"
          name="hobbies"
          onBlur={(e) =>
            dispatch({ type: "addHobbies", payload: e.target.value })
          }
          placeholder="hobbies"
          id=""
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserInfoWithReducer;
