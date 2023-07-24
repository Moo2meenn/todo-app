import HistoryTask from "../components/HistoryTask";
import { Divider } from "../components/Divider";
import { TasksView } from "../components/TasksView";
import styled from "styled-components";
import { motion } from "framer-motion";

const History = ({ history, setHistory, setTasks }) => {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 100, x: 0 }}
        transition={{ duration: 0.5 }}
        style={{ color: "#303547" }}
      >
        History
      </motion.h1>{" "}
      {history.length ? (
        <Divider style={{ marginBlock: "1.47rem", width: "96.7%" }} />
      ) : (
        <StyledH2
          style={{ marginBlock: "1.47rem" }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 100, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          There is no log history!
        </StyledH2>
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

const StyledH2 = styled(motion.h2)`
  color: #3a4056;
`;

export default History;
