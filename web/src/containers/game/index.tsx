import { useEffect, useState } from "react";
import { useControls } from "../../hooks/useControls";
import { useFood } from "../../hooks/useFood";
import { useGrid } from "../../hooks/useGrid";
import { useSnake } from "../../hooks/useSnake";
import { collision, snakeIsEatingFood } from "../../utils";
import { Box, Button, Typography } from "@mui/material";
import { GameOverDialog } from "../../components/GameOverDialog";
import { DIFFICULTIES } from "../../constants";
import { DifficultySlider } from "../../components/DifficultySlider";
import { HighScores } from "../../components/HighScores";

export const Game = () => {
  const { snake, move, grow, changeDirection } = useSnake();
  const { foodPosition, foodIsPlaced, updateFoodPosition } = useFood(
    snake.positions
  );
  const { grid } = useGrid(snake.positions, foodPosition);

  useControls(changeDirection);

  const [isPlaying, setIsPlaying] = useState(false);

  const [score, setScore] = useState(0);

  const [open, setOpen] = useState(false);

  const [difficulty, setDifficulty] = useState(DIFFICULTIES[0]);

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
          setScore((prev) => prev + 1 * difficulty.multiplier);
          grow();
        }
        if (collision(snake.positions)) {
          setIsPlaying(false);
          setOpen(true);
        }
      }, difficulty.value);
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
    difficulty,
  ]);

  return (
    <Box component="main">
      <Box component="section">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h1">Snek</Typography>
          <Typography variant="body1" sx={{ margin: "0 0 1rem 0" }}>
            Score: {score}
          </Typography>
          <Box className="grid-container">{grid}</Box>
          <DifficultySlider
            value={difficulty.value}
            handleSliderChange={(_, value) => {
              if (!Array.isArray(value)) {
                setDifficulty(
                  () =>
                    DIFFICULTIES.find((d) => d.value === value) ??
                    DIFFICULTIES[0]
                );
              }
            }}
          />
          <Button
            variant="contained"
            sx={{ margin: "2rem 0" }}
            onClick={() => setIsPlaying(true)}
          >
            Start
          </Button>
          <HighScores />
          <GameOverDialog
            score={score}
            open={open}
            handleReset={() => window.location.reload()}
          />
        </Box>
      </Box>
    </Box>
  );
};
