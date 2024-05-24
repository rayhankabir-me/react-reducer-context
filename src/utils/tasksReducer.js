function tasksReducer(tasks, action) {
  if (action.type === "added") {
    return [
      ...tasks,
      {
        id: action.id,
        text: action.text,
        done: false,
      },
    ];

    //usign immer
    // tasks.push({
    //   id: action.id,
    //   text: action.text,
    //   done: false,
    // });
  } else if (action.type === "changed") {
    //using immer
    // const index = tasks.findIndex((t) => t.id === action.task.id);
    // tasks[index] = action.task;

    return tasks.map((t) => {
      if (t.id === action.task.id) {
        return action.task;
      } else {
        return t;
      }
    });
  } else if (action.type === "deleted") {
    return tasks.filter((t) => t.id !== action.id);
  } else {
    throw Error("Unknown action: " + action.type);
  }
}

export default tasksReducer;
