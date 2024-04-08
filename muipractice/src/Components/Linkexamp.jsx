import React from 'react'
import {Box,Breadcrumbs,Link} from '@mui/material'
const Linkexamp = () => {
  return (
    <Box m={2}>
    <Breadcrumbs aria-label='breadcrumb' separator='-'>
        <Link underline='hover' href='#'>Home</Link>
        <Link underline='hover' href='#'>Catalog</Link>
        <Link underline='hover' href='#'>Accessories</Link>
        <Link underline='hover' color='text.primary' href='#'>Shoes</Link>
    </Breadcrumbs>
    </Box>
  )
}

export default Linkexamp
