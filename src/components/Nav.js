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
              ? "translateY(5.44rem)"
              : pathname === "/logs"
              ? "translateY(9.44rem)"
              : "none",
        }}
      />
      <StyledUl>
        <StyledLi $isActive={pathname === "/"}>
          <StyledLink to="/" className="link">
            Tasks
          </StyledLink>
        </StyledLi>
        <StyledLi $isActive={pathname === "/logs"}>
          <StyledLink to="/logs" className="link">
            History
          </StyledLink>
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

const StyledLink = styled(Link)`
  padding-inline: 1rem;
  width: 100%;
  display: block;
  border: 1px solid green;
  transition: 0.1s;
  transition-timing-function: ease-in-out;
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
  }
`;

const StyledLi = styled.li`
  margin: 1rem 0rem;
  height: 3rem;
  line-height: 3rem;
  align-self: center;
  font-weight: ${({ $isActive }) => ($isActive ? "800" : "500")};
  &:hover a {
    font-weight: 800;
  }
`;

export default Nav;
