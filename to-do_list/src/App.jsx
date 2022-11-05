import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

const toDo = [{ task: "Make a list" }, { task: "Check off the list" }, { task: "Add another task" }, { task: "Check it off the list" }, { task: "Add yet another task" }, { task: "You get the idea..." }];

function App() {
  return (
    <fieldset className="App">
      <legend>App/</legend>
      <Form />
      <List></List>
    </fieldset>
  );
}

export default App;
console.log(toDo);
