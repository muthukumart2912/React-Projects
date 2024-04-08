import React from "react";
import { Stack, TextField, InputAdornment, Box, MenuItem } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState} from "react";
const Textfields = () => {
  const [visibility, setVisibility] = useState(false);
  const [value, setValue] = useState("");
  const [country, setCountry] = useState("");
  const handleVisibile = () => {
    setVisibility((prevstate) => !prevstate);
  };
  const handleChange = (e) => {
    setCountry(e.target.value);
  };

 

  return (
    <Stack spacing={4} marginTop={10}>
      <Stack direction="row" spacing={2}>
        <TextField label="enter your name" variant="outlined" />
        <TextField label="enter your name" variant="filled" />
        <TextField label="enter your name" variant="standard" />
        <TextField
          label="Password"
          type="password"
          helperText="do not share your password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" onClick={handleVisibile}>
                {visibility ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="enter your name"
          variant="standard"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={!value ? "Required" : "Do not share password"}
        />
      </Stack>
      <Box width="250px">
        <TextField
          label="Select Country"
          select
          value={country}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="In">India</MenuItem>
          <MenuItem value="Us">USA</MenuItem>
          <MenuItem value="Au">Aurtralia</MenuItem>
        </TextField>
      </Box>
    </Stack>
  );
};

export default Textfields;
