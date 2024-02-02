import React, { useState } from "react";

function AddTodo() {
  const [inputValue, setInputValue] = useState<string>();

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const btnClickHandler = (e: React.MouseEvent) => {
    console.log("BTN clicked")
  }

  return (
    <div>
      <input value={inputValue} onChange={inputChangeHandler}></input>
      <button onClick={btnClickHandler}>Add</button>
    </div>
  );
}

export default AddTodo;
