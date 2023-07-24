import React from "react";
import HistoryTask from "../components/HistoryTask";
import { TasksView } from "../components/TasksView";
import { Divider } from "../components/Divider";
import { motion } from "framer-motion";

const History = ({ history, setHistory, tasks, setTasks }) => {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 100, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        History
      </motion.h1>{" "}
      {history.length ? (
        <Divider style={{ marginBlock: "1.47rem" }} />
      ) : (
        <motion.h2
          style={{ marginBlock: "1.47rem" }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 100, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          There is no log history!
        </motion.h2>
      )}
      <TasksView>
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
