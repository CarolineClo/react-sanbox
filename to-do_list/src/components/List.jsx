import React from "react";
import ListItem from "./ListItem";
function List(props) {
  return (
    <fieldset className="list">
      <legend>List/</legend>
      <p>Some list</p>
      {props.list.map((task) => {
        return <ListItem deleteTask={props.deleteTask} task={task.task} id={task.id} key={task.id} />;
      })}
    </fieldset>
  );
}

export default List;
