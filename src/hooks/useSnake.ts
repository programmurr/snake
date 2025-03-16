import { DIRECTIONS, START } from "../constants";
import { Directions, Snake } from "../types";
import { isInvalidDirection, updatePositions } from "../utils";
import { useCallback, useState } from "react";

export const useSnake = () => {
  const [snake, setSnake] = useState<Snake>({
    direction: DIRECTIONS.up,
    length: 3,
    positions: [...Array(3).keys()].reverse().map((i) => ({
      x: START.x - i,
      y: START.y,
    })),
  });

  const move = useCallback(() => {
    setSnake((prev) => {
      const newPositions = prev.positions.slice();
      const head = { ...newPositions[0] };
      switch (prev.direction) {
        case DIRECTIONS.up:
          return {
            ...prev,
            positions: updatePositions(
              { x: head.x - 1, y: head.y },
              newPositions
            ),
          };
        case DIRECTIONS.down:
          return {
            ...prev,
            positions: updatePositions(
              { x: head.x + 1, y: head.y },
              newPositions
            ),
          };
        case DIRECTIONS.left:
          return {
            ...prev,
            positions: updatePositions(
              { x: head.x, y: head.y - 1 },
              newPositions
            ),
          };
        case DIRECTIONS.right:
          return {
            ...prev,
            positions: updatePositions(
              { x: head.x, y: head.y + 1 },
              newPositions
            ),
          };
      }
    });
  }, []);

  const changeDirection = useCallback(
    (newDirection: Directions) => {
      if (isInvalidDirection(snake.direction, newDirection)) {
        return;
      }
      setSnake((prev) => ({ ...prev, direction: newDirection }));
    },
    [snake.direction]
  );

  const growSnake = () => {
    setSnake((prev) => {
      const tail = {
        x: prev.positions[prev.length - 1].x,
        y: prev.positions[prev.length - 1].y,
      };
      return {
        ...prev,
        length: prev.length + 1,
        positions: [...prev.positions, tail],
      };
    });
  };

  return { snake, move, changeDirection, growSnake };
};
