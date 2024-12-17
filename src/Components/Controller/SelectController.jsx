import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
const SelectController = (props) => {
  const { control, name, label, required, array } = props
  return (
    <>
      <Controller
        name={name}
        control={control}
        // defaultValue={''}
        render={({ field }) =>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label={label}
              required={required}
              {...field}   
              onChange={handleChange}
            >
              {array.map((item,index) => {
                return (
                  <MenuItem key={index} value={item}>{item}</MenuItem>
                )
              })}
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>}
      />

    </>
  )
}

SelectController.propTypes = {
  control: PropTypes.any.isRequired,
  name: PropTypes.any.isRequired,
  label: PropTypes.any.isRequired,
  required: PropTypes.any,


};

export default SelectController