import TodosContext from "./TodosContext";
import { useContext } from "react";

const Todos = () => {
    const  todos  = useContext(TodosContext);
    return (
        <h1 className="text-3xl font-bold ">Todo List-{todos.todos.length}</h1>
    )
}
export default Todos;