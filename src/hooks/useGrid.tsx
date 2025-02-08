import { useEffect, useState } from "react";
import { BOUNDARIES } from "../constants";
import { Snake } from "../types/snake";
import { borderClass } from "../utils";

export const useGrid = (snake: Snake) => {
  const [grid, setGrid] = useState<JSX.Element[]>([]);

  useEffect(() => {
    setGrid(
      Array.from({ length: BOUNDARIES.x }, (_, i) => (
        <div key={i} className="grid-row">
          {Array.from({ length: BOUNDARIES.y }, (_, j) => (
            <div key={`${i}-${j}`} className={`grid-cell${borderClass(i, j)}`}>
              {snake.positions.some((pos) => pos.x === i && pos.y === j)
                ? "o"
                : " "}
            </div>
          ))}
        </div>
      ))
    );
  }, [snake.positions]);

  return { grid };
};
