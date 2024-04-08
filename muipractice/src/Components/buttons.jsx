import React from "react";
import "./header.css";
import { Stack, Button, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
const Buttons = () => {
    

  return (
    <Stack spacing={1} direction="column">
      <Stack spacing={2} direction="row" className="demo">
        <Button variant="text" startIcon={<SendIcon />} onClick={()=> alert('clicked')}>
          clickme
        </Button>
        <Button variant="contained">clickme</Button>
        <Button variant="outlined">clickme</Button>
      </Stack>
      <Stack spacing={2} direction="row" className="demo">
        <Button variant="contained" color="primary">
          clickme
        </Button>
        <Button variant="contained" color="secondary">
          clickme
        </Button>
        <Button variant="contained" color="success">
          clickme
        </Button>
      </Stack>
      <Stack spacing={2} direction="row" className="demo">
        <Button variant="outlined" color="primary">
          clickme
        </Button>
        <Button variant="outlined" color="secondary">
          clickme
        </Button>
        <Button variant="outlined" color="success">
          clickme
        </Button>
      </Stack>
      <Stack spacing={2} direction="row" className="demo">
        <Button variant="text" color="primary">
          clickme
        </Button>
        <Button variant="text" color="secondary">
          clickme
        </Button>
        <Button variant="text" color="success">
          clickme
        </Button>
      </Stack>
      <IconButton color="inherit">
        <SendIcon aria-label="send" />
      </IconButton>
    </Stack>
  );
};

export default Buttons;
