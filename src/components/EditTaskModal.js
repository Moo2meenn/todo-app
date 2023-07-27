import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { styled, keyframes } from "styled-components";
import { BaseButton, BaseH2 } from "./GlobalStyles";

const EditTaskModal = ({
  setTasks,
  setHistory,
  task,
  setExpandedCategories,
}) => {
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
        name: name === task.name ? name : `${task.name} → ${name}`,
        category:
          category === task.category
            ? category
            : `${task.category} → ${category}`,
        time,
        status: "Modified",
      },
    ]);

    setTasks((tasks) =>
      tasks.map((t) => (t.id === task.id ? { ...task, name, category } : t))
    );

    // Update the expandedCategories state to include the modified category
    setExpandedCategories((prevExpandedCategories) => ({
      ...prevExpandedCategories,
      [category]: true, // Set the category as expanded
    }));

    setOpen(false);
  }

  return (
    <StyledRoot open={open} onOpenChange={setOpen}>
      <StyledDialogTrigger asChild>
        <BaseButton
          style={{
            backgroundColor: "var(--color-blue)",
            color: "white",
            border: "0.1rem solid var(--color-lightblue)",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.1956 8.00232C14.9835 8.00232 14.7801 8.08658 14.6301 8.23657C14.4801 8.38655 14.3958 8.58998 14.3958 8.80209V13.6007C14.3958 13.8128 14.3116 14.0162 14.1616 14.1662C14.0116 14.3162 13.8082 14.4005 13.5961 14.4005H2.3993C2.18719 14.4005 1.98377 14.3162 1.83378 14.1662C1.6838 14.0162 1.59954 13.8128 1.59954 13.6007V2.40394C1.59954 2.19183 1.6838 1.98841 1.83378 1.83842C1.98377 1.68843 2.18719 1.60417 2.3993 1.60417H7.19791C7.41003 1.60417 7.61345 1.51991 7.76343 1.36993C7.91342 1.21994 7.99768 1.01652 7.99768 0.804405C7.99768 0.592294 7.91342 0.38887 7.76343 0.238884C7.61345 0.0888983 7.41003 0.00463733 7.19791 0.00463733H2.3993C1.76297 0.00463733 1.1527 0.257421 0.70274 0.707377C0.252783 1.15733 0 1.76761 0 2.40394V13.6007C0 14.237 0.252783 14.8473 0.70274 15.2973C1.1527 15.7472 1.76297 16 2.3993 16H13.5961C14.2324 16 14.8427 15.7472 15.2926 15.2973C15.7426 14.8473 15.9954 14.237 15.9954 13.6007V8.80209C15.9954 8.58998 15.9111 8.38655 15.7611 8.23657C15.6111 8.08658 15.4077 8.00232 15.1956 8.00232ZM3.19907 8.61014V12.0012C3.19907 12.2133 3.28333 12.4167 3.43332 12.5667C3.58331 12.7167 3.78673 12.8009 3.99884 12.8009H7.38986C7.49511 12.8015 7.59945 12.7814 7.69689 12.7416C7.79434 12.7018 7.88296 12.6431 7.95769 12.569L13.4921 7.0266L15.7634 4.80325C15.8384 4.7289 15.8979 4.64044 15.9385 4.54298C15.9791 4.44552 16 4.34099 16 4.23541C16 4.12983 15.9791 4.0253 15.9385 3.92784C15.8979 3.83038 15.8384 3.74192 15.7634 3.66758L12.3724 0.23657C12.2981 0.161609 12.2096 0.102111 12.1122 0.0615077C12.0147 0.0209045 11.9102 0 11.8046 0C11.699 0 11.5945 0.0209045 11.497 0.0615077C11.3995 0.102111 11.3111 0.161609 11.2367 0.23657L8.9814 2.49991L3.43101 8.04231C3.35688 8.11704 3.29824 8.20566 3.25844 8.30311C3.21864 8.40055 3.19846 8.50489 3.19907 8.61014ZM11.8046 1.93208L14.0679 4.19542L12.9323 5.33109L10.6689 3.06775L11.8046 1.93208ZM4.79861 8.93805L9.54123 4.19542L11.8046 6.45877L7.06195 11.2014H4.79861V8.93805Z"
              fill="white"
            />
          </svg>
          <span>Modify</span>
        </BaseButton>
      </StyledDialogTrigger>
      <Dialog.Portal>
        <StyledDialogOverlay />
        <StyledDialogContent>
          <Dialog.Close>
            <StyledSVG
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.26968 6.69542L13.0648 1.91146C13.2748 1.70147 13.3927 1.41667 13.3927 1.11971C13.3927 0.822742 13.2748 0.53794 13.0648 0.327954C12.8548 0.117969 12.57 0 12.273 0C11.9761 0 11.6913 0.117969 11.4813 0.327954L6.69733 5.12307L1.91336 0.327954C1.70338 0.117969 1.41857 -2.21256e-09 1.12161 0C0.824645 2.21256e-09 0.539843 0.117969 0.329857 0.327954C0.119872 0.53794 0.00190311 0.822742 0.0019031 1.11971C0.0019031 1.41667 0.119872 1.70147 0.329857 1.91146L5.12497 6.69542L0.329857 11.4794C0.225337 11.5831 0.142377 11.7064 0.0857625 11.8423C0.0291481 11.9782 0 12.1239 0 12.2711C0 12.4183 0.0291481 12.5641 0.0857625 12.7C0.142377 12.8359 0.225337 12.9592 0.329857 13.0629C0.433525 13.1674 0.55686 13.2504 0.692751 13.307C0.828641 13.3636 0.974397 13.3927 1.12161 13.3927C1.26882 13.3927 1.41458 13.3636 1.55047 13.307C1.68636 13.2504 1.80969 13.1674 1.91336 13.0629L6.69733 8.26777L11.4813 13.0629C11.585 13.1674 11.7083 13.2504 11.8442 13.307C11.9801 13.3636 12.1258 13.3927 12.273 13.3927C12.4203 13.3927 12.566 13.3636 12.7019 13.307C12.8378 13.2504 12.9611 13.1674 13.0648 13.0629C13.1693 12.9592 13.2523 12.8359 13.3089 12.7C13.3655 12.5641 13.3947 12.4183 13.3947 12.2711C13.3947 12.1239 13.3655 11.9782 13.3089 11.8423C13.2523 11.7064 13.1693 11.5831 13.0648 11.4794L8.26968 6.69542Z"
                fill="var(--color-midgray)"
              />
            </StyledSVG>
          </Dialog.Close>
          <StyledH2>
            Modifying: <span>{task.name}</span>
          </StyledH2>
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
            <BaseButton
              type="submit"
              style={{
                backgroundColor: "var(--color-green)",
                color: "white",
                border: "0.1rem solid var(--color-lightgreen)",
              }}
            >
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50.556 17.9656L33.4927 0.90233C33.2307 0.646521 32.9216 0.443736 32.5827 0.305116C32.2301 0.161833 31.8541 0.0847104 31.4736 0.0776062H8.72255C6.45982 0.0776062 4.28977 0.976472 2.68977 2.57646C1.08978 4.17645 0.190918 6.34651 0.190918 8.60924V42.7358C0.190918 44.9985 1.08978 47.1685 2.68977 48.7685C4.28977 50.3685 6.45982 51.2674 8.72255 51.2674H42.8491C45.1118 51.2674 47.2819 50.3685 48.8818 48.7685C50.4818 47.1685 51.3807 44.9985 51.3807 42.7358V19.9847C51.3829 19.6105 51.3111 19.2395 51.1696 18.893C51.0281 18.5465 50.8195 18.2313 50.556 17.9656ZM17.2542 5.76536H28.6297V11.4531H17.2542V5.76536ZM34.3174 45.5796H17.2542V37.048C17.2542 36.2938 17.5538 35.5704 18.0871 35.0371C18.6205 34.5038 19.3438 34.2041 20.0981 34.2041H31.4736C32.2278 34.2041 32.9512 34.5038 33.4845 35.0371C34.0178 35.5704 34.3174 36.2938 34.3174 37.048V45.5796ZM45.6929 42.7358C45.6929 43.49 45.3933 44.2134 44.86 44.7467C44.3267 45.28 43.6033 45.5796 42.8491 45.5796H40.0052V37.048C40.0052 34.7853 39.1063 32.6152 37.5063 31.0152C35.9063 29.4152 33.7363 28.5164 31.4736 28.5164H20.0981C17.8353 28.5164 15.6653 29.4152 14.0653 31.0152C12.4653 32.6152 11.5664 34.7853 11.5664 37.048V45.5796H8.72255C7.96831 45.5796 7.24495 45.28 6.71162 44.7467C6.17829 44.2134 5.87867 43.49 5.87867 42.7358V8.60924C5.87867 7.85499 6.17829 7.13164 6.71162 6.59831C7.24495 6.06498 7.96831 5.76536 8.72255 5.76536H11.5664V14.297C11.5664 15.0512 11.866 15.7746 12.3994 16.3079C12.9327 16.8412 13.6561 17.1409 14.4103 17.1409H31.4736C32.2278 17.1409 32.9512 16.8412 33.4845 16.3079C34.0178 15.7746 34.3174 15.0512 34.3174 14.297V9.77523L45.6929 21.1507V42.7358Z"
                  fill="white"
                />
              </svg>
              Save
            </BaseButton>
          </StyledForm>
        </StyledDialogContent>
      </Dialog.Portal>
    </StyledRoot>
  );
};

const StyledH2 = styled(BaseH2)`
  font-weight: 300;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2);
  span {
    font-weight: 600;
  }
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem;
  margin-top: 1rem;
  justify-content: space-between;
  button {
    width: fit-content;
  }
`;

const StyledName = styled.input`
  background-color: var(--color-darkwhite);
  border: none;
  outline: none;
  border-radius: 0.7rem;
  padding: 0.2rem 0.8rem;
  height: 2.4rem;
  width: 100%;
  margin-inline: 0.3rem;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--color-darkcyan);
  transition: 0.4s;
  filter: drop-shadow(2px 2px 0px rgba(0, 0, 0, 0.1));
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
  &::placeholder {
    font-weight: 200;
    color: var(--color-midgray);
  }
  &:hover {
    background-color: var(--color-lightgray);
    border-radius: 20px;
  }
  &:focus {
    border-radius: 20px;
  }
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

const StyledRoot = styled(Dialog.Root)``;

const StyledDialogOverlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.55);
  z-index: 3;
  position: fixed;
  inset: 0;
  animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  backdrop-filter: blur(2px);
`;

const StyledDialogTrigger = styled(Dialog.Trigger)`
  @media only screen and (width < 768px) {
    span {
      display: none;
    }
    svg {
      display: block;
    }
  }
`;

const StyledDialogContent = styled(Dialog.Content)`
  z-index: 5;

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
  filter: drop-shadow(2px 2px 0px rgba(0, 0, 0, 0.2));
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2);

  &:focus {
    outline: none;
  }
`;

const StyledSVG = styled.svg`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  width: auto;
  cursor: pointer;
  height: 1rem;
  filter: drop-shadow(1px 1px 0px rgba(0, 0, 0, 0.2));
`;

export default EditTaskModal;
