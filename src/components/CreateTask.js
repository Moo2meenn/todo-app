import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const CreateTask = ({ tasks, setTasks }) => {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputValidation = formData.get("taskName")?.trim();

    if (!inputValidation) return;
    setTasks([...tasks, { id: uuidv4(), name: inputValidation }]);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledName name="taskName" type="text" placeholder="Insert task name" />
      <button type="submit">Done</button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  padding: 0.6rem;
  width: 40rem;
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
