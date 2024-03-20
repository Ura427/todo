import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";

//TYPES
import { ITodo } from "../types/types";

//PROPS
interface AddTodoProps {
  fetchTodos: () => Promise<void>;
}

//COMPONENT
const AddTodo: React.FC<AddTodoProps> = ({ fetchTodos }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  //ADD TODO TO DB
  const btnClickHandler = (e: React.MouseEvent) => {
    axios
      .post<any, AxiosResponse<ITodo>>(`http://localhost:5000/api/todos/`, {
        task: inputValue,
      })
      .then((response) => {
        fetchTodos();
        console.log(response.data);
      })
      .catch((error: any) => {
        console.error(error);
      });
      setInputValue("")
  };

  return (
    <div style={{
      display: "flex"
    }}>
      <input 
      style={{
        border: "none",
        outline: "none"
      }}
      value={inputValue} onChange={inputChangeHandler}></input>
      <button style={{
        padding: "0.25rem  0.75rem",
        border: "none",
        fontFamily: "Open Sans",
        outline: "none"
      }} 
      onClick={btnClickHandler}>Add</button>
    </div>
  );
};

export default AddTodo;
