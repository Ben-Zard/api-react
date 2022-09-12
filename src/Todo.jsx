import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";

const Todo = () => {
  let { id } = useParams();
//   dotodetails is still undefined so need to set usestate to blank object 
  const [todosdetails, setTodosdetails] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        const jsonparsed = res.data;
        setTodosdetails(jsonparsed);
      });
  }, []);

  const { id: todoId, userId, title, completed } = todosdetails;
  return (
    <div>
      {/* inital when request is sent the use effect is still running so this need 
    turniarry to wait and  then display */}
      {todosdetails ? (
        <div>
          <h1>{`This is the todo id ${todoId}`}</h1>
          <h3>{`This is the todo id ${userId}`}</h3>
          <h4>{`This is the todo id ${title}`}</h4>
          <h5>{`This is the todo id ${completed}`}</h5>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Todo;
