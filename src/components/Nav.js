import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
    return(
        <StyledNav>
            <h1>TODO</h1>
            <ul>
                <li>
                    <Link to="/">Tasks</Link>
                </li>
                <li>
                    <Link to="/logs">History</Link>
                </li>
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.div`
    width: 15%;
    height: 100vh;
    display: flex;
    position: absolute;
    flex-direction: column;
    background-color: gray;
`

export default Nav;