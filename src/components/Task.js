import React from "react";
import styled from "styled-components";
import EditTaskModal from "./EditTaskModal";
import { BaseH2, BaseButton } from "./GlobalStyles";
import { motion } from "framer-motion";

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
    <StyledDiv
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 100, y: 0 }}
      transition={{
        duration: 0.1,
      }}
    >
      <StyledName>{task.name}</StyledName>
      <h3>{task.category}</h3>
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

const StyledDiv = styled(motion.div)`
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
