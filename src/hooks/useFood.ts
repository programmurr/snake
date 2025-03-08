import { useCallback, useState } from "react";
import { BOUNDARIES } from "../constants";
import { Food, Position } from "../types";

export const useFood = (snakePositions: Position[]) => {
  const [foodPosition, setFoodPosition] = useState<Food | null>(null);
  const [foodIsPlaced, setFoodIsPlaced] = useState(false);

  const updateFoodPosition = useCallback(() => {
    const x = Math.floor(Math.random() * BOUNDARIES.x);
    const y = Math.floor(Math.random() * BOUNDARIES.y);
    if (snakePositions.some((pos) => pos.x === x && pos.y === y)) {
      updateFoodPosition();
    } else {
      setFoodPosition({ x, y });
      setFoodIsPlaced(true);
    }
  }, [snakePositions]);

  return { foodPosition, foodIsPlaced, updateFoodPosition };
};
