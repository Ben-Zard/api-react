import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { CircularProgress } from "@mui/material";

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
        <div>
          {todos.map((todo) => {
            const { title, completed } = todo;
            return (
              <div>
                <h3>{title}</h3>
                <h2>{`Completed: ${completed}`}</h2>
              </div>
            );
          })}
        </div>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default Todos;
