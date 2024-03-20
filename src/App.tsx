// import React, { useEffect, useState } from "react";
// import axios from "axios";

// //TYPE
// import { ITodo } from "./types/types";

// //COMPONENTS
// import TodoList from "./components/TodoList";
// import AddTodo from "./components/AddTodo";
// import InfiniteScroll from "react-infinite-scroll-component";
// import TodoItem from "./components/TodoItem";

// function App() {
//   const [todos, setTodos] = useState<ITodo[]>([]);
//   const backendURL = "http://localhost:5000";

//   //SORT TODOS
//   const sortOptionHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const sortOption: string = e.target.value;
//     let sortedArray: ITodo[] = [...todos];

//     switch (sortOption) {
//       case "alphabet":
//         sortedArray.sort((a, b) => a.task?.localeCompare(b.task));

//         break;
//       case "date":
//         sortedArray.sort(
//           (a, b) =>
//             new Date(a.created).getTime() - new Date(b.created).getTime()
//         );
//         break;
//       case "id":
//         sortedArray.sort((a, b) => a.id - b.id);
//         break;
//       default:
//         break;
//     }

//     setTodos(sortedArray);
//   };

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   //FETCH DATA FROM BACKEND
//   const fetchTodos = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/todos");
//       if (Array.isArray(response.data)) {
//         const responseData: ITodo[] = response.data;
//         setTodos(responseData);
//       } else {
//         console.error("Invalid data format received:", response.data);
//       }
//     } catch (error) {
//       console.error("Error fetching todos:", error);
//     }
//   };

//   const fetchMoreData = () => {
//     // a fake async api call like which sends
//     // 20 more records in 1.5 secs
//     setTimeout(() => {
//       setState({
//         items: state.items.concat(Array.from({ length: 20 }))
//       });
//     }, 1500);
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         height: "100vh",
//       }}
//     >
//       <h1>Todo App</h1>
//       <AddTodo fetchTodos={fetchTodos}></AddTodo>
//       <div style={{ margin: "2rem" }}>
//         <label htmlFor="sort">Sort by</label>
//         <select name="sort" onChange={sortOptionHandler}>
//           <option value={"id"}>id</option>
//           <option value={"alphabet"}>alphabet</option>
//           <option value={"date"}>date</option>
//         </select>
//         {/* <TodoList
//           todos={todos}
//           setTodos={setTodos}
//           fetchTodos={fetchTodos}
//         ></TodoList> */}

//         <InfiniteScroll
//           dataLength={todos.length} //This is important field to render the next data
//           next={fetchData}
//           hasMore={true}
//           loader={<h4>Loading...</h4>}
//           endMessage={
//             <p style={{ textAlign: "center" }}>
//               <b>Yay! You have seen it all</b>
//             </p>
//           }
//           // below props only if you need pull down functionality
//           // refreshFunction={refresh}
//           // pullDownToRefresh
//           // pullDownToRefreshThreshold={50}
//           // pullDownToRefreshContent={
//           //   <h3 style={{ textAlign: "center" }}>
//           //     &#8595; Pull down to refresh
//           //   </h3>
//           // }
//           // releaseToRefreshContent={
//           //   <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
//           // }
//         >
//           {todos.map((todo) => (
//             <TodoItem
//               key={todo.id}
//               todo={todo}
//               todos={todos}
//               setTodos={setTodos}
//               fetchTodos={fetchTodos}
//             />
//           ))}
//         </InfiniteScroll>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import axios from "axios";

//TYPE
import { ITodo } from "./types/types";

//COMPONENTS
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import InfiniteScroll from "react-infinite-scroll-component";
import TodoItem from "./components/TodoItem";

import "../src/App.css";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 12; // Change this value as per your requirement
  const backendURL = "http://localhost:5000";

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

  useEffect(() => {
    fetchTodos();
  }, []);

  //FETCH DATA FROM BACKEND
  const fetchTodos = async () => {
    console.log("fetch data");
    try {
      const response = await axios.get(
        `http://localhost:5000/api/todos?page=${page}&limit=${itemsPerPage}`
      );
      if (Array.isArray(response.data)) {
        const responseData: ITodo[] = response.data;
        console.log(responseData)
        setTodos((prevTodos) => [...prevTodos, ...responseData]);
        setPage((prevPage) => prevPage + 1);
        if (responseData.length < itemsPerPage) {
          setHasMore(false);
        }
      } else {
        console.error("Invalid data format received:", response.data);
      }
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        width: "100%",
        // backgroundColor: "#CEAB93",
        backgroundColor: "#E3CAA5"
      }}
    >
      <h1
        style={{
          // color: "#AD8B73",
          // color: "#CEAB93"
          // color: "#E3CAA5"
          // color: "#FFFBE9"
          color: "#FFF",
          fontFamily: "Open Sans"
        }}
      >
        Todo App
      </h1>
      <AddTodo fetchTodos={fetchTodos}></AddTodo>
      <div style={{ margin: "2rem" }}>
        <label htmlFor="sort" style={{ color: "#FFF", fontFamily: "Open Sans"}}>Sort by</label>
        <select
          name="sort"
          style={{ marginLeft: "0.25rem", border: "none", outline: "none", fontFamily: "Open Sans" }}
          onChange={sortOptionHandler}
        >
          <option value={"id"}>id</option>
          <option value={"alphabet"}>alphabet</option>
          <option value={"date"}>date</option>
        </select>
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
    </div>
  );
}

export default App;
