import { createTheme, responsiveFontSizes } from "@mui/material/styles";

import { colors } from "constants/colors";

export const theme = responsiveFontSizes(
  createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1366,
        xl: 1920,
        xxl: 2560,
      },
    },
    palette: {
      primary: {
        main: colors.RICK_BLACK,
        light: colors.PALE_SILVER,
        dark: colors.DARK_GREY,
      },
      secondary: {
        main: colors.ORANGE,
      },
      success: {
        main: colors.PALE_SILVER,
      },
      error: {
        main: colors.RED,
      },
      background: {
        default: colors.WHITE,
        contrastText: colors.RICK_BLACK,
      },
      text: {
        primary: colors.RICK_BLACK,
      },
      info: {
        primary: colors.CINNAMON,
        secondary: colors.DARK_MAGENTA,
        main: colors.WHITE,
      },
    },
    typography: {
      fontFamily: `"Alpha-Regular", "Helvetica", "Arial", sans-serif`,
      h5: {
        fontSize: "1.56rem",
        fontWeight: "bold",
      },
      h6: {
        fontSize: "1rem",
      },
      body1: {
        fontSize: "0.78rem",
      },
      body2: {
        fontSize: "0.58rem",
      },
      button: {
        fontSize: "0.78rem",
        fontWeight: "bold",
      },
      subtitle1: {
        fontSize: "0.62rem",
      },
    },
    overrides: {
      MuiTableCell: {
        root: {
          textDecoration: "none",
        },
      },
      MuiAccordionSummary: {
        root: {
          "&$expanded": {
            minHeight: 48,
          },
        },
        content: {
          "&$expanded": {
            margin: 0,
          },
        },
      },
    },
  })
);
