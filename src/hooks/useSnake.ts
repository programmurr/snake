import { useImmer } from "use-immer";
import { START } from "../constants";
import { Snake } from "../types/snake";

export const useSnake = () => {
  const [snake, updateSnake] = useImmer<Snake>({
    direction: "UP",
    length: 3,
    position: [...Array(3).keys()].map((i) => ({
      x: START.x - i,
      y: START.y,
    })),
  });

  const move = () => {
    updateSnake((draft) => {
      draft.position.forEach((pos) => pos.x--);
    });
  };

  return { snake, move };
};
