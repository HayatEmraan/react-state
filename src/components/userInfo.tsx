import { useState } from "react";

type TUser = {
  name: string;
  age: string;
  hobbies: string[];
};

const UserInfo = () => {
  const [user, setUser] = useState({
    name: "",
    age: "0",
    hobbies: [],
  } as TUser);
  console.log(user);
  return (
    <div>
      <form
        action=""
        className="border p-8 rounded-md border-red-600 space-x-3">
        <input
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          className="border p-4 rounded-md"
          type="text"
          name="name"
          placeholder="name"
          id=""
        />
        <input
          className="border p-4 rounded-md"
          onChange={(e) => setUser({ ...user, age: e.target.value })}
          type="text"
          name="age"
          placeholder="age"
          id=""
        />
        <input
          className="border p-4 rounded-md"
          onBlur={(e) =>
            setUser({ ...user, hobbies: [...user.hobbies, e.target.value] })
          }
          type="text"
          name="hobbies"
          placeholder="hobbies"
          id=""
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserInfo;
