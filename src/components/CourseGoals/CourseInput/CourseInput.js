import alertify from "alertifyjs";
import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";
import "alertifyjs/build/css/alertify.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const inputValue = enteredValue.trim().length;

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (inputValue === 0) {
      alertify.error("Input cannot be empty", 1);
      return;
    }
    alertify.success("Added", 2);
    props.onAddGoal(enteredValue);
  };

  const deleteAll = () => {
    props.onDelete("");
  };
  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div className="form-control">
          <label>Course Goal</label>
          <input type="text" onChange={goalInputChangeHandler} />
        </div>
        <div className="main">
          <Button type="submit">Add Goal</Button>
          <Button type="button" onClick={deleteAll}>
            Delete all
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CourseInput;
