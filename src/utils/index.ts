import { BOUNDARIES, DIRECTIONS } from "../constants";
import { Food, Position } from "../types";

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

const updatePositions = (head: Position, newPositions: Position[]) => [
  head,
  ...newPositions.slice(0, newPositions.length - 1),
];

const isInvalidDirection = (direction: string, newDirection: string) =>
  (newDirection === DIRECTIONS.up && direction === DIRECTIONS.down) ||
  (newDirection === DIRECTIONS.down && direction === DIRECTIONS.up) ||
  (newDirection === DIRECTIONS.left && direction === DIRECTIONS.right) ||
  (newDirection === DIRECTIONS.right && direction === DIRECTIONS.left);

const snakeIsEatingFood = (snakePositions: Position, foodPositions: Food) =>
  snakePositions.x === foodPositions.x && snakePositions.y === foodPositions.y;

const boundaryCollision = (head: Position) =>
  head.x < 0 ||
  head.x === BOUNDARIES.x ||
  head.y < 0 ||
  head.y === BOUNDARIES.y;

const bodyCollision = (head: Position, body: Position[]) =>
  body.some((position) => position.x === head.x && position.y === head.y);

const collision = (snakePositions: Position[]) => {
  const head = snakePositions[0];
  const body = snakePositions.slice(1);
  return boundaryCollision(head) || bodyCollision(head, body);
};

export {
  borderClass,
  updatePositions,
  isInvalidDirection,
  snakeIsEatingFood,
  collision,
};
