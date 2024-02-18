import { TODOS_ACTIONS } from "./UseReducer_example";
import TodosContext from "./TodosContext";
import { useContext } from "react";

const TodoList = () => {
  const { todos, dispatch } = useContext(TodosContext);
  return (
    <>
      {todos.map((todo) => {
        return (
          <>
            <li id={todo.id}>
              {todo.name}{" "}
              <button
                className="bg-red-500 text-white p-1 rounded-md"
                onClick={() => {
                  dispatch({
                    type: TODOS_ACTIONS.DELETE_TODO,
                    payload: todo.id,
                  });
                }}
              >
                Delete Todo
              </button>
            </li>
            <br />
          </>
        );
      })}
    </>
  );
};
export default TodoList;
