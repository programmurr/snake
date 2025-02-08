import { DIRECTIONS } from "../constants";

type Directions = (typeof DIRECTIONS)[keyof typeof DIRECTIONS];

interface Position {
  x: number;
  y: number;
}

interface Snake {
  direction: Directions;
  length: number;
  positions: Position[];
}

export type { Snake, Directions, Position };
