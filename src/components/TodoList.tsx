import React, { useEffect, useState } from "react";
import { ITodo } from "../types/types";
import TodoItem from "./TodoItem";
import axios from "axios";

interface TodoListProps {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  fetchTodos: any
  // sortOption: string;
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos, fetchTodos }) => {
  // const [sortedTodos, setSortedTodos] = useState<ITodo[]>(todos);

  const link = "http://localhost:5000";

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/todos")
  //     .then((response) => {
  //       if (Array.isArray(response.data)) {
  //         const responseData: ITodo[] = response.data; // Ensure data is an array of ITodo
  //         setTodos(responseData); // Update state
  //       } else {
  //         console.error("Invalid data format received:", response.data);
  //       }
  //     })
  //     .catch(
  //       (error) => {
  //         console.error("Error fetching todos:", error);
  //       }
  //     );
  // }, []);

  // useEffect(() => {
  //   let sortedArray = [...sortedTodos];

  //   switch (sortOption) {
  //     case "by alphabet":
  //       //   setSortedTodos(
  //       sortedArray.sort((a, b) => a.task?.localeCompare(b.task));
  //       // );
  //       break;
  //     case "by date":
  //       //   setSortedTodos(
  //       sortedArray.sort(
  //         (a, b) =>
  //           new Date(a.created).getTime() - new Date(b.created).getTime()
  //       );
  //       //   );
  //       break;
  //     default:
  //       break;
  //   }

  //   console.log(sortedArray)
  //   setSortedTodos(sortedArray);
  // }, [todos, sortOption]);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} fetchTodos={fetchTodos}/>
      ))}
    </div>
  );
};

export default TodoList;
