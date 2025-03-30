import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

export const GameOverDialog = ({
  score,
  open,
  handleReset,
}: {
  score: number;
  open: boolean;
  handleReset: () => void;
}) => {
  return (
    <Dialog open={open} onClose={handleReset}>
      <DialogTitle>Game Over!</DialogTitle>
      <DialogContent>
        <DialogContentText>Score: {score}</DialogContentText>
        <DialogActions>
          <Button onClick={handleReset}>Reset</Button>
          <Button>Save</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};
