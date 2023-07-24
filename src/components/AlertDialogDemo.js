import * as AlertDialog from "@radix-ui/react-alert-dialog";
import "./alert.css";
import styled from "styled-components";
import { BaseButton } from "./GlobalStyles";

export const AlertDialogDemo = () => {
  const clearHandler = () => {
    localStorage.clear();
    window.location.reload(false);
  };

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <StyledButton>Clear Storage</StyledButton>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="AlertDialogOverlay" />
        <AlertDialog.Content className="AlertDialogContent">
          <AlertDialog.Title className="AlertDialogTitle">
            Are you absolutely sure?
          </AlertDialog.Title>
          <AlertDialog.Description className="AlertDialogDescription">
            This action cannot be undone. This will permanently delete your
            browser local storage.
          </AlertDialog.Description>
          <div style={{ display: "flex", gap: 25, justifyContent: "flex-end" }}>
            <AlertDialog.Cancel asChild>
              <BaseButton>Cancel</BaseButton>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <BaseButton
                onClick={clearHandler}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  paddingInline: ".8rem",
                }}
              >
                Yes, clear everything
              </BaseButton>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

const StyledButton = styled(BaseButton)`
  text-align: center;
  padding-inline: 1rem;
`;
