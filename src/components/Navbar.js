import React from 'react';
import {
    AppBar,
    Container,
    Toolbar, 
    Box,
    IconButton,
    Tooltip,
} from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
// import { Bounce } from 'react-awesome-reveal';
import '../App.css';

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

const navBarStyles = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: {
    md: 'space-between',
    xs: 'center'
  },
  alignItems:'center',
  height: 75, //height
  backgroundColor : 'primary.main', //bgolor
  width: '100%',
  marginBottom: '.75rem'
}

const Navbar = ({mode, DarkMode}) => {

  return (
    <Container maxWidth={false}>
      {/* <Bounce direction="down"> */}
        <AppBar sx={navBarStyles}>
          <Toolbar sx={{padding: { md: '0 1rem', xs: '0'}, justifyContent: 'left'}}>
            <Box 
              sx={{
                display: 'flex', 
                gap: { 
                  md:'1.5rem', 
                  xs: '.25rem'
                }, 
                justifyContent: 'space-between', 
                alignItems: 'center'
            }}>
              <Tooltip title="CoolBikes">
                <IconButton sx={{margin: {md:  '0 -10px', xs: '0 -10px 0 -5px'}}}>
                  <Link to='/'>
                    <Box
                      id="#top"
                      component="img"
                      alt="CoolBikes"
                      // eslint-disable-next-line
                      src={process.env.PUBLIC_URL + '/images/' + `${mode === 'light' ? 'icon-home-black.png' : 'icon-home-white.png'}`}
                      sx={{
                        height: {
                          md: '60px',
                          xs: '45px'
                        }
                      }}
                    />
                  </Link>
                </IconButton>
                </Tooltip>

              {arrayNavLinks.map((link) => (
                <Box>
                  <NavLink 
                    className={mode === 'light' ? 'lightFont' : 'darkFont'} //font color set from DarkMode
                    style={({ isActive }) => ({
                      // color: isActive ? '#fff' : '#000',
                      background: isActive ? '#ffffff1a' : '', //primary.main color slightly lighter
                      // borderBottom: isActive ? 'solid 1px #000000de' : '',
                      // transition: '.5s',
                      padding: '.35rem',
                      borderRadius: '3px',
                      textDecoration: 'none',  
                      fontWeight: '600',
                      fontSize: {
                        md: '1.2rem',
                        xs: '1rem'
                      },
                      caretColor: 'transparent',
                    })} 
                    to={link.route}
                  >
                    {link.name}
                  </NavLink>
                </Box>
              ))}

            </Box>

            
          </Toolbar>

          <Box 
            sx={{
              padding: {
                md: '0 24px', 
                xs: '0'
              }
          }}>
            <DarkMode />
          </Box>
          
        </AppBar>
      {/* </Bounce> */}

    </Container>
  )
}

export default Navbar