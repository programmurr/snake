import { BOUNDARIES, DIRECTIONS } from "../constants";
import { Position } from "../types/snake";

const borderClass = (i: number, j: number) => {
  let borderClass = "";
  if (i === 0) {
    borderClass += " top";
  }
  if (i === BOUNDARIES.x - 1) {
    borderClass += " bottom";
  }
  if (j === 0) {
    borderClass += " left";
  }
  if (j === BOUNDARIES.y - 1) {
    borderClass += " right";
  }
  return borderClass;
};

const updatePositions = (head: Position, newPositions: Position[]) => {
  return [head, ...newPositions.slice(0, newPositions.length - 1)];
};

const isInvalidDirection = (direction: string, newDirection: string) => {
  return (
    (newDirection === DIRECTIONS.up && direction === DIRECTIONS.down) ||
    (newDirection === DIRECTIONS.down && direction === DIRECTIONS.up) ||
    (newDirection === DIRECTIONS.left && direction === DIRECTIONS.right) ||
    (newDirection === DIRECTIONS.right && direction === DIRECTIONS.left)
  );
};

export { borderClass, updatePositions, isInvalidDirection };
