import { Score } from "../types";

export const getHighScores = async () => {
  try {
    const response = await fetch("/api/high-scores");
    return response.json();
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const postHighScore = async (score: Score) => {
  const response = await fetch("/api/high-scores", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(score),
  });

  if (!response.ok) {
    throw new Error("Failed to submit score");
  }

  return response;
};
