import React from "react";
import { ITodo } from "../types/types";
import TodoItem from "./TodoItem";

interface TodoListProps{
    todos: ITodo[],
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>
}



const TodoList: React.FC<TodoListProps> = ({todos, setTodos}) => {



  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}

export default TodoList;
