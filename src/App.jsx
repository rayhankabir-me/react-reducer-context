import { useState } from "react";
import "./App.css";
import AddTasks from "./components/AddTasks";
import TaskLists from "./components/TaskLists";

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleAddTask(text) {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ]);
  }

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((t) => t.id !== taskId));
  }

  function onChangeTask(task) {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  }

  return (
    <>
      <h1>Tasks Manager App</h1>
      <AddTasks onAddTask={handleAddTask} />
      <TaskLists
        onChangeTask={onChangeTask}
        onDeleteTask={handleDeleteTask}
        tasks={tasks}
      />
    </>
  );
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

export default App;
