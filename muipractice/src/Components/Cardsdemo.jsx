import React from "react";
import { Box, Card, CardContent, Typography, CardActions,Button,CardMedia } from "@mui/material";
const Cardsdemo = () => {
  return (
    <Box width="300px" mt={20}>
      <Card elevation={4} >
      
      <CardMedia component='img' height='140px' image="https://source.unsplash.com/random" alt="unsplash image"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component='div'>
                React
          </Typography>
          <Typography variant="body" color='black'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vitae magni inventore odit dicta maiores cum voluptas minima saepe, veritatis illo nam quas sit! Debitis est laborum reprehenderit eaque corporis.
          </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" >Share</Button>
            <Button size='small'>Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Cardsdemo;
