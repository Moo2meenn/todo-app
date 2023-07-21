import { createGlobalStyle, styled } from "styled-components";
import { Link } from "react-router-dom";

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}

body{
    position: relative;
    margin: 0;
    padding: 0;
}
`;

export const BaseH1 = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  padding: 1rem;
`;

export const BaseH2 = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  padding-inline: 0.8rem;
`;

export const BaseButton = styled.button`
  padding: 0.5rem;
  background-color: white;
  border: none;
  outline: none;
  border-radius: 0.7rem;
  margin-inline: 0.2rem;
  transition: 0.1s;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    border-radius: 1rem;
  }
`;

export const BaseLink = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  color: black;
  transition: 0.1s;
  transition-timing-function: ease-in-out;
`;

export const BaseListItem = styled.li`
  list-style-type: none;
  margin: 1.4rem;
  font-size: 1.5rem;
`;

export default GlobalStyles;
