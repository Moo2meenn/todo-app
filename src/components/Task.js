import React from "react";
import styled from "styled-components";

const Task = ( { tasks, setTasks, taskName, id} ) => {
    const deleteHandler = () => {
        setTasks(tasks.filter((t) => t.id !==id));
    }
    return(
        <StyledDiv>
            <StyledName>{taskName}</StyledName>
            <InnerDiv>
                <button>Mark as Done</button>
                <button>Modify</button>
                <button onClick={deleteHandler}>Delete</button>
            </InnerDiv>
        </StyledDiv>
    );
};

const StyledDiv = styled.div`
    display: flex;
    padding: .6rem;
    width: 40rem;
    border-radius: 1.3rem;
    margin: 1rem;
    background-color: lightblue;
`;

const InnerDiv = styled.div`
    margin-left: auto;
    margin-right: 0;
`;

const StyledName = styled.h2`
`;

export default Task;