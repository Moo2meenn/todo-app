import React from "react";
import Task from "../components/Task";
import CreateTask from "../components/CreateTask";
import { TasksView } from "../components/TasksView";
import { Divider } from "../components/Divider";

const Tasks = ({ tasks, setTasks, history, setHistory }) => {
  return (
    <>
      <h1>Tasks</h1>
      <CreateTask
        tasks={tasks}
        setTasks={setTasks}
        history={history}
        setHistory={setHistory}
      />
      <TasksView>
        {tasks.length ? (
          <Divider style={{ marginBlock: "1.47rem" }} />
        ) : (
          <h2 style={{ marginBlock: "1.47rem" }}>
            Add some tasks to show up here!
          </h2>
        )}
        {tasks
          .map((task, index) => (
            <div key={task.id}>
              <Task
                setTasks={setTasks}
                tasks={tasks}
                task={task}
                history={history}
                setHistory={setHistory}
              />
              {index !== 0 && <Divider />}
            </div>
          ))
          .reverse()}
      </TasksView>
    </>
  );
};

export default Tasks;
