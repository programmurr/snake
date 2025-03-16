import { ReactNode, useEffect, useState } from "react";
import { BOUNDARIES } from "../constants";
import { Food, Position } from "../types";
import { borderClass } from "../utils";
import { GridCell, GridContainer, GridRow } from "./grid/items";

type Props = {
  snakePositions: Position[];
  food: Food | null;
};

export const Grid = ({ snakePositions, food }: Props) => {
  const [grid, setGrid] = useState<ReactNode[]>([]);

  useEffect(() => {
    setGrid(
      Array.from({ length: BOUNDARIES.x }, (_, i) => (
        <GridRow key={i}>
          {Array.from({ length: BOUNDARIES.y }, (_, j) => (
            <GridCell key={`${i}-${j}`} className={borderClass(i, j)}>
              {snakePositions.some((pos) => pos.x === i && pos.y === j)
                ? "o"
                : food?.x === i && food?.y === j
                ? "x"
                : " "}
            </GridCell>
          ))}
        </GridRow>
      ))
    );
  }, [snakePositions, food]);

  return <GridContainer>{grid}</GridContainer>;
};
