import { DIRECTIONS } from "../constants";

type Directions = (typeof DIRECTIONS)[keyof typeof DIRECTIONS];

type Food = {
  x: number;
  y: number;
};

interface Position {
  x: number;
  y: number;
}

interface Snake {
  direction: Directions;
  length: number;
  positions: Position[];
}

interface Score {
  name: string;
  score: number;
}

export type { Snake, Directions, Position, Food, Score };
