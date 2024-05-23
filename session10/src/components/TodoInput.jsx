// src/components/TodoInput.js
import React, { useEffect, useState } from "react";
import { addTodo, editTodo } from "../redux/reducer/todosSlice";

import { useDispatch } from "react-redux";

const TodoInput = ({ editItem, clearEdit }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (editItem) {
      setText(editItem.text);
    }
  }, [editItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      if (editItem) {
        dispatch(editTodo({ id: editItem.id, text }));
        clearEdit(); 
      } else {
        dispatch(addTodo(text));
      }
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">{editItem ? "Save" : "Add"}</button>
      {editItem && (
        <button type="button" onClick={clearEdit}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default TodoInput;
