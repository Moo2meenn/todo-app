import { createGlobalStyle, styled } from "styled-components";
import { Link } from "react-router-dom";

const GlobalStyles = createGlobalStyle`

html{
  --color-white: #FFFFFF;
  --color-black: #000000;
  --color-offwhite: #eeeeee;
  --color-darkoffwhite: #e9e9e9;
  --color-lightwhite: #FCFCFC;
  --color-darkwhite: #F0F0F0;
  --color-lightgray: #F5F5F5;
  --color-midgray: #dfdfdf;
  --color-gray: #BBBBBB;
  --color-darkcyan: #303547;
  --color-midcyan: #3A4056;
  --color-lightcyan: #a1a8c2;
  --color-green: #1AD586;
  --color-lightgreen: #2BE395;
  --color-blue: #4F40FF;
  --color-lightblue: #6A5DFF;
  --color-red: #FF5A5A;
  --color-lightred: #FF7A7A;
  --color-orange: #FF5F2C;
  --color-lightorange: #FF7E55;
}

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
  color: var(--color-darkcyan);
  font-size: 2rem;
  font-weight: 800;
  padding: 1rem;
  filter: drop-shadow(2px 2px 0px rgba(0, 0, 0, 0.2));
`;

export const BaseH2 = styled.h2`
  color: var(--color-darkcyan);
  font-size: 1.6rem;
  font-weight: 600;
  padding-inline: 0.8rem;
`;

export const BaseButton = styled.button`
  padding: 0.5rem;
  background-color: white;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  outline: none;
  border-radius: 0.7rem;
  margin-inline: 0.2rem;
  transition: 0.1s;
  font-weight: 600;
  filter: drop-shadow(2px 2px 0px rgba(0, 0, 0, 0.2));

  &:hover {
    cursor: pointer;
    border-radius: 1rem;
    opacity: 80%;
  }
  svg {
    aspect-ratio: 1;
    width: 1rem;
    height: auto;
    margin-right: 0.4rem;
    margin-left: 0.1rem;
    filter: drop-shadow(1px 1px 0px rgba(0, 0, 0, 0.2));
  }
`;

export const BaseLink = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  transition: 0.1s;
  transition-timing-function: ease-in-out;
`;

export const BaseListItem = styled.li`
  list-style-type: none;
  margin: 1.4rem;
  font-size: 1.5rem;
`;

export default GlobalStyles;
