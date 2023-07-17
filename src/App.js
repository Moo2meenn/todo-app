import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
//Import components
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";
//Import pages
import Tasks from "./pages/Tasks";
import History from "./pages/History";import TasksList from "./components/TasksList";

function App() {

  const [tasks, setTasks] = useState(TasksList());

  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path="/" exact element={<Tasks tasks={tasks} setTasks={setTasks} />} />
        <Route path="logs" element={<History />} />
      </Routes>
    </div>
  );
};

export default App;
