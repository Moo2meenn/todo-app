import React, { useState } from "react";
import Task from "../components/Task";
import CreateTask from "../components/CreateTask";
import { TasksView } from "../components/TasksView";
import { Divider } from "../components/Divider";
import styled from "styled-components";

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
        <h1 onClick={() => toggleCategory(category)}>{category}</h1>
        {expandedCategories[category] &&
          tasks
            .map((task, index) => (
              <StyledCategory key={task.id}>
                <Task task={task} setTasks={setTasks} setHistory={setHistory} />
                {index !== 0 && <Divider />}
              </StyledCategory>
            ))
            .reverse()}
      </CategoryWrapper>
    ));
  };

  return (
    <>
      <h1>Tasks</h1>
      {/* Pass the handleNewCategory function to CreateTask */}
      <CreateTask
        tasks={tasks}
        setTasks={setTasks}
        setHistory={setHistory}
        onNewCategory={handleNewCategory}
      />

      <TasksView>
        {tasks.length ? (
          <Divider style={{ marginBlock: "1.47rem" }} />
        ) : (
          <h2 style={{ marginBlock: "1.47rem" }}>
            Add some tasks to show up here!
          </h2>
        )}

        {/* Step 6: Render grouped tasks */}
        {renderGroupedTasks()}
      </TasksView>
    </>
  );
};

const CategoryWrapper = styled.div`
  margin-block: 2rem;
`;

const StyledCategory = styled.div``;

export default Tasks;
