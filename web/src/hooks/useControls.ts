import { useEffect } from "react";
import { Directions } from "../types";
import { DIRECTIONS } from "../constants";

export const useControls = (onKeyDown: (direction: Directions) => void) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp":
          onKeyDown(DIRECTIONS.UP);
          break;
        case "ArrowDown":
          onKeyDown(DIRECTIONS.DOWN);
          break;
        case "ArrowLeft":
          onKeyDown(DIRECTIONS.LEFT);
          break;
        case "ArrowRight":
          onKeyDown(DIRECTIONS.RIGHT);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onKeyDown]);
};
