import React from "react";
import styled from "styled-components";
import EditTaskModal from "./EditTaskModal";
import { BaseH2, BaseButton } from "./GlobalStyles";

const Task = ({ task, setTasks, setHistory }) => {
  const deleteHandler = () => {
    const time = new Date().toUTCString();
    setHistory((history) => [...history, { ...task, time, status: "Deleted" }]);
    setTasks((tasks) => tasks.filter((t) => t.id !== task.id));
  };

  const doneHandler = () => {
    const time = new Date().toUTCString();

    setHistory((history) => [
      ...history,
      { ...task, time, status: "Completed" },
    ]);

    setTasks((tasks) => tasks.filter((t) => t.id !== task.id));
  };

  return (
    <StyledDiv>
      <StyledName>{task.name}</StyledName>
      <InnerDiv>
        <BaseButton onClick={doneHandler}>Mark as Done</BaseButton>
        <EditTaskModal
          task={task}
          setTasks={setTasks}
          setHistory={setHistory}
        />
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
