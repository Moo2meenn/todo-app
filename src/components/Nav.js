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
              ? "translateY(5.27rem)"
              : pathname === "/logs"
              ? "translateY(8.42rem)"
              : "none",
        }}
      />
      <StyledUl>
        <ActiveLink to="/" className="link" exact>
          <StyledLi isActive={pathname === "/"}>Tasks</StyledLi>
        </ActiveLink>
        <ActiveLink to="/logs" className="link">
          <StyledLi isActive={pathname === "/logs"}>History</StyledLi>
        </ActiveLink>
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
  font-size: 1.5rem;
  text-decoration: none;
  user-select: none;
  color: black;
  transition: 0.1s;
  font-weight: ${({ isActive }) => (isActive ? "800" : "500")};
  &:hover {
    font-weight: 800;
    transition: 0.2s;
  }
`;

const activeClassName = "active";

const ActiveLink = styled(Link).attrs({ activeClassName })`
  &.${activeClassName} {
    font-weight: 800;
    transition: 0.2s;
  }
`;

export default Nav;
