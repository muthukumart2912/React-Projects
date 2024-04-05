import React from "react";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const SidebarAboutbox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2)
}));

const SidebarSection = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(3)
}));

export default function Sidebar({ archives, description, social, title }) {
  return (
    <Grid item xs={12} md={4}>
      <SidebarAboutbox elevation={0}>
        <Typography variant="h6" gutterBottom>
          About
        </Typography>
        <Typography>{description}</Typography>
      </SidebarAboutbox>

      <SidebarSection variant="h6" gutterBottom>
        Archives
      </SidebarSection>
      {archives.map((archive) => (
        <Link
          display="block"
          variant="body1"
          href={archive.url}
          key={archive.title}
        >
          {archive.title}
        </Link>
      ))}

      <SidebarSection variant="h6" gutterBottom>
        Social
      </SidebarSection>
      {social.map((network) => (
        <Link display="block" variant="body1" href="#" key={network.name}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              {/* Assuming network.icon is an icon component */}
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
}
