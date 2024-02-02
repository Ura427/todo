import React, { useEffect, useState } from "react";
import Card, { CardVariant } from "./components/Card";

import { ITodo } from "./types/types";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    setTodos([
      {
        id: 1,
        task: "Learn how to work with interfaces",
        completed: true,
        created: new Date(),
      },
      {
        id: 2,
        task: "Fix the fridge",
        completed: false,
        created: new Date(),
      },
    ]);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <AddTodo></AddTodo>
        <TodoList todos={todos}></TodoList>

        <Card
          id={0}
          text="Create project"
          status={true}
          variant={CardVariant.outlined}
          onClick={() => console.log("Clicked!")}
        >
          Some text
        </Card>
        <Card
          id={1}
          text="Create ts component"
          status={true}
          variant={CardVariant.primary}
        ></Card>
        <Card
          id={2}
          text="Repeat creating ts component for 7 times"
          status={true}
          variant={CardVariant.outlined}
        ></Card>
      </div>
    </div>
  );
}

export default App;
