import React from "react";

function Service(props) {
  return (
    <article className="flex2">
      {props.children}
      <h4>{props.title}</h4>
      <p>{props.content}</p>
    </article>
  );
}

export default Service;
