import React from "react";
import { ITodo } from "../types/types";

interface SelectOptionProps {
    todos: ITodo[],
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>
}

function SelectOption({todos, setTodos}:SelectOptionProps) {

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

  return (
    <>
      <label htmlFor="sort" style={{ color: "#FFF", fontFamily: "Open Sans" }}>
        Sort by
      </label>
      <select
        name="sort"
        style={{
          marginLeft: "0.25rem",
          border: "none",
          outline: "none",
          fontFamily: "Open Sans",
        }}
        onChange={sortOptionHandler}
      >
        <option value={"id"}>id</option>
        <option value={"alphabet"}>alphabet</option>
        <option value={"date"}>date</option>
      </select>
    </>
  );
}

export default SelectOption;
