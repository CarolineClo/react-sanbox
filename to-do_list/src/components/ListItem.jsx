import React from "react";

function ListItem(props) {
  ///props.deletTask()///
  return (
    <fieldset className="list_item">
      <legend>ListItem/</legend>
      <p>{props.task}</p>
      <button onClick={() => props.deleteTask(props.id)}>Complete</button>
    </fieldset>
  );
}

export default ListItem;
