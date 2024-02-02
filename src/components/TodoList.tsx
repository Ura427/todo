import React from "react";
import { ITodo } from "../types/types";
import TodoItem from "./TodoItem";

interface TodoListProps{
    todos: ITodo[]
}

const TodoList: React.FC<TodoListProps> = ({todos}) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
