import React from 'react';
import {useNavigate } from 'react-router-dom'

export const TodoCard = ({todo}) => {
    const { id,title, completed } = todo;
    let navigate = useNavigate();
    return (
    <div style = {{backgroundColor: "gray", margin: "10px", padding:"10px", width: "175px" }}
    onClick = {()=>navigate(`/todo/${id}`)}
    >
    <h2>{title}</h2>
    <h4>{`Completed: ${completed}`}</h4>
  </div>
);

}
