import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
//Import components
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";
//Import pages
import Tasks from "./pages/Tasks";
import Completed from "./pages/Completed";
import History from "./pages/History";
import TasksList from "./components/TasksList";
import HistoryList from "./components/HistoryList";

function App() {
  const [tasks, setTasks] = useState(TasksList());
  const [history, setHistory] = useState(HistoryList());

  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Tasks
              tasks={tasks}
              setTasks={setTasks}
              history={history}
              setHistory={setHistory}
            />
          }
        />
        <Route path="/completed" element={<Completed />} />
        <Route path="logs" element={<History history={history} />} />
      </Routes>
    </div>
  );
}

export default App;
