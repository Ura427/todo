import React, { useState } from "react";
import { ITodo } from "../types/types";

interface AddTodoProps {
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const AddTodo: React.FC<AddTodoProps> = ({ setTodos }) => {
  const [inputValue, setInputValue] = useState<string>();
  const [lastId, setLastId] = useState<number>(3);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const btnClickHandler = (e: React.MouseEvent) => {
    // Create a new Date object from the date string
    const date = new Date();

    // Get the month, date, year, hours, minutes, and seconds from the Date object
    const month = date.toLocaleString("en", { month: "short" });
    const day = date.getDate();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // Format the date in the desired format
    const formattedDate = `${month} ${day} ${year} ` +
  `${hours}:${minutes}:${seconds}`.replace(/(?<!\d)(\d)(?!\d)/g, '0$1');


    //Create new Todo obj
    const obj: ITodo = {
      id: lastId,
      task: inputValue,
      completed: false,
      created: formattedDate,
    };

    setTodos((prevState: ITodo[]) => [...prevState, obj]);
    setInputValue("");
    setLastId((prev) => prev + 1);
    console.log("BTN clicked");
  };

  return (
    <div>
      <input value={inputValue} onChange={inputChangeHandler}></input>
      <button onClick={btnClickHandler}>Add</button>
    </div>
  );
};

export default AddTodo;
