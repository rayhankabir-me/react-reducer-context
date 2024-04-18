/* eslint-disable react/prop-types */
import { useState } from "react";
export default function AddTasks({ onAddTask }) {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        placeholder="Add task"
        value={text}
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
    </div>
  );
}
