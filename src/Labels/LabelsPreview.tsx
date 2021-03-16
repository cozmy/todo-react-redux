import { Chip, makeStyles } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

import { labelsSelectors } from "../redux/labels";
import { TState } from "../redux/store";
import { Todo } from "../types";

export const useStyles = makeStyles((theme) => ({
  label: {
    marginLeft: theme.spacing(1),
  },
}));

function LabelsPreview({ value }: { value: Todo["labels"] }) {
  const classes = useStyles();
  const labels = useSelector((state: TState) => labelsSelectors.selectByIds(state, value));

  return (
    <>
      {labels.map((label) => (
        <Chip className={classes.label} label={label.title} key={label.id} />
      ))}
    </>
  );
}

export default React.memo(LabelsPreview);
