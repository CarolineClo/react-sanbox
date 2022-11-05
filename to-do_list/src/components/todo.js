const toDo = [{ task: "Make a list" }, { task: "Check off the list" }, { task: "Add another task" }, { task: "Check it off the list" }, { task: "Add yet another task" }, { task: "You get the idea..." }];

export function getToDO() {
  const toDoList = toDo.map((aTask) => {
    const [task] = aTask.task;
    return { task: task };
  });
}
