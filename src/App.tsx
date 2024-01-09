// import ClassComponent from "./components/class-component";
// import { useState } from "react";
// import UserInfo from "./components/userInfo";
// import FuncComponent from "./components/func-component";
// import UserInfoWithReducer from "./components/userInfoWithReducer";

import Todoform from "./components/todo/todoform";
import Todoview from "./components/todo/todoview";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <div className="border border-purple-500 m-24">
      <h1 className="text-center text-3xl mt-4">Parent Component</h1>
      {/* <button className="ml-24">Count: {count}</button> */}
      {/* <ClassComponent /> */}
      {/* <FuncComponent count={count} setCount={setCount} /> */}

      {/* <UserInfo /> */}
      {/* <UserInfoWithReducer /> */}
      <Todoform />
      <Todoview />
    </div>
  );
}

export default App;
