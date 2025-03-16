import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import { Game } from "./containers/game";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Game />
    </ThemeProvider>
  );
}

export default App;
