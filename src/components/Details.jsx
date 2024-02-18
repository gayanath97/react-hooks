import UserContext from "./UserContext";
import { useContext } from "react";

const Details = () => {
  const data = useContext(UserContext);
  return (
    <div>
      <h1 className="text-xl font-bold">Details</h1>
      <input className="bg-yellow-500 text-black px-2 py-1 rounded-md" 
       onChange={(e)=>{data.changeEmail(e.target.value)}}
      />
      <h1>Name:{data.name}</h1>
      <h1>Email-{data.email}</h1>
    </div>
  );
};
export default Details;
