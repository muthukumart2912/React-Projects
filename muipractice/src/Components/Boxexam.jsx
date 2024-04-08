import React from "react";
import { Box, Grid } from "@mui/material";
const Boxexam = () => {
  return (
    /* <Box
      sx={{
        backgroundColor: "darkseagreen",
        color: "white",
        padding: "20px",
        width: "100px",
        height: "100px",
        textAlign: "center",
        textTransform: "uppercase",
        fontSize: "2rem",
        transition: "all .3s ease",
        "&:hover": {
          backgroundColor: "red",
          transform: "rotate(45deg)",
        },
      }}
    >
      hello
    </Box> */

    <Grid container my={4} row>
      <Grid item xs>
        <Box bgcolor={"red"} p={2}>
          Item 1
        </Box>
      </Grid>
      <Grid item xs>
        <Box bgcolor={"green"} p={2}>
          Item 2
        </Box>
      </Grid>
      <Grid item xs>
        <Box bgcolor={"blue"} p={2}>
          Item 3
        </Box>
      </Grid>
      <Grid item xs>
        <Box bgcolor={"yellow"} p={2}>
          Item 4
        </Box>
      </Grid>
    </Grid>
  );
};

export default Boxexam;
