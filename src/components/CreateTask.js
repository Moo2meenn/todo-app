import React from "react";
import styled from "styled-components";
import { BaseButton } from "./GlobalStyles";
import { v4 as uuidv4 } from "uuid";

const CreateTask = ({ setTasks, setHistory }) => {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("taskName")?.trim();

    if (!name) return;

    const time = new Date().toUTCString();
    const task = { name, id: uuidv4() };

    setTasks((tasks) => [...tasks, task]);

    setHistory((history) => [
      ...history,
      {
        ...task,
        time,
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
  border-radius: 1.3rem;
  margin: 1rem 2rem 0rem 0rem;
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
