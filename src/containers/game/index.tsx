import { useEffect, useRef, useState } from "react";
import { useControls } from "../../hooks/useControls";
import { useFood } from "../../hooks/useFood";
import { useGrid } from "../../hooks/useGrid";
import { useSnake } from "../../hooks/useSnake";
import { collision, snakeIsEatingFood } from "../../utils";
import { Box, Button, Typography } from "@mui/material";
import { Dialog } from "../../components/Dialog";

export const Game = () => {
  const { snake, move, grow, changeDirection } = useSnake();
  const { foodPosition, foodIsPlaced, updateFoodPosition } = useFood(
    snake.positions
  );
  const { grid } = useGrid(snake.positions, foodPosition);

  useControls(changeDirection);

  const [isPlaying, setIsPlaying] = useState(false);

  const [score, setScore] = useState(0);

  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleShowDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        if (!foodIsPlaced) {
          updateFoodPosition();
        }
        move();
        if (
          foodPosition &&
          snakeIsEatingFood(snake.positions[0], foodPosition)
        ) {
          updateFoodPosition();
          setScore((prev) => prev + 1);
          grow();
        }
        if (collision(snake.positions)) {
          setIsPlaying(false);
          handleShowDialog();
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [
    isPlaying,
    move,
    foodIsPlaced,
    updateFoodPosition,
    snake.positions,
    foodPosition,
    grow,
  ]);

  return (
    <>
      <Typography variant="h2">Snek</Typography>
      <Box>
        <Typography variant="body1">Score: {score}</Typography>
        <Button onClick={() => setIsPlaying(true)}>Start</Button>
        <Button onClick={() => setIsPlaying(false)}>Stop</Button>
        <Box className="grid-container">{grid}</Box>
        <Dialog score={score} dialogRef={dialogRef} />
      </Box>
    </>
  );
};
