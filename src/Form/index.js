import React, { useState } from "react";
import "./style.css";

const Form = ({addNewTask}) => {

  const [newTaskContent, setNewTaskContent] = useState("");
  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  }

  return (
    <form
      onSubmit={onFormSubmit}
      className="form">
      <h2 className="form__header">Dodaj nowe zadanie</h2>
      <div className="form__inputContainer">
        <input
          value={newTaskContent}
          onChange={({target}) => setNewTaskContent(target.value)}
          type="text"
          className="form__input"
          placeholder="Co jest do zrobienia?" />
        <button className="form__button">Dodaj zadanie</button>
      </div>
    </form>
  );
}

export default Form;

