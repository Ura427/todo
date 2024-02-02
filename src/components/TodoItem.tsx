import React from "react";
import { ITodo } from "../types/types";

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <div
      style={{
        background: "lightgreen",
        border: "1px solid lightyellow",
        padding: "0.5rem",
      }}
    >
      {todo.id}: {todo.task} <input type="checkbox" checked={todo.completed}/> {todo.created.toString()}
    </div>
  );
};

export default TodoItem;
