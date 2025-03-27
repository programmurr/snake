const START = { x: 12, y: 12 };

const BOUNDARIES = { x: 25, y: 25 };

const DIRECTIONS = {
  UP: "UP",
  DOWN: "DOWN",
  LEFT: "LEFT",
  RIGHT: "RIGHT",
} as const;

const DIFFICULTIES = [
  { label: "Easy", value: 110 },
  { label: "Medium", value: 50 },
  { label: "Hard", value: 10 },
];

export { START, BOUNDARIES, DIRECTIONS, DIFFICULTIES };
