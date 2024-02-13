import React, { useEffect, useState } from "react";
import axios from "axios";

//TYPE
import { ITodo } from "./types/types";

//COMPONENTS
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";


function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const backendURL = "http://localhost:5000";
  
  //SORT TODOS
  const sortOptionHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortOption: string = e.target.value;
    let sortedArray: ITodo[] = [...todos];

    switch (sortOption) {
      case "alphabet":
        sortedArray.sort((a, b) => a.task?.localeCompare(b.task));

        break;
      case "date":
        sortedArray.sort(
          (a, b) =>
            new Date(a.created).getTime() - new Date(b.created).getTime()
        );
        break;
      case "id":
        sortedArray.sort((a, b) => a.id - b.id);
        break;
      default:
        break;
    }

    setTodos(sortedArray);
  };



  useEffect(() => {
    fetchTodos();
  }, []);

  //FETCH DATA FROM BACKEND
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

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>Todo App</h1>
      <AddTodo fetchTodos={fetchTodos}></AddTodo>
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
          fetchTodos={fetchTodos}
        ></TodoList>
      </div>
    </div>
  );
}

export default App;
