import "./App.css";
import { useGrid } from "./hooks/useGrid";
import { useSnake } from "./hooks/useSnake";
import { useEffect, useState } from "react";

function App() {
  const { snake, move } = useSnake();
  const { grid } = useGrid(snake);

  const [score, setScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      move();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Snake Game</h1>
      <div>
        <div>Score: {score}</div>
        <div className="grid-container">{grid}</div>
      </div>
    </div>
  );
}

export default App;
