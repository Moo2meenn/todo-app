import { useLocation } from "react-router-dom";

import styled from "styled-components";
import { BaseH1, BaseListItem, BaseLink } from "./GlobalStyles";
import { AlertDialogDemo } from "./AlertDialogDemo";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <BaseLink to="/">
        <StyledH1>TODO</StyledH1>
      </BaseLink>
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
            <StyledSVG
              width="23"
              height="28"
              viewBox="0 0 23 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.9375 16.8H7.1875C6.80625 16.8 6.44062 16.9475 6.17103 17.2101C5.90145 17.4726 5.75 17.8287 5.75 18.2C5.75 18.5713 5.90145 18.9274 6.17103 19.1899C6.44062 19.4525 6.80625 19.6 7.1875 19.6H12.9375C13.3187 19.6 13.6844 19.4525 13.954 19.1899C14.2235 18.9274 14.375 18.5713 14.375 18.2C14.375 17.8287 14.2235 17.4726 13.954 17.2101C13.6844 16.9475 13.3187 16.8 12.9375 16.8ZM18.6875 2.8H16.9912C16.6947 1.98303 16.1459 1.2754 15.4202 0.774114C14.6944 0.27283 13.8272 0.00243532 12.9375 0H10.0625C9.17277 0.00243532 8.30559 0.27283 7.57984 0.774114C6.8541 1.2754 6.30533 1.98303 6.00875 2.8H4.3125C3.16875 2.8 2.07185 3.2425 1.2631 4.03015C0.454352 4.8178 0 5.88609 0 7V23.8C0 24.9139 0.454352 25.9822 1.2631 26.7698C2.07185 27.5575 3.16875 28 4.3125 28H18.6875C19.8312 28 20.9281 27.5575 21.7369 26.7698C22.5456 25.9822 23 24.9139 23 23.8V7C23 5.88609 22.5456 4.8178 21.7369 4.03015C20.9281 3.2425 19.8312 2.8 18.6875 2.8ZM8.625 4.2C8.625 3.8287 8.77645 3.4726 9.04603 3.21005C9.31562 2.9475 9.68125 2.8 10.0625 2.8H12.9375C13.3187 2.8 13.6844 2.9475 13.954 3.21005C14.2235 3.4726 14.375 3.8287 14.375 4.2V5.6H8.625V4.2ZM20.125 23.8C20.125 24.1713 19.9736 24.5274 19.704 24.79C19.4344 25.0525 19.0687 25.2 18.6875 25.2H4.3125C3.93125 25.2 3.56562 25.0525 3.29603 24.79C3.02645 24.5274 2.875 24.1713 2.875 23.8V7C2.875 6.6287 3.02645 6.2726 3.29603 6.01005C3.56562 5.7475 3.93125 5.6 4.3125 5.6H5.75V7C5.75 7.3713 5.90145 7.7274 6.17103 7.98995C6.44062 8.2525 6.80625 8.4 7.1875 8.4H15.8125C16.1937 8.4 16.5594 8.2525 16.829 7.98995C17.0985 7.7274 17.25 7.3713 17.25 7V5.6H18.6875C19.0687 5.6 19.4344 5.7475 19.704 6.01005C19.9736 6.2726 20.125 6.6287 20.125 7V23.8ZM15.8125 11.2H7.1875C6.80625 11.2 6.44062 11.3475 6.17103 11.6101C5.90145 11.8726 5.75 12.2287 5.75 12.6C5.75 12.9713 5.90145 13.3274 6.17103 13.5899C6.44062 13.8525 6.80625 14 7.1875 14H15.8125C16.1937 14 16.5594 13.8525 16.829 13.5899C17.0985 13.3274 17.25 12.9713 17.25 12.6C17.25 12.2287 17.0985 11.8726 16.829 11.6101C16.5594 11.3475 16.1937 11.2 15.8125 11.2Z"
                fill="white"
              />
            </StyledSVG>
            Tasks
          </StyledLink>
        </StyledLi>
        <StyledLi $isActive={pathname === "/logs"}>
          <StyledLink to="/logs" className="link">
            <StyledSVG
              width="23"
              height="24"
              viewBox="0 0 23 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.8088 1.56C12.0585 -1.08 6.21194 -0.24 2.43606 3.36V1.2C2.43606 0.48 1.94885 0 1.21803 0C0.487211 0 0 0.48 0 1.2V6.6C0 7.32 0.487211 7.8 1.21803 7.8H6.69916C7.42997 7.8 7.91719 7.32 7.91719 6.6C7.91719 5.88 7.42997 5.4 6.69916 5.4H3.77589C5.48113 3.48 8.03899 2.4 10.8405 2.4C16.1998 2.4 20.5847 6.72 20.5847 12C20.5847 17.28 16.1998 21.6 10.8405 21.6C10.1096 21.6 9.62242 22.08 9.62242 22.8C9.62242 23.52 10.1096 24 10.8405 24C15.2254 24 19.2448 21.72 21.4373 18C24.726 12.24 22.6553 4.92 16.8088 1.56ZM10.7186 7.2C9.98783 7.2 9.50062 7.68 9.50062 8.4V12C9.50062 12.72 9.98783 13.2 10.7186 13.2H13.1547C13.8855 13.2 14.3727 12.72 14.3727 12C14.3727 11.28 13.8855 10.8 13.1547 10.8H11.9367V8.4C11.9367 7.68 11.4495 7.2 10.7186 7.2Z"
                fill="white"
              />
            </StyledSVG>
            History
          </StyledLink>
        </StyledLi>
      </StyledUl>
      <ButtonWrapper>
        <AlertDialogDemo />
      </ButtonWrapper>
    </StyledNav>
  );
};

const StyledSVG = styled.svg`
  height: auto;
  width: 1.1rem;
  margin-right: 0.6rem;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  bottom: 0;
  margin-left: 0.3rem;
  margin-bottom: 0.5rem;
`;

const StyledUl = styled.ul`
  z-index: 2;
`;

const SelectionBG = styled.div`
  z-index: 1;
  width: 100%;
  height: 3rem;
  position: absolute;
  background-color: #3a4056;
  transition: 0.3s;
`;

const StyledLink = styled(BaseLink)`
  color: white;
  padding-inline: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
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
  background-color: #303547;
`;

const StyledH1 = styled(BaseH1)`
  color: white;
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

const StyledLi = styled(BaseListItem)`
  margin: 1rem 0rem;
  height: 3rem;
  line-height: 3rem;
  align-self: center;
  font-weight: ${({ $isActive }) => ($isActive ? "600" : "400")};
  &:hover a {
    font-weight: 600;
  }
`;

export default Nav;
