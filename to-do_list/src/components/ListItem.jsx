import React from "react";

function ListItem(props) {
  return (
    <fieldset className="list_item">
      <legend>ListItem/</legend>
      <p>{props.task}</p>
      <button>Complete</button>
    </fieldset>
  );
}

export default ListItem;
