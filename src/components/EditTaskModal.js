import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { styled, keyframes } from "styled-components";
import { BaseButton } from "./GlobalStyles";

const EditTaskModal = ({ setTasks, setHistory, task }) => {
  const [open, setOpen] = useState(false);

  function handleEdit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData
      .get("name")
      ?.toLowerCase()
      .trim()
      .replace(/\b\w/g, (char) => char.toUpperCase());
    const category = formData
      .get("category")
      ?.toLowerCase()
      .trim()
      .replace(/\b\w/g, (char) => char.toUpperCase());
    const time = new Date().toUTCString();

    if (!name || !category) return;

    setHistory((history) => [
      ...history,
      {
        ...task,
        name: `${task.name} → ${name}`,
        category: `${task.category} → ${category}`,
        time,
        status: "Modified",
      },
    ]);

    setTasks((tasks) =>
      tasks.map((t) => (t.id === task.id ? { ...task, name, category } : t))
    );

    setOpen(false);
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <BaseButton>Edit profile</BaseButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <StyledDialogOverlay />
        <StyledDialogContent>
          <h2>Modifying: {task.name}</h2>
          <StyledForm onSubmit={handleEdit}>
            <StyledName
              name="name"
              type="text"
              defaultValue={task.name}
              placeholder="Insert task name"
              maxLength="32"
            />
            <StyledName
              name="category"
              type="text"
              defaultValue={task.category}
              placeholder="Insert category name"
              maxLength="32"
            />
            <BaseButton type="submit">Modify</BaseButton>
          </StyledForm>
        </StyledDialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

const overlayShow = keyframes`
  from {
    opacity: 0;
  } 
  to {
    opacity: 1;
  }
`;

const contentShow = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

const StyledDialogOverlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.25);
  position: fixed;
  inset: 0;
  animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

const StyledDialogContent = styled(Dialog.Content)`
  background-color: white;
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px;
  animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);

  &:focus {
    outline: none;
  }
`;

export default EditTaskModal;
