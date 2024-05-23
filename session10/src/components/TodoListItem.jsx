// src/components/TodoList.js
import React, { useState } from "react";

import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const [editItem, setEditItem] = useState(null);
  const handleEdit = (todo) => {
    setEditItem(todo);
  };

  const clearEdit = () => {
    setEditItem(null);
  };

  return (
    <div>
      <TodoInput editItem={editItem} clearEdit={clearEdit} />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onEdit={handleEdit} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
