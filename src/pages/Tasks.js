import CreateTask from "../components/CreateTask";
import { TasksView } from "../components/TasksView";
import { Divider } from "../components/Divider";
import { RenderGroups } from "../components/RenderGroups";
import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Tasks = ({ tasks, setTasks, setHistory }) => {
  //Group tasks by category
  const groupedTasks = tasks.reduce((acc, task) => {
    if (!acc[task.category]) {
      acc[task.category] = [];
    }
    acc[task.category].push(task);
    return acc;
  }, {});

  //Define state to keep track of toggle
  const [expandedCategories, setExpandedCategories] = useState(
    Object.keys(groupedTasks).reduce((acc, category) => {
      acc[category] = true; // Set all existing categories to be initially expanded (true)
      return acc;
    }, {})
  );

  //Toggle category visibility when category title is clicked
  const toggleCategory = (category) => {
    setExpandedCategories((prevExpandedCategories) => ({
      ...prevExpandedCategories,
      [category]: !prevExpandedCategories[category],
    }));
  };

  //Function to handle the creation of new categories
  const handleNewCategory = (newCategory) => {
    setExpandedCategories((prevExpanded) => ({
      ...prevExpanded,
      [newCategory]: true, // Set the new category to be initially open (true)
    }));
  };

  return (
    <>
      <StyledH1
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 100, x: 0 }}
        transition={{ duration: 0.5 }}
        style={{ color: "#303547" }}
      >
        Tasks
      </StyledH1>
      <CreateTask
        tasks={tasks}
        setTasks={setTasks}
        setHistory={setHistory}
        onNewCategory={handleNewCategory}
      />
      {tasks.length ? (
        <Divider style={{ marginBlock: "1.47rem", width: "96.7%" }} />
      ) : (
        <StyledH2
          style={{ marginBlock: "1.47rem" }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 100, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Add some tasks to show up here!
        </StyledH2>
      )}
      <TasksView>
        <RenderGroups
          groupedTasks={groupedTasks}
          toggleCategory={toggleCategory}
          expandedCategories={expandedCategories}
          setExpandedCategories={setExpandedCategories}
          setTasks={setTasks}
          setHistory={setHistory}
        />
      </TasksView>
    </>
  );
};

const StyledH2 = styled(motion.h2)`
  text-shadow: 0px 1px 2.5px rgba(0, 0, 0, 0.2);
  color: #3a4056;
`;

const StyledH1 = styled(motion.h1)`
  text-shadow: 0px 1px 2.5px rgba(0, 0, 0, 0.2);
  color: #3a4056;
`;

export default Tasks;
