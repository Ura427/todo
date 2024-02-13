import React from "react";


//TYPES
import { ITodo } from "../types/types";

//COMPONENTS
import TodoItem from "./TodoItem";

//PROPS
interface TodoListProps {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  fetchTodos: () => Promise<void>
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos, fetchTodos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} fetchTodos={fetchTodos}/>
      ))}
    </div>
  );
};

export default TodoList;
