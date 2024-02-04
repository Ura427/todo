import React, { useEffect, useState } from "react";
import Card, { CardVariant } from "./components/Card";

import { ITodo } from "./types/types";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
  const [lastId, setLastId] = useState<number>();
  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: 1,
      task: "Learn how to work with interfaces",
      completed: false,
      created: new Date().toDateString(),
    },
    {
      id: 2,
      task: "Fix the fridge",
      completed: false,
      created: new Date().toDateString(),
    },
  ]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>Todo App</h1>
      <AddTodo setTodos={setTodos}></AddTodo>
      <div style={{ margin: "2rem" }}>
        <TodoList todos={todos} setTodos={setTodos}></TodoList>
      </div>
    </div>
  );
}

export default App;
