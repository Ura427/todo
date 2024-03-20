import React, { useState } from "react";
import axios from "axios";

//TYPES
import { ITodo } from "../types/types";

//MUI ICONS
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";

//PROPS
interface TodoItemProps {
  todo: ITodo;
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  fetchTodos: () => Promise<void>;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  todos,
  setTodos,
  fetchTodos,
}) => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [currTodo, setCurrTodo] = useState<ITodo>(todo);

  //DELETE TODO
  const handleCheckboxChange = (id: number) => {
    axios
      .delete(`http://localhost:5000/api/todos/${id}`)
      .then((response) => {
        console.log(response.data);
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
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

  //CHANGE TODO TASK
  const btnClickHandler = (id: number) => {
    setDisabled((prev) => !prev);

    if (!disabled) {
      axios
        .put(`http://localhost:5000/api/todos/${id}`, {
          id: id,
          task: currTodo.task,
        })
        .then((response) => {
          console.log(response.data);
          fetchTodos();
        })
        .catch((error: any) => {
          console.error(error);
        });
    }
  };

  return (
    <div
      style={{
        // background: "#E3CAA5",
        // background: "#AD8B73",
        background: "#FFFBE9",
        // background: "#CEAB93",
        // border: "1px solid lightyellow",
        borderRadius: "0.25rem",
        padding: "0.5rem",
        margin: "0.25rem",
        display: "flex",
        alignItems: "center",
      }}
    >
      <input
        type="checkbox"
        style={{
          border: "none",
        }}
        onChange={() => handleCheckboxChange(todo.id)}
      />
      {/* <span>{todo.id}: </span> */}
      {disabled === true ? (
        <span
          style={{
            color: "#AD8B73",
            // color: "#CEAB93"
            // color: "#FFFBE9"
            // color: "#FFF"
            flex: "1",
            fontFamily: "Bad Script",
            fontWeight: "400",
            fontStyle: "normal",
            margin: "0 0.5rem"

          }}
        >
          {currTodo.task}
        </span>
      ) : (
        <>
          <input
            type="text"
            value={currTodo.task}
            style={{
              flex: "1",
              border: "none",
              outline: "none",
            }}
            onChange={handleTaskChange}
          ></input>{" "}
        </>
      )}
      <button
        style={{
          border: "none",
          // backgroundColor: "#CEAB93"
          backgroundColor: "#E3CAA5",
          borderRadius: "1rem"
        }}
        onClick={() => btnClickHandler(todo.id)}
      >
        {disabled === true ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* <span>Edit</span>  */}
            <EditIcon />
          </div>
        ) : (
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* <span>Done</span>  */}
            <DoneIcon />
          </div>
        )}
      </button>
      <span
        style={{
          fontSize: "0.5rem",
          marginTop: "1rem",
          marginLeft: "0.5rem",
          whiteSpace: "nowrap",
          color: "#AD8B73",
          fontWeight: "bold",
          fontFamily: "Open Sans"
        }}
      >
        {todo.created.toString()}
      </span>
    </div>
  );
};

export default TodoItem;
