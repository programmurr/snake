import { useEffect, useState } from "react";
import { BOUNDARIES } from "../constants";
import { Food, Position } from "../types";
import { borderClass } from "../utils";

export const useGrid = (snakePositions: Position[], food: Food | null) => {
  const [grid, setGrid] = useState<JSX.Element[]>([]);

  useEffect(() => {
    setGrid(
      Array.from({ length: BOUNDARIES.x }, (_, i) => (
        <div key={i} className="grid-row">
          {Array.from({ length: BOUNDARIES.y }, (_, j) => (
            <div key={`${i}-${j}`} className={`grid-cell${borderClass(i, j)}`}>
              {snakePositions.some((pos) => pos.x === i && pos.y === j)
                ? "o"
                : food?.x === i && food?.y === j
                ? "x"
                : " "}
            </div>
          ))}
        </div>
      ))
    );
  }, [snakePositions, food]);

  return { grid };
};
