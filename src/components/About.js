import React from 'react'
import {
  Toolbar,
  Box,
  Container,
} from '@mui/material';

const About = () => {

  return (
    <Container maxWidth={false}>
      <Toolbar sx={{height: 75}} />
      <Box sx={{backgroundColor: 'background.default'}}>
        About
      </Box>
    </Container>
  )
}

export default About