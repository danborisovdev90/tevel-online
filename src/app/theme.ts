import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "var(--font-rubik), Arial, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          direction: "rtl",
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            padding: "6px 12px",
          },
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        root: {
          "& .MuiSelect-select": {
            padding: "6px 12px",
          },
        },
      },
    },
  },
});
