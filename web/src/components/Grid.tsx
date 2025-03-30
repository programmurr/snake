import { ReactNode, useEffect, useState } from "react";
import { BOUNDARIES } from "../constants";
import { Food, Position } from "../types";
import { borderClass } from "../utils";

type Props = {
  snakePositions: Position[];
  food: Food | null;
};

export const Grid = ({ snakePositions, food }: Props) => {
  const [grid, setGrid] = useState<ReactNode[]>([]);

  useEffect(() => {
    setGrid(
      Array.from({ length: BOUNDARIES.x }, (_, i) => (
        <div key={i}>
          {Array.from({ length: BOUNDARIES.y }, (_, j) => (
            <div key={`${i}-${j}`} className={borderClass(i, j)}>
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

  return grid;
};
