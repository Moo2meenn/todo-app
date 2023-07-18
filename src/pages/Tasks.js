import React from "react";
import styled from "styled-components";
import Task from "../components/Task";
import CreateTask from "../components/CreateTask";

const Tasks = ({ tasks, setTasks, history, setHistory }) => {
  return (
    <StyledDiv>
      <CreateTask tasks={tasks} setTasks={setTasks} />
      <InnerDiv>
        {tasks.length === 0 ? <h2>Add some tasks to show up here!</h2> : null}
        {tasks
          .map((task) => (
            <Task
              setTasks={setTasks}
              tasks={tasks}
              taskName={task.name}
              id={task.id}
              key={task.id}
              history={history}
              setHistory={setHistory}
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
  padding: 1rem;
  height: 100vh;
`;

const InnerDiv = styled.div`
  height: 75vh;
  width: 75%;
  overflow: auto;
  margin: 3rem;
  padding: 0.1rem;
`;

export default Tasks;
