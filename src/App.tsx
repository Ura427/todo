import React, { useEffect, useState } from "react";
import Card, { CardVariant } from "./components/Card";

import { ITodo } from "./types/types";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

import axios from "axios";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  // const [sortOption, setSortOption] = useState<string>("id");

  // const sortOptionHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSortOption(e.target.value);
  // };

  // console.log(sortOption);




  useEffect(() => {
    fetchTodos()
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/todos");
      if (Array.isArray(response.data)) {
        const responseData: ITodo[] = response.data;
        setTodos(responseData);
      } else {
        console.error("Invalid data format received:", response.data);
      }
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };
  
/*   const fetchTodos = () => {
    console.log("fetchTodos");
    axios
      .get("http://localhost:5000/api/todos")
      .then((response) => {
        if (Array.isArray(response.data)) {
          const responseData: ITodo[] = response.data; // Ensure data is an array of ITodo
          setTodos(responseData); // Update state
        } else {
          console.error("Invalid data format received:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  } */


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
      <AddTodo fetchTodos={fetchTodos}></AddTodo>
      <div style={{ margin: "2rem" }}>
        {/* <label htmlFor="sort">Sort by</label>
        <select name="sort" onChange={sortOptionHandler}>
          <option value={"id"}>id</option>
          <option value={"alphabet"}>alphabet</option>
          <option value={"date"}>date</option>
        </select> */}
        <TodoList
          todos={todos}
          setTodos={setTodos}
          fetchTodos={fetchTodos}
          // sortOption={sortOption}
        ></TodoList>
      </div>
    </div>
  );
}

export default App;
