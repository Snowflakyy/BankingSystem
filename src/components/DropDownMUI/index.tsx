import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useEffect } from 'react';


interface DropdownMuiProps {
    onStatusChange: (status: string) => void; // Prop to pass the status change back to parent
  }

export const DropdownMui = ({ onStatusChange }: DropdownMuiProps)=> {
  const [employmentStatus, setEmploymentStatus] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setEmploymentStatus(event.target.value);
    onStatusChange(event.target.value)
  };
    useEffect(() => {
      console.log(employmentStatus);
    }, []);
  return (
    <>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Employment Status</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={employmentStatus}
          onChange={handleChange}
          label="is"
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={1}>Yes</MenuItem>
          <MenuItem value={0}>No</MenuItem>
        </Select>
      </FormControl>
      
    </>
  );
}
