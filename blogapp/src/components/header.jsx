import React from "react";
import { styled } from "@mui/material/styles"; // Import styled instead of makeStyles
import { Divider, IconButton, Toolbar, Typography, Badge } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Sidedrawer from "./Sidedrawer";

// Define styles using the styled function
const Title = styled(Typography)({
  flexGrow: 1,
});

const Tagline = styled(Toolbar)({
  fontSize: 20,
  textTransform: "uppercase",
  justifyContent: "center",
  fontFamily: "Montserrat",
});

const Header = () => {
  return (
    <>
      <Toolbar>
        <Sidedrawer>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
        </Sidedrawer>

        <Title variant="h6">Blogging Website</Title>

        <IconButton color="inherit">
          <Badge badgeContent={4} color="primary">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
      <Divider />

      <Tagline>Express Your Emotions through words</Tagline>
    </>
  );
};

export default Header;
