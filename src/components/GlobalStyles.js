import { createGlobalStyle } from "styled-components";

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

li{
    list-style-type: none;
    margin: 1.4rem;
    font-size: 1.5rem;
}

h1{
    font-size: 2rem;
    font-weight: 800;
    padding: 1rem;
}

h2{
    font-size: 1.6rem;
    font-weight: 600;
    padding-inline: 0.8rem;
}

button{
    padding: .5rem;
    background-color: white;
    border: none;
    outline: none;
    border-radius: .7rem;
    margin-inline: .2rem;
    transition: .1s;
    font-weight: 600;
    &:hover{
        cursor: pointer;
        border-radius: 1rem;
    }
}

a{
    font-size: 1.5rem;
    text-decoration: none;
    color: black;
    transition: .1s;
    transition-timing-function: ease-in-out;
}
`;

export default GlobalStyles;
