import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const CreateTask = ({ tasks, setTasks, history, setHistory }) => {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputValidation = formData.get("taskName")?.trim();
    const tId = uuidv4();

    const dateObject = new Date();
    let date = dateObject
      .toUTCString()
      .slice(0, dateObject.toDateString.length - 4);

    if (!inputValidation) return;
    setTasks([...tasks, { id: tId, name: inputValidation }]);
    setHistory([
      ...history,
      {
        id: tId,
        taskName: inputValidation,
        deleteTime: date,
        status: "Created",
      },
    ]);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledName
        name="taskName"
        type="text"
        placeholder="Insert task name"
        maxLength="32"
      />
      <button type="submit">Add</button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  padding: 0.6rem;
  width: 97.4%;
  border-radius: 1.3rem;
  margin: 1rem;
  background-color: lightblue;
`;

const StyledName = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  border-radius: 0.7rem;
  padding: 0.2rem 0.8rem;
  height: 2rem;
  width: 100%;
  font-size: 1.6rem;
  color: #1f1f1f;
`;

export default CreateTask;
