import { useReducer } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Heading from "./components/Heading";
import Section from "./components/Section";
import TaskList from "./components/TaskList";
import { TasksContext, TasksDispatchContext } from "./utils/TasksContext";
import tasksReducer from "./utils/tasksReducer.js";

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <>
      <h1>Tasks Manager App</h1>
      <TasksContext.Provider value={tasks}>
        <TasksDispatchContext.Provider value={dispatch}>
          <AddTask />
          <TaskList />
        </TasksDispatchContext.Provider>
      </TasksContext.Provider>

      <h1 style={{ marginTop: "80px" }}>Context Theory with Heading Example</h1>
      <Section level={1}>
        <Heading>Title</Heading>
        <Section level={2}>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Section level={3}>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Section level={4}>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
            </Section>
          </Section>
        </Section>
      </Section>
    </>
  );
}

const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

export default App;
