import { useEffect } from "react";
import { Directions } from "../types";
import { DIRECTIONS } from "../constants";

export const useControls = (onKeyDown: (direction: Directions) => void) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp":
          onKeyDown(DIRECTIONS.up);
          break;
        case "ArrowDown":
          onKeyDown(DIRECTIONS.down);
          break;
        case "ArrowLeft":
          onKeyDown(DIRECTIONS.left);
          break;
        case "ArrowRight":
          onKeyDown(DIRECTIONS.right);
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
