import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import React from 'react';

const options = [{ title: "Work" }, { title: "Personal" }, { title: "Leisure" }];

function Labels() {
  return <Autocomplete multiple options={options} getOptionLabel={(option) => option.title} renderInput={(params) => <TextField {...params} fullWidth label="Labels" />} />;
}

export default React.memo(Labels);
