import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";
import {  styled } from '@mui/material/styles'; 
import darkSunsetImage from '../images/dark-sunset.jpg'



const Featuredpost = () => {
    const Heading = styled(Typography)({
        fontFamily:'Montserrat',
        fontSize: 40
    })

    const Cover = styled(Card)({
        backgroundImage:`url(${darkSunsetImage})`,
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        padding:'35px 25px'
    })

  return (
    <Cover>
      <CardContent>
        <Heading gutterBottom>Tittle of a longer featured blog post</Heading>
        <Typography variant="h5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum,
          eius! Ab incidunt esse veniam corrupti similique vitae provident
          corporis, autem, tempora, ducimus
        </Typography>
      </CardContent>
      <CardActions>
        <Button>Read More.....</Button>
      </CardActions>
    </Cover>
  );
};

export default Featuredpost;
