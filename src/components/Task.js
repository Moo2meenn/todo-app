import React from "react";
import styled from "styled-components";
import EditTaskModal from "./EditTaskModal";
import { BaseH2, BaseButton } from "./GlobalStyles";

const Task = ({ tasks, setTasks, taskName, id, history, setHistory }) => {
  const deleteHandler = () => {
    const dateObject = new Date();

    const deleteTime = dateObject
      .toUTCString()
      .slice(0, dateObject.toDateString.length - 4);

    setHistory([...history, { id, taskName, deleteTime, status: "Deleted" }]);
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const doneHandler = () => {
    const dateObject = new Date();

    const deleteTime = dateObject
      .toUTCString()
      .slice(0, dateObject.toDateString.length - 4);

    setHistory([...history, { id, taskName, deleteTime, status: "Completed" }]);

    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <StyledDiv>
      <StyledName>{taskName}</StyledName>
      <InnerDiv>
        <BaseButton onClick={doneHandler}>Mark as Done</BaseButton>
        <EditTaskModal />
        <BaseButton onClick={deleteHandler}>Delete</BaseButton>
      </InnerDiv>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  padding: 0.6rem;
  width: 100%;
  border-radius: 1.3rem;
  background-color: lightblue;
`;

const InnerDiv = styled.div`
  margin-left: auto;
  margin-right: 0;
`;

const StyledName = styled(BaseH2)``;

export default Task;
