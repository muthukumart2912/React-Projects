import React from "react";
import { Tooltip, IconButton } from "@mui/material";
import DeletIcon from "@mui/icons-material/Delete";

const Muitooltio = () => {
  return (
    <Tooltip title='delete'>
      <IconButton color="inherit">
        <DeletIcon />
      </IconButton>
    </Tooltip>
  );
};

export default Muitooltio;
