import React from "react";
import styled from "styled-components";
import { BaseH2, BaseButton } from "./GlobalStyles";

const Task = ({ task, setTasks, setHistory }) => {
  const restoreHandler = () => {
    setTasks((tasks) => [...tasks, task]);

    setHistory((history) =>
      history.filter((t) => !(t.status === "Deleted" && t.id === task.id))
    );
  };

  const undoHandler = () => {
    setTasks((tasks) => [...tasks, task]);
    setHistory((history) =>
      history.filter((t) => !(t.status === "Completed" && t.id === task.id))
    );
  };

  return (
    <StyledDiv>
      <StyledName>{task.name}</StyledName>
      <h3>{task.category}</h3>
      <InnerDiv>
        <StyledH3>
          {task.status} • {task.time}
        </StyledH3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 -960 960 960"
          width="48"
        >
          <path d="M480-294q78 0 132-54t54-132q0-78-54-132t-132-54q-78 0-132 54t-54 132q0 78 54 132t132 54Zm0 214q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z" />
        </svg>
        {task.status === "Deleted" && (
          <StyledButton onClick={restoreHandler}>Restore</StyledButton>
        )}
        {task.status === "Completed" && (
          <StyledButton onClick={undoHandler}>Undo</StyledButton>
        )}
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
  padding-inline: 0rem;
  display: flex;
  svg {
    height: 1.4rem;
    margin: auto;
  }
`;

const StyledButton = styled(BaseButton)`
  width: 6rem;
`;

const StyledName = styled(BaseH2)``;

const StyledH3 = styled.h3`
  margin: auto;
  font-weight: 500;
  font-size: 0.9rem;
`;

export default Task;
