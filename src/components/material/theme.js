import { createMuiTheme } from "@material-ui/core";

// const palletType = darkState ? "dark" : "light";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#66180d",
    },
    secondary: {
      main: "#f5f5f5",
    },
  },
});

export default theme;
