import { MenuItem, TextField, TextFieldProps } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';

import { labelsSelectors } from '../redux/labels';

function Labels({ SelectProps, ...rest }: Partial<TextFieldProps>) {
  const labels = useSelector(labelsSelectors.selectAll);

  return (
    <TextField fullWidth label="Labels" select SelectProps={{ multiple: true, ...SelectProps }} {...rest}>
      {labels.map((label) => (
        <MenuItem key={label.id} value={label.id}>
          {label.title}
        </MenuItem>
      ))}
    </TextField>
  );
}

export default React.memo(Labels);
