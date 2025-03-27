import { Box, Slider, Typography } from "@mui/material";
import { DIFFICULTIES } from "../constants";

export const DifficultySlider = ({
  handleSliderChange,
  value,
}: {
  handleSliderChange: (event: Event, newValue: number | number[]) => void;
  value: number;
}) => {
  return (
    <Box
      sx={{
        marginTop: "2rem",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="body1">Difficulty</Typography>
      <Slider
        track={false}
        marks={DIFFICULTIES}
        onChange={handleSliderChange}
        value={value}
        min={DIFFICULTIES[2].value}
        max={DIFFICULTIES[0].value}
        step={20}
        sx={{ marginTop: "1rem" }}
      />
    </Box>
  );
};
