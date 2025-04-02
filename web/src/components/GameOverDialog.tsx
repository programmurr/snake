import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { postHighScore } from "../api";

export const GameOverDialog = ({
  score,
  open,
  handleReset,
}: {
  score: number;
  open: boolean;
  handleReset: () => void;
}) => {
  const theme = useTheme();
  const [name, setName] = useState("");
  const isValidationError = name.length > 3;

  const [error, setError] = useState(false);

  const handleSave = () => {
    postHighScore({ name, score })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      });
  };

  return (
    <Dialog open={open} onClose={handleReset}>
      <DialogTitle>Game Over!</DialogTitle>
      <DialogContent>
        <DialogContentText>Score: {score}</DialogContentText>
        <DialogContentText>
          Enter your name here and click Save to submit your score!
        </DialogContentText>
        <TextField
          label="Name (max 3 letters)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ marginTop: "1rem" }}
          fullWidth
          error={isValidationError}
          helperText={isValidationError && "Name can be a maximum length of 3"}
        />
        <DialogActions>
          <Button onClick={handleReset}>Reset</Button>
          <Button disabled={isValidationError} onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
        {error && (
          <DialogContentText color={theme.palette.error.dark}>
            Error submitting score. Sorry. Please try again or click Reset.
          </DialogContentText>
        )}
      </DialogContent>
    </Dialog>
  );
};
