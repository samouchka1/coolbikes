import React from 'react';
import {
    AppBar,
    Container,
    // Paper,
    Toolbar, 
    Typography,
    Box,
    IconButton,
    // Tooltip,
    // Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
// import { Bounce } from 'react-awesome-reveal';

const navBar = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: {
    md: 'left',
    xs: 'center'
  },
  alignItems:'center',
  height: 75, //height
  backgroundColor : 'primary',
  width: '100%',
}

const navLinks = {
  textDecoration: 'none', 
  color: 'white', 
  fontWeight: '600',
  fontSize: {
    md: '1.2rem',
    xs: '1rem'
  },
}

const navLinksSpacing =  {
  margin: {
    md: '1rem 1.2rem',
    xs: '.5rem'
  }
}

const Navbar = () => {

  return (
    <Container maxWidth={false}>
      {/* <Bounce direction="down"> */}
        <AppBar sx={navBar}>
          <Toolbar>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
              <IconButton >
                <Link style={navLinks} to='/'>
                  <Box
                    id="#top"
                    component="img"
                    alt="CoolBikes"
                    src={process.env.PUBLIC_URL + '/images/icon-home.png'}
                  />
                </Link>
              </IconButton>

              <Typography sx={navLinksSpacing}>
                  <Link style={navLinks} to="/fixedgear">fixed gear</Link>
              </Typography>

              <Typography sx={navLinksSpacing}>
                <Link style={navLinks} to="/about">about</Link>
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      {/* </Bounce> */}

    </Container>
  )
}

export default Navbar