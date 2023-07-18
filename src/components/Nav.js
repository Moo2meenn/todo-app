import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <StyledH1>TODO</StyledH1>
      <SelectionBG
        style={{
          transform:
            pathname === "/"
              ? "translateY(5.40rem)"
              : pathname === "/completed"
              ? "translateY(9.40rem)"
              : pathname === "/logs"
              ? "translateY(13.40rem)"
              : "none",
        }}
      />
      <StyledUl>
        <StyledLi
          style={{
            fontWeight: pathname === "/" ? "800" : "500",
            transition: ".05s",
          }}
        >
          <Link to="/" className="link">
            Tasks
          </Link>
        </StyledLi>
        <StyledLi
          style={{
            fontWeight: pathname === "/completed" ? "800" : "500",
            transition: ".05s",
          }}
        >
          <Link to="/completed" className="link">
            Completed
          </Link>
        </StyledLi>
        <StyledLi
          style={{
            fontWeight: pathname === "/logs" ? "800" : "500",
            transition: ".05s",
          }}
        >
          <Link to="/logs" className="link">
            History
          </Link>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
};

const StyledUl = styled.ul`
  z-index: 5;
`;

const SelectionBG = styled.div`
  z-index: 1;
  width: 100%;
  height: 3rem;
  position: absolute;
  background-color: red;
  transition: 0.3s;
`;

const StyledNav = styled.div`
  width: 15%;
  height: 100vh;
  display: flex;
  padding: 0;
  position: absolute;
  flex-direction: column;
  background-color: gray;
`;

const StyledH1 = styled.h1`
  padding: 0 1;
  text-align: center;
  margin-inline: auto;
  user-select: none;
  transition: 0.4s;
  font-weight: 800;
  cursor: pointer;
  &:hover {
    letter-spacing: 0.5rem;
    padding-right: 0.2;
    transform: translateY(0.4rem);
    transition: 0.4s;
    font-weight: 600;
  }
`;

const StyledLi = styled.li`
  padding-inline: 1rem;
  margin: 1rem 0rem;
  height: 3rem;
  line-height: 3rem;
  align-self: center;
  transition: 0.3s;
`;

export default Nav;
