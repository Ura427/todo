import React, { useState } from "react";
import { ITodo } from "../types/types";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import axios from "axios";

interface TodoItemProps {
  todo: ITodo;
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  fetchTodos: any;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, fetchTodos }) => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [currTodo, setCurrTodo] = useState<ITodo>(todo);

  const handleCheckboxChange = (id: number) => {
    axios
      .delete(`http://localhost:5000/api/todos/${id}`)
      .then((response) => {
        console.log(response.data);
        fetchTodos();
      })
      .catch((error) => {
        console.error(`Error deleting element: ${error}`);
      });
  };

  const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrTodo((prev) => ({
      ...prev,
      task: e.target.value,
    }));
    console.log(currTodo);    
  };

  const btnClickHandler = (id: number) => {
    setDisabled((prev) => !prev);

    if(!disabled){
      axios.put(`http://localhost:5000/api/todos/${id}`, {
        id: id,
        task: currTodo.task
      })
      .then((response) => {
        console.log(response.data)
        fetchTodos();
      })
      .catch((error: any) => {
        console.error(error)
      })
    }
   
  };

  return (
    <div
      style={{
        background: "lightgreen",
        border: "1px solid lightyellow",
        padding: "0.5rem",
      }}
    >
      {todo.id}:{" "}
      {disabled === true ? (
        <>{currTodo.task}</>
      ) : (
        <>
          <input
            type="text"
            value={currTodo.task}
            onChange={handleTaskChange}
          ></input>{" "}
        </>
      )}
      <input type="checkbox" onChange={() => handleCheckboxChange(todo.id)} />
      <button onClick={() => btnClickHandler(todo.id)}>
        {disabled === true ? (
          <>
            <EditIcon /> Edit
          </>
        ) : (
          <>
            <DoneIcon></DoneIcon> Done
          </>
        )}
      </button>{" "}
      {todo.created.toString()}
    </div>
  );
};

export default TodoItem;
