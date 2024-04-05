import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    Hidden,
    Typography,
  } from "@mui/material";
  import React from "react";
  import { styled } from "@mui/material/styles"; // Import styled instead of makeStyles
  
  const StyledCardMedia = styled(CardMedia)({
    width: '160px' // Adjust the width as needed
  });
  
  const CardDetails = styled('div')({
    flex: 1,
  });
  
  const StyledCard = styled(Card)({
    display: 'flex',
  });
  
  const PostCard = ({ post }) => {
    return (
      <Grid item xs={12} md={6}>
        <CardActionArea component="a" href="#">
          <StyledCard>
            <CardDetails>
              <CardContent>
                <Typography component="h2" variant="h5">
                  {post.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {post.date}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {post.description}
                </Typography>
                <Typography variant="subtitle1" style={{ color: "skyblue" }}>
                  Continue reading...
                </Typography>
              </CardContent>
            </CardDetails>
            <Hidden xsDown>
              <StyledCardMedia
                component="img"
                image={post.image} // Correctly pass image prop here
                title={post.imageTitle} // Correctly pass imageTitle prop here
              />
            </Hidden>
          </StyledCard>
        </CardActionArea>
      </Grid>
    );
  };
  
  export default PostCard;
  