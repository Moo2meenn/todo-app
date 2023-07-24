import React from "react";
import styled from "styled-components";
import { BaseButton } from "./GlobalStyles";
import { v4 as uuidv4 } from "uuid";

const CreateTask = ({ tasks, setTasks, setHistory, onNewCategory }) => {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData
      .get("name")
      ?.toLowerCase()
      .trim()
      .replace(/\b\w/g, (char) => char.toUpperCase()); // proper case
    const category = formData
      .get("category")
      ?.toLowerCase()
      .trim()
      .replace(/\b\w/g, (char) => char.toUpperCase()); //proper case
    if (!name || !category) return;

    const time = new Date().toUTCString();
    const task = { name, id: uuidv4(), category };

    // Check if the category already exists in the tasks array
    const categoryExists = tasks.some((task) => task.category === category);

    // If the category doesn't exist, call the onNewCategory prop to handle the visibility
    if (!categoryExists && typeof onNewCategory === "function") {
      onNewCategory(category);
    }

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
        name="name"
        type="text"
        placeholder="Insert task name"
        maxLength="32"
      />
      <StyledName
        name="category"
        type="text"
        placeholder="Insert category name"
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
  background-color: white;
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
