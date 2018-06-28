import React from "react";
import ReactDOM from "react-dom";
import DashboardPage from "./components/DashboardPage";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./index.css";

const theme = createMuiTheme({
  typography: {
    fontSize: 16
  },
  button: {
    fontSize: 30
  },
  palette: {
    type: "dark",
    primary: {
      light: "#0097A7",
      main: "#00838F",
      dark: "#006064",
      contrastText: "#fff"
    },
    secondary: {
      light: "#80DEEA",
      main: "#4DD0E1",
      dark: "#26C6DA",
      contrastText: "#000"
    }
  }
});

document.body.style.margin = 0;

const DarkTheme = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <DashboardPage />
    </MuiThemeProvider>
  );
};

ReactDOM.render(<DarkTheme />, document.getElementById("root"));
