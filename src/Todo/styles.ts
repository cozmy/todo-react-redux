import { makeStyles } from "@material-ui/core";

import { TTodoPriority } from "../types";

type Props = { overdue: boolean; priority: TTodoPriority };

export const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
  },
  accordion: {
    position: "relative",
    overflow: "hidden",

    "&:after": {
      background: ({ priority }: Props) => {
        if (priority === TTodoPriority.LOW) return theme.palette.success.light;
        if (priority === TTodoPriority.MEDIUM) return theme.palette.info.light;
        if (priority === TTodoPriority.HIGH) return theme.palette.error.light;

        return "none";
      },
      content: '""',
      height: "100%",
      left: 0,
      position: "absolute",
      top: 0,
      width: 5,
    },
  },
  accordionDetails: {
    paddingTop: 0,
  },
  accordionSummary: {
    // Prevents the moving effect
    margin: '12px 0 !important'
  },
  accordionSummaryContent: {
    alignItems: "center",
    display: "flex",
    flex: 1,
  },
  title: {
    margin: 0,

    "&:before": {
      borderColor: "transparent",
    },
  },
  dueDate: {
    color: ({ overdue }: Props) => (overdue ? theme.palette.error.light : theme.palette.text.secondary),
    paddingLeft: theme.spacing(1),
  },
}));
