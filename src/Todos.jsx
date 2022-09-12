import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import { TodoCard } from "./TodoCard";

const Todos = () => {
  const [todos, setTodos] = useState();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      const jsonparse = res.data;
      setTodos(jsonparse);
    });
  }, []);
  console.log(todos);

  return (
    <>
      {todos ? (
        <div style = {{display: "flex", flexWrap: "wrap" }}>
            {/* grab first 10 with slice map over from prop passed to ToDoCard */}
          {todos.slice(0,10).map((todo) => <TodoCard todo = {todo}/>
          )}
        </div>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default Todos;
