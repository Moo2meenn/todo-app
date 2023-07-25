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
          <div style={{ display: "flex", gap: 5, justifyContent: "flex-end" }}>
            <AlertDialog.Cancel asChild>
              <BaseButton
                style={{
                  backgroundColor: "#eeeeee",
                  color: "#303547",
                  border: "0.1rem solid #e9e9e9",
                }}
              >
                Cancel
              </BaseButton>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <BaseButton
                onClick={clearHandler}
                style={{
                  backgroundColor: "#FF5A5A",
                  color: "white",
                  border: "0.1rem solid #FF7A7A",
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
