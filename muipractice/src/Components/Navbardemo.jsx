import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
const Navbardemo = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleclick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose =()=>{
    setAnchorEl(null)
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemonIcon />
        </IconButton>
        <Typography variant="h6" flexGrow={1}>
          PokemonApp
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            display: { xs: "none", sm: "none", md: "block" },
          }}
        >
          <Button color="inherit">Features</Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">About</Button>
          <Button
            color="inherit"
            id="resource-button"
            onClick={handleclick}
            aria-controls={open ? "resources-menu" : undefined}
            aria-haspopup='true'
            aria-expanded ={open ?'true' : undefined}
          >
            Resources
          </Button>
          <Button color="inherit">Contact us</Button>
        </Stack>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="btn"
          sx={{ display: { xs: "block", sm: "block", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Menu id="resources-menu" anchorEl={anchorEl} open={open}
        MenuListProps={{"aria-labelledby":'resources-button'}}
        onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Podcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbardemo;
