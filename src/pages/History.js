import React from "react";
import styled from "styled-components";
//Import components
import HistoryTask from "../components/HistoryTask";

const History = ({ history, setHistory, tasks, setTasks }) => {
  return (
    <StyledDiv>
      <h1>History</h1>
      <InnerDiv>
        {history.length === 0 ? <h2>There is no log history!</h2> : null}
        {history
          .map((task, index) => (
            <WrapperDiv>
              <HistoryTask
                history={history}
                name={task.taskName}
                time={task.deleteTime}
                status={task.status}
                setHistory={setHistory}
                tasks={tasks}
                setTasks={setTasks}
                id={task.id}
                key={task.id}
              />
              {index === 0 ? null : <LineDiv />}
            </WrapperDiv>
          ))
          .reverse()}
      </InnerDiv>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  background-color: darkgray;
  margin-left: 15%;
  padding: 1rem;
  height: 100vh;
`;

const InnerDiv = styled.div`
  height: 76vh;
  width: 97.4%;
  overflow: auto;
  margin: 4rem 0rem 0rem 1rem;
  padding: 0rem;
  background-color: red;
`;

const WrapperDiv = styled.div`
  padding: 0;
  margin: 0;
`;

const LineDiv = styled.div`
  width: 98.8%;
  height: 0.1rem;
  margin: 0.5rem;
  background-color: blue;
`;

export default History;
