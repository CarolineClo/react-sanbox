import React from "react";

function Form(props) {
  function submit(e) {
    e.preventDefault();
    props.addTask(e.target.elements.task.value);
  }
  return (
    <fieldset className="form">
      <legend>Form/</legend>
      <form onSubmit={submit}>
        <p>Enter new task:</p>
        <input type="text" id="task" name="task" />
        <button>Add</button>
      </form>
    </fieldset>
  );
}

export default Form;
