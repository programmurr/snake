import { DIRECTIONS, START } from "../constants";
import { Directions, Snake } from "../types";
import { isInvalidDirection, updatePositions } from "../utils";
import { useCallback, useState } from "react";

export const useSnake = () => {
  const [snake, setSnake] = useState<Snake>({
    direction: DIRECTIONS.UP,
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
        case DIRECTIONS.UP:
          return {
            ...prev,
            positions: updatePositions(
              { x: head.x - 1, y: head.y },
              newPositions
            ),
          };
        case DIRECTIONS.DOWN:
          return {
            ...prev,
            positions: updatePositions(
              { x: head.x + 1, y: head.y },
              newPositions
            ),
          };
        case DIRECTIONS.LEFT:
          return {
            ...prev,
            positions: updatePositions(
              { x: head.x, y: head.y - 1 },
              newPositions
            ),
          };
        case DIRECTIONS.RIGHT:
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

  const grow = useCallback(() => {
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
  }, []);

  return { snake, move, changeDirection, grow };
};
