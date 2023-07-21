import React from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";

const Task = ({ tasks, setTasks, taskName, id, history, setHistory }) => {
  const deleteHandler = () => {
    const dateObject = new Date();
    let date = dateObject
      .toUTCString()
      .slice(0, dateObject.toDateString.length - 4);
    setHistory([
      ...history,
      { id: id, taskName: taskName, deleteTime: date, status: "Deleted" },
    ]);
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const doneHandler = () => {
    const dateObject = new Date();
    let date = dateObject
      .toUTCString()
      .slice(0, dateObject.toDateString.length - 4);
    setHistory([
      ...history,
      { id: id, taskName: taskName, deleteTime: date, status: "Completed" },
    ]);
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <StyledDiv>
      <StyledName>{taskName}</StyledName>
      <InnerDiv>
        <button onClick={doneHandler}>Mark as Done</button>
        <StyledPopup trigger={<button> Trigger</button>} modal nested>
          <StyledPop>Popup content here !!</StyledPop>
        </StyledPopup>
        <button onClick={deleteHandler}>Delete</button>
      </InnerDiv>
    </StyledDiv>
  );
};

const StyledPopup = styled(Popup)`
  &-overlay {
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(2px);
  }
`;

const StyledPop = styled.div``;

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
