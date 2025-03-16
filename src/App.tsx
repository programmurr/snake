import "./App.css";
import { useControls } from "./hooks/useControls";
import { useFood } from "./hooks/useFood";
import { useGrid } from "./hooks/useGrid";
import { useSnake } from "./hooks/useSnake";
import { useEffect, useState } from "react";
import { snakeIsEatingFood } from "./utils";

function App() {
  const { snake, move, growSnake, changeDirection } = useSnake();
  const { foodPosition, foodIsPlaced, updateFoodPosition } = useFood(
    snake.positions
  );
  const { grid } = useGrid(snake.positions, foodPosition);
  useControls(changeDirection);

  const [isPlaying, setIsPlaying] = useState(false);

  const [score, setScore] = useState(0);

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
          growSnake();
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
  ]);

  return (
    <div>
      <h1>Snake Game</h1>
      <div>
        <p>Score: {score}</p>
        <button onClick={() => setIsPlaying(true)}>Start</button>
        <button onClick={() => setIsPlaying(false)}>Stop</button>
        <div className="grid-container">{grid}</div>
      </div>
    </div>
  );
}

export default App;
