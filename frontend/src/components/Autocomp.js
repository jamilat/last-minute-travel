import { Autocomplete, TextField } from "@mui/material";
import styled from "styled-components";

const Autocomp = ({ locat, cities, setLocat, setInputValue, inputValue }) => {
  return (
  <Autocomplete
    id="autocomplete"
    value={locat}
    onChange={(event, newValue) => {
      setLocat(newValue);
    }}
    inputValue={inputValue}
    onInputChange={(event, newInputValue) => {
      setInputValue(newInputValue);
    }}
    InputProps={{ style: { fontSize: 80, height: 90 } }}
    InputLabelProps={{ style: { fontSize: 80 } }}
    id="controllable-states-demo"
    options={cities}
    sx={{ width: 300, fontSize: 40 }}
    renderInput={(params) => (
      <CustomTextField
        InputProps={{ style: { fontSize: 80 } }}
        InputLabelProps={{ style: { fontSize: 80 } }}
        {...params}
        label="Location"
      />
    )}
  />);
};

const CustomTextField = styled(TextField)`
  position: absolute;
  height: 80;
  font-size: 40 !important;
  transform: translate(90%, 90%);
`;

export default Autocomp;
