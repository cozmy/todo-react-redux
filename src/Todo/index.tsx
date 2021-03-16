import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Checkbox, Grid, Hidden, Input, MenuItem, TextField, Typography } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { format } from "date-fns";
import React from "react";
import { useDispatch } from "react-redux";

import LabelsPreview from "../Labels/LabelsPreview";
import LabelsSelect from "../Labels/LabelsSelect";
import { todosActions } from "../redux/todos";
import { dateFormat, Todo as TodoClass, TTodoPriority } from "../types";
import { useStyles } from "./styles";

function Todo({ id, title, description, completionDate, dueDate, labels, priority }: TodoClass) {
  const dispatch = useDispatch();

  const remove = React.useCallback(() => dispatch(todosActions.remove(id)), [id]);
  const update = React.useCallback((changes: any) => dispatch(todosActions.update({ id: id, changes })), [id]);

  const overdue = React.useMemo(() => Boolean(dueDate && new Date() > new Date(dueDate)), [dueDate]);
  const classes = useStyles({ overdue, priority });

  return (
    <Box className={classes.root}>
      <Accordion className={classes.accordion} TransitionProps={{ unmountOnExit: true }} square>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} classes={{ content: classes.accordionSummary }}>
          <div className={classes.accordionSummaryContent} onClick={(event) => event.stopPropagation()} onFocus={(event) => event.stopPropagation()}>
            <Checkbox
              checked={!!completionDate}
              onChange={(event) => {
                update({ completionDate: event.target.checked ? new Date().toISOString() : undefined });
              }}
            />
            <Input className={classes.title} fullWidth onChange={(event) => update({ title: event.target.value })} value={title} />
            <Hidden smDown>
              <LabelsPreview value={labels} />
            </Hidden>
            {dueDate ? (
              <Typography className={classes.dueDate} variant="body2">
                {format(new Date(dueDate), "dd.MM.yyyy")}
              </Typography>
            ) : null}
          </div>
        </AccordionSummary>

        <AccordionDetails className={classes.accordionDetails}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
              <TextField fullWidth label="Notes" multiline onChange={(event) => update({ description: event.target.value })} rows={8} value={description} />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                  <KeyboardDatePicker
                    disableToolbar
                    format={dateFormat}
                    fullWidth
                    label="Due date"
                    onChange={(date) => {
                      if (date?.getTime && !isNaN(date.getTime())) {
                        update({ dueDate: date.toISOString().split("T")[0] });
                      } else if (date === null) {
                        update({ dueDate: undefined });
                      }
                    }}
                    // Otherwise, if undefined, it will default to today...
                    value={dueDate ? dueDate : null}
                    variant="inline"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <TextField fullWidth label="Priority" select value={priority} onChange={(event) => update({ priority: parseInt(event.target.value) as TTodoPriority })}>
                    <MenuItem value={TTodoPriority.NONE}>None</MenuItem>
                    <MenuItem value={TTodoPriority.LOW}>Low</MenuItem>
                    <MenuItem value={TTodoPriority.MEDIUM}>Medium</MenuItem>
                    <MenuItem value={TTodoPriority.HIGH}>High</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <LabelsSelect onChange={(event) => update({ labels: event.target.value })} value={labels} />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <Button onClick={remove}>Delete</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default React.memo(Todo);
