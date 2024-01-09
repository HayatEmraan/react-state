import React from "react";
import ChildComponent from "./child-component";

type TProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const FuncComponent = ({ count, setCount }: TProps) => {
  return (
    <div className="border border-red-500 p-24 m-36 w-1/2 mx-auto flex items-center justify-center">
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent count={count} />
    </div>
  );
};

export default FuncComponent;
