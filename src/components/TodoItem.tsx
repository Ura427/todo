import React from "react";
import { ITodo } from "../types/types";

interface TodoItemProps {
  todo: ITodo;
  todos: ITodo[],
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>
}



const TodoItem: React.FC<TodoItemProps> = ({ todo, todos, setTodos }) => {

    // const 

    const handleCheckboxChange = (id: number) => {
        setTodos(todos.filter((todo: ITodo) => todo.id !== id))
    }

  return (
    <div
      style={{
        background: "lightgreen",
        border: "1px solid lightyellow",
        padding: "0.5rem",
      }}
    >
      {todo.id}: {todo.task} <input type="checkbox" checked={todo.completed} onChange={() => handleCheckboxChange(todo.id)} />{" "}
      {todo.created.toString()}
    </div>
  );
};

export default TodoItem;
