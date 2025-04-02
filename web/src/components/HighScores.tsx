import { Box, Divider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchHighScores } from "../hooks/useHighScores";
import { Score } from "../types";

export const HighScores = () => {
  const [scores, setScores] = useState<Score[]>([]);

  useEffect(() => {
    fetchHighScores().then((data) => setScores(data));
  }, []);

  return (
    <Box>
      <Typography variant="h5">High Scores</Typography>
      <Divider sx={{ marginTop: "0.5rem" }} />
      <Box display="flex" flexDirection="column" alignItems="center">
        {scores.map((score) => (
          <Typography
            key={`${score.name}${score.score}`}
            sx={{ marginTop: "0.5rem" }}
          >{`${score.name}: ${score.score}`}</Typography>
        ))}
      </Box>
    </Box>
  );
};
