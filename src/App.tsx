import "./App.css";
import { useControls } from "./hooks/useControls";
import { useFood } from "./hooks/useFood";
import { useGrid } from "./hooks/useGrid";
import { useSnake } from "./hooks/useSnake";
import { useEffect, useState } from "react";

function App() {
  const { snake, move, changeDirection } = useSnake();
  const { foodPosition, foodIsPlaced, updateFoodPosition } = useFood(
    snake.positions
  );
  const { grid } = useGrid(snake.positions, foodPosition);
  useControls(changeDirection);

  const [score] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        if (!foodIsPlaced) {
          updateFoodPosition();
        }
        move();
      }, 200);
      return () => clearInterval(interval);
    }
  }, [isPlaying, move, foodIsPlaced, updateFoodPosition]);

  return (
    <div>
      <h1>Snake Game</h1>
      <div>
        <div>Score: {score}</div>
        <button onClick={() => setIsPlaying(true)}>Start</button>
        <button onClick={() => setIsPlaying(false)}>Stop</button>
        <div className="grid-container">{grid}</div>
      </div>
    </div>
  );
}

export default App;
