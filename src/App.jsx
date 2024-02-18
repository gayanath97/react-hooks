import { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold underline">Hello Hooks!</h1> <br />
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => navigate("/usestate")}
      >
        UseState
      </button>
      <br />
      <br />
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => navigate("/usestate")}
      >
        UseEffect
      </button>
      <br />
      <br />
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => navigate("/usereducer")}
      >
        useReducer
      </button>
      <br />
      <br />
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => navigate("/usecontext")}
      >
        useContext
      </button>
      <br />
      <br />
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => navigate("/usememo")}
      >
        useMemo
      </button>
      <Footer />
    </div>
  );
}

export default App;
