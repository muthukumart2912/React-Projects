import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import { styled } from "@mui/system";

const StyledFooter = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  marginTop: theme.spacing(4),
  padding: theme.spacing(6, 0),
}));

const FooterContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

export default function Footer({ description, title }) {
  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <FooterContent>
          <Typography variant="h6" align="center" gutterBottom>
            {title}
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            {description}
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
            Copyright ©{" "}
            <Link color="inherit" href="">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}.
          </Typography>
        </FooterContent>
      </Container>
    </StyledFooter>
  );
}
