import React from "react";
import styled from "styled-components";
//Import components
import HistoryTask from "../components/HistoryTask";

const History = ({ history }) => {
  return (
    <StyledDiv>
      <h1>History</h1>
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
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  background-color: darkgray;
  margin-left: 15%;
  height: 100vh;
`;

export default History;
