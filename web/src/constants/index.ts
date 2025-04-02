const START = { x: 12, y: 12 };

const BOUNDARIES = { x: 25, y: 25 };

const DIRECTIONS = {
  UP: "UP",
  DOWN: "DOWN",
  LEFT: "LEFT",
  RIGHT: "RIGHT",
} as const;

const DIFFICULTIES = [
  { label: "Easy", value: 110, multiplier: 1 },
  { label: "Medium", value: 50, multiplier: 2 },
  { label: "Hard", value: 10, multiplier: 3 },
];

export { START, BOUNDARIES, DIRECTIONS, DIFFICULTIES };
