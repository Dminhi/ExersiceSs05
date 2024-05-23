// src/components/TodoItem.js
import React, { useState } from "react";
import { deleteTodo, toggleTodo } from "../redux/reducer/todosSlice";

import { useDispatch } from "react-redux";

const TodoItem = ({ todo, onEdit }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <>
        <span
          onClick={() => dispatch(toggleTodo(todo.id))}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
        </span>
        <button onClick={() => onEdit(todo)}>Edit</button>
        <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
      </>
    </li>
  );
};

export default TodoItem;
