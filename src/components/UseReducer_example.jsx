import Footer from "./Footer";
import Navbar from "./Navbar";
import { useReducer, useState } from "react";
import TodoList from "./TodoList";
import Todos from "./Todos";
import TodosContext from "./TodosContext";

export const TODOS_ACTIONS = {
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
  RESET_TODO: "RESET_TODO",
};

const reducer = (state, action) => {
  switch (action.type) {
    case TODOS_ACTIONS.ADD_TODO:
      return [
        ...state,
        {
          id: state.length + 1,
          name: action.payload,
        },
      ];
    case TODOS_ACTIONS.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case TODOS_ACTIONS.RESET_TODO:
      return [];
    default:
      return state;
  }
};
const initialState = [];

const init = (initialState) => {
  const result = [...initialState, { id: 1, name: "Test Todo" }];
  return result;
};

const UserReducerExample = () => {
  const [todos, dispatch] = useReducer(reducer, initialState, init);
  const [value, setValue] = useState("");
const data = {
    todos,
    dispatch,
}
  return (
    <TodosContext.Provider value={data}>
      <Navbar />
      <h1 className="text-3xl font-bold underline">
        Welcome to useReducer Hook
      </h1>
      <br />
      {/* <h1 className="text-3xl font-bold ">Todo List-{todos.length}</h1> */}
      <Todos />
      <br />
      <label className="text-xl font-bold ">AddNew Task:</label>
      <input
        className="border-2 border-gray-500"
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      {"    "}
      <button
        className="bg-yellow-500 text-white p-1 rounded-md"
        onClick={(e) => {
          dispatch({
            type: TODOS_ACTIONS.ADD_TODO,
            payload: value,
          });
        }}
      >
        Add
      </button>{" "}
      <button
        className="bg-yellow-500 text-white p-1 rounded-md"
        onClick={(e) => {
          dispatch({
            type: TODOS_ACTIONS.RESET_TODO,
            payload: value,
          });
        }}
      >
        RESET
      </button>
      <br />
      <br />
      <TodoList  />
      <Footer />
    </TodosContext.Provider>
  );
};
export default UserReducerExample;
