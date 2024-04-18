/* eslint-disable react/prop-types */
import { useState } from "react";
export default function TaskLists({ tasks, onDeleteTask, onChangeTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task
            onChangeTask={onChangeTask}
            onDeleteTask={onDeleteTask}
            task={task}
          />
        </li>
      ))}
    </ul>
  );
}

function Task({ task, onDeleteTask, onChangeTask }) {
  const [isEditing, setIsEditing] = useState(false);

  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(e) => {
            onChangeTask({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onChangeTask({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {taskContent}
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </label>
  );
}
