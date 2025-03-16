import { RefObject } from "react";

export const Dialog = ({
  dialogRef,
  score,
}: {
  dialogRef: RefObject<HTMLDialogElement>;
  score: number;
}) => {
  const handleClose = () => {
    window.location.reload();
  };

  return (
    <dialog ref={dialogRef}>
      <p>Game Over!</p>
      <p>Score: {score}</p>
      <button onClick={handleClose}>Reset</button>
      <button>Save</button>
    </dialog>
  );
};
