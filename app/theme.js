"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: "#5B4FE9", // Orbit Blue
      light: "#7B6FF9",
      dark: "#4A3FD8", // Hover state
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#E94F8A", // Del gradiente para accents
      light: "#F9A826", // Del gradiente para highlights
      dark: "#D43F7A",
      contrastText: "#FFFFFF",
    },
    grey: {
      50: "#FFFFFF",
      200: "#E5E5E5",
      500: "#808080",
      700: "#404040",
      900: "#0A0A0A",
    },
    background: {
      default: "#FFFFFF",
      paper: "#E5E5E5",
    },
    text: {
      primary: "#0A0A0A",
      secondary: "#404040",
    },
  },
  typography: {
    fontFamily: '"Work Sans", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Inter", "Roboto", sans-serif',
      fontWeight: 700,
      fontSize: "3rem", // 48px
    },
    h2: {
      fontFamily: '"Inter", "Roboto", sans-serif',
      fontWeight: 600,
      fontSize: "2.25rem", // 36px
    },
    h3: {
      fontFamily: '"Inter", "Roboto", sans-serif',
      fontWeight: 600,
      fontSize: "1.5rem", // 24px
    },
    body1: {
      fontSize: "1rem", // 16px
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.875rem", // 14px
      fontWeight: 400,
    },
    button: {
      fontFamily: '"Inter", "Roboto", sans-serif',
      fontWeight: 500,
      textTransform: "none", // Evita MAYÚSCULAS automáticas
    },
  },
  spacing: 8, // Base de 8px
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          transition: "all 0.2s ease",
          "&:hover": {
            transform: "translateY(-1px)",
            boxShadow: "0 4px 12px rgba(91, 79, 233, 0.2)",
          },
        },
        containedPrimary: {
          background: "#5B4FE9",
          "&:hover": {
            background: "#4A3FD8",
          },
          "&:active": {
            background: "#3A2FC7",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none", // Elimina gradientes por defecto
        },
      },
    },
  },
});

export default theme;
