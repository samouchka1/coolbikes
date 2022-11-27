import React from 'react';
import {
    AppBar,
    Container,
    // Paper,
    Toolbar, 
    // Typography,
    Box,
    IconButton,
    // Tooltip,
    // Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
// import { Bounce } from 'react-awesome-reveal';

const arrayNavLinks = [
  {
    name: 'fixed\u00A0gear',
    route: '/fixedgear'
  },
  {
    name: 'gravel',
    route: '/gravel'
  },
  {
    name: 'road',
    route: '/road'
  },
  {
    name: 'about',
    route: '/about'
  }
]

const navBar = {
  position: 'relative',
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
  marginBottom: '.75rem'
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

const Navbar = () => {

  return (
    <Container maxWidth={false}>
      {/* <Bounce direction="down"> */}
        <AppBar sx={navBar}>
          <Toolbar>
            <Box sx={{display: 'flex', gap: { md:'1.5rem', xs: '.65rem'}, justifyContent: 'space-between', alignItems: 'center'}}>
              <IconButton sx={{margin: '0 -10px'}}>
                <Link to='/'>
                  <Box
                    id="#top"
                    component="img"
                    alt="CoolBikes"
                    src={process.env.PUBLIC_URL + '/images/icon-home.png'}
                  />
                </Link>
              </IconButton>
              {arrayNavLinks.map((link) => (
                <Box>
                  <Link style={navLinks} to={link.route}>{link.name}</Link>
                </Box>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      {/* </Bounce> */}

    </Container>
  )
}

export default Navbar