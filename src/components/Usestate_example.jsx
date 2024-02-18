import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Usestate_example = () => {
  const [counter, setCounter] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("useEffect called in only once when component is mounted.");
    console.log("component did mount");
  }, []);

  useEffect(() => {
    console.log("component did update");

    return () => {
      console.log("component will unmount");
    };
  }, [counter]);

  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold underline">Welcome to useState Hook</h1>
      <h1 className="text-3xl font-bold ">{counter}</h1>
      <h2 className="text-3xl font-bold ">Counter value :{counter}</h2>
      <button
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Add Value
      </button>
      {"         "}
      <button
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => {
          if (counter > 0) {
            setCounter(counter - 1);
          } else {
            alert("Counter value can't be negative");
          }
        }}
      >
        Remove Value
      </button>
      <p className="text-3xl font-bold ">footer:{counter}</p>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => navigate("/")}
      >
        Back
      </button>
      <Footer />
    </>
  );
};
export default Usestate_example;
