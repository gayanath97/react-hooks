import Footer from "./Footer";
import Navbar from "./Navbar";
import UserCard from "./UserCard";
import { useState, useMemo } from "react";

const UseMemo_example = () => {
  const usersList = [
    { id: 1, name: "John" },
    { id: 2, name: "Doe" },
    { id: 3, name: "Smith" },
    { id: 4, name: "Alex" },
  ];
  const [users, setUsers] = useState(usersList);
  const [count, setCount] = useState(0);

  const displayList = useMemo(() => 
    users.map((user) => {
      console.log("preparing user card...");
      return <UserCard key={user.id} data={user} />;
    })
  , [users]);


  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold">UseMemo Hook</h1>
      <h1 className="text-3xl font-bold">{count}</h1>
      <button
      className="bg-yellow-500 text-white p-1 rounded-md"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increament
      </button>
      <br />
      Enter Name: <input type="text" onBlur={(e)=>{setUsers(
       [    ...users,
            {
                id: users.length + 1,
                name: e.target.value
            }
       ]
            )
            }} />
      {displayList}
      <Footer />
    </>
  );
};
export default UseMemo_example;
