import React from "react";

function Form() {
  return (
    <fieldset className="form">
      <legend>Form/</legend>
      <input type="text" id="task" name="task" />
      <button>Add</button>
    </fieldset>
  );
}

export default Form;
