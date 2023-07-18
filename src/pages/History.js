import React from "react";
import styled from "styled-components";
//Import components
import HistoryTask from "../components/HistoryTask";

const History = ({ history }) => {
  return (
    <StyledDiv>
      <h1>History</h1>
      <InnerDiv>
        {history.length === 0 ? <h2>There is no log history!</h2> : null}
        {history
          .map((task) => (
            <HistoryTask
              history={history}
              name={task.taskName}
              time={task.deleteTime}
              status={task.status}
              key={task.id}
            />
          ))
          .reverse()}
      </InnerDiv>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  background-color: darkgray;
  margin-left: 15%;
  height: 100vh;
`;

const InnerDiv = styled.div`
  height: 75vh;
  width: 75%;
  overflow: auto;
  margin: 3rem;
  padding: 0.1rem;
`;

export default History;
