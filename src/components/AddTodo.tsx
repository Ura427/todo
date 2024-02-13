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
    <div>
      <input value={inputValue} onChange={inputChangeHandler}></input>
      <button onClick={btnClickHandler}>Add</button>
    </div>
  );
};

export default AddTodo;
