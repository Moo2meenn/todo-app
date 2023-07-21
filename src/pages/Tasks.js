import React from "react";
import styled from "styled-components";
import Task from "../components/Task";
import CreateTask from "../components/CreateTask";

const Tasks = ({ tasks, setTasks, history, setHistory }) => {
  return (
    <StyledDiv>
      <h1>Tasks</h1>

      <CreateTask
        tasks={tasks}
        setTasks={setTasks}
        history={history}
        setHistory={setHistory}
      />
      <InnerDiv>
        {tasks.length === 0 ? <h2>Add some tasks to show up here!</h2> : null}
        {tasks
          .map((task, index) => (
            <WrapperDiv key={task.id}>
              <Task
                setTasks={setTasks}
                tasks={tasks}
                taskName={task.name}
                id={task.id}
                history={history}
                setHistory={setHistory}
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
  height: 67vh;
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

export default Tasks;
