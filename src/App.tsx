import "./App.css";
import { useControls } from "./hooks/useControls";
import { useFood } from "./hooks/useFood";
import { useGrid } from "./hooks/useGrid";
import { useSnake } from "./hooks/useSnake";
import { useEffect, useRef, useState } from "react";
import { collision, snakeIsEatingFood } from "./utils";
import { Dialog } from "./components/Dialog";

function App() {
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
    <div>
      <h1>Snek</h1>
      <div>
        <p>Score: {score}</p>
        <button onClick={() => setIsPlaying(true)}>Start</button>
        <button onClick={() => setIsPlaying(false)}>Stop</button>
        <div className="grid-container">{grid}</div>
        <Dialog score={score} dialogRef={dialogRef} />
      </div>
    </div>
  );
}

export default App;
