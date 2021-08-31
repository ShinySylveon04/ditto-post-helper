import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: "#0277bd"
    },
    secondary: {
      main: "#fff"
    }
  }
});
