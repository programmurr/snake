export const fetchHighScores = async () => {
  try {
    const response = await fetch("/api/high-scores");
    return response.json();
  } catch (e) {
    console.error(e);
    return [];
  }
};
