import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { BaseButton } from "./GlobalStyles";

const CreateTask = ({ tasks, setTasks, history, setHistory }) => {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const taskName = formData.get("taskName")?.trim();
    const id = uuidv4();

    const dateObject = new Date();

    const deleteTime = dateObject.toUTCString();

    if (!taskName) return;

    setTasks([...tasks, { id, name: taskName }]);

    setHistory([
      ...history,
      {
        id,
        taskName,
        deleteTime,
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
      <BaseButton type="submit">Add</BaseButton>
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
  justify-content: space-between;
`;

const StyledName = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  border-radius: 0.7rem;
  padding: 0.2rem 0.8rem;
  height: 2rem;
  width: 100%;
  margin-right: 0.6rem;
  font-size: 1.6rem;
  color: #1f1f1f;
`;

export default CreateTask;
