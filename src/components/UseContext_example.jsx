import Footer from "./Footer";
import Users from "./Users";
import Navbar from "./Navbar";
import UserContext from "./UserContext";
import { useState } from "react";

const UseContext_example = () => {
  const[email,setEmail] = useState("Test Email");
  const user = { name: "Tiffany", email: email, changeEmail: setEmail };
  return (
    <div>
      <Navbar />
      <UserContext.Provider value={user}>
        <h1 className="text-3xl font-bold">User Dashboard</h1>
        <p className="text-xl">Name: {user.name}</p>
        <p className="text-xl">Email: {user.email}</p>
        <Users />
      </UserContext.Provider>
      <Footer />
    </div>
  );
};
export default UseContext_example;
