import React from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import styled from "styled-components";

export const TasksView = ({ children }) => (
  <StyledScrollAreaRoot>
    <StyledScrollAreaViewport>{children}</StyledScrollAreaViewport>
    <StyledScrollAreaScrollbar orientation="vertical">
      <StyledScrollAreaThumb />
    </StyledScrollAreaScrollbar>
    <StyledScrollAreaScrollbar orientation="horizontal">
      <StyledScrollAreaThumb />
    </StyledScrollAreaScrollbar>
    <StyledScrollAreaCorner />
  </StyledScrollAreaRoot>
);

const StyledScrollAreaRoot = styled(ScrollArea.Root)`
  overflow: hidden;
  flex: 1 1 auto;
`;

const StyledScrollAreaViewport = styled(ScrollArea.Viewport)`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  padding-right: 2rem;
`;

const StyledScrollAreaScrollbar = styled(ScrollArea.Scrollbar)`
  display: flex;
  user-select: none;
  touch-action: none;
  padding: 1px;
  margin: 10px;
  background: #777777;
  transition: background 160ms ease-out;

  &:hover {
    background: var(--black-a8);
  }

  &[data-orientation="vertical"] {
    width: 10px;
  }

  &[data-orientation="horizontal"] {
    flex-direction: column;
    height: 10px;
  }
`;

const StyledScrollAreaThumb = styled(ScrollArea.Thumb)`
  flex: 1;
  background: #4a4aff;
  border-radius: 1px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    min-width: 44px;
    min-height: 44px;
  }
`;

const StyledScrollAreaCorner = styled(ScrollArea.Corner)`
  background: #000000;
`;
