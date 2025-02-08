import "./App.css";
import { useControls } from "./hooks/controls";
import { useGrid } from "./hooks/useGrid";
import { useSnake } from "./hooks/useSnake";
import { useEffect, useState } from "react";

function App() {
  const { snake, move, changeDirection } = useSnake();
  const { grid } = useGrid(snake);

  const [score] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useControls(changeDirection);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        move();
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  return (
    <div>
      <h1>Snake Game</h1>
      <div>
        <div>Score: {score}</div>
        <div>Direction: {snake.direction}</div>
        <button onClick={() => setIsPlaying(true)}>Start</button>
        <button onClick={() => setIsPlaying(false)}>Stop</button>
        <div className="grid-container">{grid}</div>
      </div>
    </div>
  );
}

export default App;
