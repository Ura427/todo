import React, { useState } from "react";
import { ITodo } from "../types/types";
import axios from "axios";

interface AddTodoProps {
  // fetchTodos: Promise<void>;
  fetchTodos: any
}

const AddTodo: React.FC<AddTodoProps> = ({ fetchTodos }) => {
  const [inputValue, setInputValue] = useState<string>("");


  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const btnClickHandler = (e: React.MouseEvent) => {
   
    axios
      .post(`http://localhost:5000/api/todos/`, { task: inputValue })
      .then((response) => {
        fetchTodos()
        console.log(response.data)
      })
      .catch((error: any) => {
        console.error(error)
      });
  };

  return (
    <div>
      <input value={inputValue} onChange={inputChangeHandler}></input>
      <button onClick={btnClickHandler}>Add</button>
    </div>
  );
};

export default AddTodo;
