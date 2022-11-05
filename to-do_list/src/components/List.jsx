import React from "react";
import ListItem from "./ListItem";
function List() {
  return (
    <fieldset className="list">
      <legend>List/</legend>
      <p>Some list</p>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </fieldset>
  );
}

export default List;
