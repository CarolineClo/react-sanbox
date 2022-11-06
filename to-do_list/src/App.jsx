import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

let nextId = 7;
const toDo = [
  { id: 1, task: "Make a list" },
  { id: 2, task: "Check off the list" },
  { id: 3, task: "Add another task" },
  { id: 4, task: "Check it off the list" },
  { id: 5, task: "Add yet another task" },
  { id: 6, task: "You get the idea..." },
];

function App() {
  const [list, setlist] = useState(toDo);

  function deleteTask(id) {
    setlist((oldlist) => oldlist.filter((task) => task.id != id));
  }
  function addTask(task) {
    const newTask = {
      id: nextId++,
      task: task,
    };
    setlist((oldTask) => oldTask.concat(newTask));
  }
  return (
    <fieldset className="App">
      <legend>App/</legend>

      <Form addTask={addTask} />
      <List deleteTask={deleteTask} list={list}></List>
    </fieldset>
  );
}

export default App;
console.log(toDo);
