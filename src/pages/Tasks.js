import React, { useState } from "react";
import Task from "../components/Task";
import CreateTask from "../components/CreateTask";
import { TasksView } from "../components/TasksView";
import { Divider } from "../components/Divider";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const Tasks = ({ tasks, setTasks, setHistory }) => {
  // Step 1: Group tasks by category
  const groupedTasks = tasks.reduce((acc, task) => {
    if (!acc[task.category]) {
      acc[task.category] = [];
    }
    acc[task.category].push(task);
    return acc;
  }, {});

  // Step 2: Define state to keep track of toggle
  const [expandedCategories, setExpandedCategories] = useState(
    Object.keys(groupedTasks).reduce((acc, category) => {
      acc[category] = true; // Set all existing categories to be initially expanded (true)
      return acc;
    }, {})
  );

  // Step 3: Toggle category visibility when category title is clicked
  const toggleCategory = (category) => {
    setExpandedCategories((prevExpanded) => ({
      ...prevExpanded,
      [category]: !prevExpanded[category],
    }));
  };

  // Step 4: Function to handle the creation of new categories
  const handleNewCategory = (newCategory) => {
    setExpandedCategories((prevExpanded) => ({
      ...prevExpanded,
      [newCategory]: true, // Set the new category to be initially open (true)
    }));
  };

  // Step 5: Render grouped tasks
  const renderGroupedTasks = () => {
    return Object.entries(groupedTasks).map(([category, tasks]) => (
      <CategoryWrapper key={category}>
        <TitleWrapper onClick={() => toggleCategory(category)}>
          <StyledCategoryTitle
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 100, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {category}
          </StyledCategoryTitle>
          <TitleDivider />
          <StyledSVG
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 -960 960 960"
            width="48"
          >
            <path d="M480-294q78 0 132-54t54-132q0-78-54-132t-132-54q-78 0-132 54t-54 132q0 78 54 132t132 54Zm0 214q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z" />
          </StyledSVG>
        </TitleWrapper>
        <AnimatePresence>
          {expandedCategories[category] &&
            tasks
              .map((task, index) => (
                <StyledCategory
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 100, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.2,
                  }}
                  key={task.id}
                >
                  <Task
                    task={task}
                    setTasks={setTasks}
                    setHistory={setHistory}
                  />
                  {index !== 0 && <Divider />}
                </StyledCategory>
              ))
              .reverse()}
        </AnimatePresence>
      </CategoryWrapper>
    ));
  };

  return (
    <>
      <motion.h1
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 100, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Tasks
      </motion.h1>
      {/* Pass the handleNewCategory function to CreateTask */}
      <CreateTask
        tasks={tasks}
        setTasks={setTasks}
        setHistory={setHistory}
        onNewCategory={handleNewCategory}
      />
      {tasks.length ? (
        <Divider style={{ marginBlock: "1.47rem" }} />
      ) : (
        <h2 style={{ marginBlock: "1.47rem" }}>
          Add some tasks to show up here!
        </h2>
      )}
      <TasksView>
        {/* Step 6: Render grouped tasks */}
        {renderGroupedTasks()}
      </TasksView>
    </>
  );
};

const StyledSVG = styled.svg`
  height: 1.5rem;
  aspect-ratio: 1;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  background-color: red;
`;

const TitleDivider = styled.div`
  height: 0.1rem;
  width: 100%;
  margin-inline: 1rem;
  background-color: blue;
`;

const StyledCategoryTitle = styled(motion.h1)``;

const CategoryWrapper = styled.div`
  margin-bottom: 2rem;
`;

const StyledCategory = styled(motion.div)``;

export default Tasks;
