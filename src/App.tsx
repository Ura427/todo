import React, { useEffect, useState } from "react";
import Card, { CardVariant } from "./components/Card";

import { ITodo } from "./types/types";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: 1,
      task: "Learn how to work with interfaces",
      created: new Date().toDateString(),
    },
    {
      id: 2,
      task: "Fix the fridge",
      created: new Date().toDateString(),
    },
  ]);
  const [sortOption, setSortOption] = useState<string>("id");

  const sortOptionHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  console.log(sortOption);
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
        <label htmlFor="sort">Sort by</label>
        <select name="sort" onChange={sortOptionHandler}>
          <option value={"id"}>id</option>
          <option value={"alphabet"}>alphabet</option>
          <option value={"date"}>date</option>
        </select>
        <TodoList
          todos={todos}
          setTodos={setTodos}
          sortOption={sortOption}
        ></TodoList>
      </div>
    </div>
  );
}

export default App;
