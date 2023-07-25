import styled from "styled-components";
import { BaseButton } from "./GlobalStyles";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

const CreateTask = ({ tasks, setTasks, setHistory, onNewCategory }) => {
  const [nameInput, setNameInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  const nameRef = useRef(null);
  const categoryRef = useRef(null);

  const handleNameEdit = (e) => {
    setNameInput(e.target.value);
  };

  const handleCategoryEdit = (e) => {
    setCategoryInput(e.target.value);
  };

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

    setNameInput("");
    setCategoryInput("");
    nameRef.current.blur();
    categoryRef.current.blur();
  }
  return (
    <StyledForm
      onSubmit={handleSubmit}
      initial={{ opacity: 0, scale: 0.8, transformOrigin: "left center" }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <StyledName
        name="name"
        type="text"
        ref={nameRef}
        value={nameInput}
        onChange={handleNameEdit}
        placeholder="Insert task name"
        maxLength="32"
      />
      <StyledName
        name="category"
        type="text"
        ref={categoryRef}
        value={categoryInput}
        onChange={handleCategoryEdit}
        placeholder="Insert category name"
        maxLength="32"
      />
      <BaseButton
        type="submit"
        style={{
          backgroundColor: "#4F40FF",
          color: "white",
          border: "0.1rem solid #6A5DFF",
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.875 7.875H10.125V1.125C10.125 0.826631 10.0065 0.540484 9.79549 0.329505C9.58452 0.118527 9.29837 0 9 0C8.70163 0 8.41548 0.118527 8.20451 0.329505C7.99353 0.540484 7.875 0.826631 7.875 1.125V7.875H1.125C0.826631 7.875 0.540484 7.99353 0.329505 8.20451C0.118527 8.41548 0 8.70163 0 9C0 9.29837 0.118527 9.58452 0.329505 9.79549C0.540484 10.0065 0.826631 10.125 1.125 10.125H7.875V16.875C7.875 17.1734 7.99353 17.4595 8.20451 17.6705C8.41548 17.8815 8.70163 18 9 18C9.29837 18 9.58452 17.8815 9.79549 17.6705C10.0065 17.4595 10.125 17.1734 10.125 16.875V10.125H16.875C17.1734 10.125 17.4595 10.0065 17.6705 9.79549C17.8815 9.58452 18 9.29837 18 9C18 8.70163 17.8815 8.41548 17.6705 8.20451C17.4595 7.99353 17.1734 7.875 16.875 7.875Z"
            fill="white"
          />
        </svg>
        Add
      </BaseButton>
    </StyledForm>
  );
};

const StyledForm = styled(motion.form)`
  display: flex;
  padding: 0.6rem;
  border-radius: 1.3rem;
  margin: 1rem 2rem 0rem 5px;
  background-color: #fcfcfc;
  border: 0.2rem solid #f0f0f0;
  justify-content: space-between;
  filter: drop-shadow(0px 1px 2.5px rgba(0, 0, 0, 0.2));
  text-shadow: 0px 1px 2.5px rgba(0, 0, 0, 0.2);
`;

const StyledName = styled.input`
  background-color: #f0f0f0;
  border: none;
  outline: none;
  border-radius: 0.7rem;
  padding: 0.2rem 0.8rem;
  height: 2.4rem;
  width: 100%;
  margin-inline: 0.3rem;
  font-size: 1.3rem;
  font-weight: 600;
  color: #303547;
  transition: 0.4s;
  filter: drop-shadow(0px 1px 2.5px rgba(0, 0, 0, 0.1));
  text-shadow: 0px 1px 2.5px rgba(0, 0, 0, 0.1);
  &::placeholder {
    font-weight: 200;
    color: #cacaca;
  }
  &:hover {
    background-color: #e3e3e3;
    border-radius: 20px;
  }
  &:focus {
    border-radius: 20px;
  }
`;

export default CreateTask;
