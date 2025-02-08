import { BOUNDARIES } from "../constants";

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

export { borderClass };
