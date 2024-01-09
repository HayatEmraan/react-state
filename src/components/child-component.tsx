const ChildComponent = ({ count }: { count: number }) => {
  return (
    <div className="border border-red-500 p-6 mx-auto flex items-center justify-center">
      <button>Count: {count}</button>
    </div>
  );
};

export default ChildComponent;
