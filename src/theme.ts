import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
  props: {
    MuiTextField: {
      margin: "dense",
      variant: "outlined",
    },
    MuiButton: {
      size: "small",
      variant: "outlined",
    },
    MuiSelect: {
      MenuProps: {
        variant: "menu",
        getContentAnchorEl: null,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center",
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      },
    },
  },
});
