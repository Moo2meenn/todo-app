import React from "react";
import styled from "styled-components";
import Task from "../components/Task";
import CreateTask from "../components/CreateTask";

const Tasks = ( {tasks, setTasks} ) => {
    return(
        <StyledDiv>
            <CreateTask tasks={ tasks } setTasks={setTasks} />
            {tasks.map(task => <Task setTasks={setTasks} tasks={tasks} taskName={task.name} id={task.id} key={task.id} />).reverse()}
        </StyledDiv>
    );
};

const StyledDiv = styled.div`
    background-color: darkgray;
    margin-left: 15%;
    padding: 1rem;
    height: 100vh;
`

export default Tasks;