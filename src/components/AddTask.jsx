/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { TasksDispatchContext } from "../utils/TasksContext";
export default function AddTask() {
  const [text, setText] = useState("");

  const dispatch = useContext(TasksDispatchContext);

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
          dispatch({
            type: "added",
            id: nextId++,
            text: text,
          });
        }}
      >
        Add Task
      </button>
    </>
  );
}

let nextId = 3;
