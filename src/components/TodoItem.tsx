import React, { useState } from "react";
import { ITodo } from "../types/types";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";

interface TodoItemProps {
  todo: ITodo;
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, todos, setTodos }) => {
  const [disabled, setDisabled] = useState<boolean>(true);
   const [task, setTask] = useState<string | undefined>(todo.task)
    
  const handleCheckboxChange = (id: number) => {
    setTodos(todos.filter((todo: ITodo) => todo.id !== id));
  };

  const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value)
  }

  const btnClickHandler = (id: number) => {
    setDisabled((prev) => !prev);

    // if (disabled === true) {
    //   setTodos(
    //     todos.map((todo) => {
    //       if (todo.id === id) {
    //         todo[task] ===
    //       }
    //     })
    //   );
    // }
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
      {disabled === true ? <>{task}</> : <><input type="text"  value={task} onChange={handleTaskChange}></input>{" "}</> }
      
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleCheckboxChange(todo.id)}
      />
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
