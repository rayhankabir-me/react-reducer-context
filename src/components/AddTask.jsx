/* eslint-disable react/prop-types */
import { useState } from "react";
export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");

  return (
    <>
      <input
        type="text"
        value={text}
        placeholder="Task Name"
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
      >
        Add Task
      </button>
    </>
  );
}
