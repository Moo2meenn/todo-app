import React from "react";
import styled from "styled-components";

const Task = ({ tasks, setTasks, taskName, id, history, setHistory }) => {
  const deleteHandler = () => {
    const dateObject = new Date();
    let date = dateObject
      .toUTCString()
      .slice(0, dateObject.toDateString.length - 4);
    console.log(date);
    setHistory([
      ...history,
      { id: id, taskName: taskName, deleteTime: date, status: "Deleted" },
    ]);
    setTasks(tasks.filter((t) => t.id !== id));
  };
  return (
    <StyledDiv>
      <StyledName>{taskName}</StyledName>
      <InnerDiv>
        <button>Mark as Done</button>
        <button>Modify</button>
        <button onClick={deleteHandler}>Delete</button>
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

const StyledName = styled.h2``;

export default Task;
