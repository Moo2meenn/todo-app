import React from "react";
import HistoryTask from "../components/HistoryTask";
import { TasksView } from "../components/TasksView";
import { Divider } from "../components/Divider";

const History = ({ history, setHistory, tasks, setTasks }) => {
  return (
    <>
      <h1>History</h1>
      <TasksView>
        {history.length ? (
          <Divider style={{ marginBlock: "1.47rem" }} />
        ) : (
          <h2 style={{ marginBlock: "1.47rem" }}>There is no log history!</h2>
        )}
        {history
          .map((task, index) => (
            <div key={`${task.id}${task.time}`}>
              <HistoryTask
                task={task}
                setTasks={setTasks}
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

export default History;
