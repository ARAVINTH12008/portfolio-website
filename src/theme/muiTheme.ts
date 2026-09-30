import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { colors } from "./colors";
import { typography } from "./typography";

const baseTheme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: colors.primary.main,
      light: colors.primary.light,
      dark: colors.primary.dark,
      contrastText: colors.common.white,
    },

    secondary: {
      main: colors.secondary.main,
      light: colors.secondary.light,
      dark: colors.secondary.dark,
      contrastText: colors.background.primary,
    },

    success: {
      main: colors.success,
    },

    warning: {
      main: colors.warning,
    },

    error: {
      main: colors.error,
    },

    background: {
      default: colors.background.primary,
      paper: colors.background.tertiary,
    },

    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
      disabled: colors.text.muted,
    },

    divider: colors.border.primary,
  },

  typography: {
    fontFamily: typography.fontFamily,

    h1: {
      fontWeight: typography.fontWeight.extraBold,
      lineHeight: typography.lineHeight.heading,
      letterSpacing: "-0.04em",
    },

    h2: {
      fontWeight: typography.fontWeight.bold,
      lineHeight: typography.lineHeight.heading,
      letterSpacing: "-0.03em",
    },

    h3: {
      fontWeight: typography.fontWeight.bold,
      lineHeight: typography.lineHeight.heading,
      letterSpacing: "-0.02em",
    },

    h4: {
      fontWeight: typography.fontWeight.semiBold,
      lineHeight: typography.lineHeight.heading,
    },

    h5: {
      fontWeight: typography.fontWeight.semiBold,
      lineHeight: typography.lineHeight.heading,
    },

    h6: {
      fontWeight: typography.fontWeight.semiBold,
      lineHeight: typography.lineHeight.heading,
    },

    body1: {
      fontSize: typography.body,
      lineHeight: typography.lineHeight.body,
      color: colors.text.secondary,
    },

    body2: {
      fontSize: typography.bodySmall,
      lineHeight: 1.6,
      color: colors.text.muted,
    },

    button: {
      fontWeight: typography.fontWeight.semiBold,
      textTransform: "none",
      letterSpacing: "0.01em",
    },
  },

  shape: {
    borderRadius: 14,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
          scrollPaddingTop: "80px",
        },

        body: {
          margin: 0,
          minWidth: "320px",
          minHeight: "100vh",
          overflowX: "hidden",
          backgroundColor: colors.background.primary,
        },

        "*": {
          boxSizing: "border-box",
        },

        "*::before": {
          boxSizing: "border-box",
        },

        "*::after": {
          boxSizing: "border-box",
        },

        "::selection": {
          color: colors.common.white,
          backgroundColor: colors.primary.main,
        },

        a: {
          color: "inherit",
          textDecoration: "none",
        },

        button: {
          fontFamily: "inherit",
        },

        img: {
          display: "block",
          maxWidth: "100%",
        },
      },
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },

      styleOverrides: {
        root: {
          minHeight: "44px",
          padding: "10px 22px",
          borderRadius: "10px",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});

export const muiTheme = responsiveFontSizes(baseTheme, {
  breakpoints: ["sm", "md", "lg"],
  factor: 2,
});
