import { Routes, Route } from "react-router-dom";

import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";
import styled from "styled-components";

import Tasks from "./pages/Tasks";
import History from "./pages/History";

import { useState } from "react";
import { useTasks, useTaskHistory } from "./states";

function App() {
  const [tasks, setTasks] = useTasks();
  const [history, setHistory] = useTaskHistory();
  const [toggle, setToggle] = useState(true);

  const toggleNav = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  return (
    <div>
      <GlobalStyles />
      <StyledButton onClick={toggleNav} $toggle={toggle}>
        <svg
          width="16"
          height="12"
          viewBox="0 0 16 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 1C0 0.447715 0.447716 0 1 0H15C15.5523 0 16 0.447715 16 1C16 1.55229 15.5523 2 15 2H1C0.447716 2 0 1.55229 0 1ZM0 6C0 5.44772 0.447716 5 1 5H15C15.5523 5 16 5.44772 16 6C16 6.55228 15.5523 7 15 7H1C0.447716 7 0 6.55228 0 6ZM1 10C0.447716 10 0 10.4477 0 11C0 11.5523 0.447716 12 1 12H15C15.5523 12 16 11.5523 16 11C16 10.4477 15.5523 10 15 10H1Z"
            fill="black"
          />
        </svg>
      </StyledButton>
      <Nav toggle={toggle} />
      <StyledContainer $toggle={toggle}>
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
          <Route
            path="logs"
            element={
              <History
                history={history}
                setHistory={setHistory}
                setTasks={setTasks}
              />
            }
          />
        </Routes>
      </StyledContainer>
    </div>
  );
}

const StyledButton = styled.button`
  cursor: pointer;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 2rem;
  border: 2px solid #303547;
  border-radius: 0.6rem;
  z-index: 10;
  margin: 0;
  right: 1rem;
  top: 1rem;
  svg {
    path {
      transition: 0.4s;
      fill: #303547;
      @media only screen and (width < 768px) {
        fill: ${({ $toggle }) => ($toggle ? "#303547" : "#f5f5f5")};
      }
    }
  }
`;

const StyledContainer = styled.div`
  background-color: #f5f5f5;
  height: 100vh;
  width: 85%;
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
  transition: 0.5s;
  margin-left: ${({ $toggle }) => ($toggle ? "0%" : "15%")};
  width: ${({ $toggle }) => ($toggle ? "100%" : "85%")};
  @media only screen and (width < 768px) {
    height: 100vh;
  }
`;

export default App;
