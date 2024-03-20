import React, { useEffect, useState } from "react";
import axios from "axios";

//TYPE
import { ITodo } from "./types/types";

//COMPONENTS
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import InfiniteScroll from "react-infinite-scroll-component";
import TodoItem from "./components/TodoItem";

import "../src/App.css";
import SelectOption from "./components/SelectOption";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 12; // Change this value as per your requirement




  useEffect(() => {
    fetchTodos();
  }, []);

  //FETCH DATA FROM BACKEND
  const fetchTodos = async () => {
    console.log("fetch data");
    try {
      const response = await axios.get(
        `http://localhost:5000/api/todos?page=${page}&limit=${itemsPerPage}`
      );
      if (Array.isArray(response.data)) {
        const responseData: ITodo[] = response.data;
        console.log(responseData)
        setTodos((prevTodos) => [...prevTodos, ...responseData]);
        setPage((prevPage) => prevPage + 1);
        if (responseData.length < itemsPerPage) {
          setHasMore(false);
        }
      } else {
        console.error("Invalid data format received:", response.data);
      }
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        width: "100%",
        // backgroundColor: "#CEAB93",
        backgroundColor: "#E3CAA5"
      }}
    >
      <h1
        style={{
          // color: "#AD8B73",
          // color: "#CEAB93"
          // color: "#E3CAA5"
          // color: "#FFFBE9"
          color: "#FFF",
          fontFamily: "Open Sans"
        }}
      >
        Todo App
      </h1>
      <AddTodo fetchTodos={fetchTodos}></AddTodo>
      <div style={{ margin: "2rem" }}>
        <SelectOption todos={todos} setTodos={setTodos}/>
        <TodoList todos={todos} setTodos={setTodos} fetchTodos={fetchTodos} hasMore={hasMore} />
      </div>
    </div>
  );
}

export default App;
