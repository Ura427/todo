import React from "react";

//TYPES
import { ITodo } from "../types/types";

//COMPONENTS
import TodoItem from "./TodoItem";
import InfiniteScroll from "react-infinite-scroll-component";

//PROPS
interface TodoListProps {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  fetchTodos: () => Promise<void>;
  hasMore: boolean
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos, fetchTodos, hasMore }) => {
  return (
    <div>
       <InfiniteScroll
          dataLength={todos.length} //This is important field to render the next data
          next={fetchTodos}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center", color: "#FFF", fontFamily: "Open Sans" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          style={{
            width: "500px"
          }}
        >
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
              fetchTodos={fetchTodos}
            />
          ))}
        </InfiniteScroll>
    </div>
  );
};

export default TodoList;
