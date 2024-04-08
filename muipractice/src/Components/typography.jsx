import React from 'react'
import {Typography }from "@mui/material";
import './header.css'
const Header = () => {
  return (
    <div>
    <Typography variant='h1' className='demo' gutterBottom >Hello</Typography>
    <Typography variant='h2'>Hello</Typography>
    <Typography variant='h3'>Hello</Typography>
    <Typography variant='h4'>Hello</Typography>
    <Typography variant='h5'>Hello</Typography>
    <Typography variant='body1'>Hello world</Typography>
    <Typography variant='body2'>Hello world</Typography>
    <Typography variant='subtitle1'>Hello dear</Typography>
    <Typography variant='subtitle2'>Hello dear</Typography>

    </div>
  )
}

export default Header
