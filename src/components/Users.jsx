import Details from "./Details";
import UserContext from "./UserContext";
import { useContext } from "react";

const Users = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <h1 className="text-2xl font-bold">Users</h1>
      <p>Name:{user.name}</p>
      <p>Email:{user.email}</p>
      <Details />
    </div>
  );
};
export default Users;
