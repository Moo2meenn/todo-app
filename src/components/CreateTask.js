import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const CreateTask = ({ tasks, setTasks }) => {
    function handleSubmit(e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      const form = Object.fromEntries(formData.entries());
      console.log(form);
      const nameOfTask = form.taskName.trim();

        if (!nameOfTask) return;
        setTasks([...tasks, {'id': uuidv4(), 'name': nameOfTask }]);
        console.log(nameOfTask);
    }

    return(
        <StyledForm onSubmit={handleSubmit}>
            <StyledName name="taskName" type="text"/>
            <button type='submit'>Done</button>
        </StyledForm>
    );
};

const StyledForm = styled.form`
    display: flex;
    padding: .6rem;
    width: 40rem;
    border-radius: 1.3rem;
    margin: 1rem;
    background-color: lightblue;
`;

const StyledName = styled.input`
    background-color: transparent;
    border: none;
    outline: none;
    border-radius: .7rem;
    padding: .2rem .8rem;
    height: 2rem;
    width: 100%;
    font-size: 1.6rem;
    color: #1f1f1f;
`;

export default CreateTask;