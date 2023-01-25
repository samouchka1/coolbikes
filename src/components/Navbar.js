import React, {
  useState
}from 'react';
import {
    AppBar,
    Container,
    Toolbar, 
    Box,
    IconButton,
    Tooltip,
    Button,
    Popover,
    ListItem,
    Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import { Link, NavLink } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";
import '../App.css';

const navLinks = [
  {
    name: 'fixed\u00A0gear',
    path: '/fixedgear'
  },
  {
    name: 'gravel',
    path: '/gravel'
  },
  {
    name: 'road',
    path: '/road'
  },
  {
    name: 'about',
    path: '/about'
  }
]

const navBarStyles = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems:'center',
  height: 85, //height
  backgroundColor : 'primary.main', //bgolor
  width: '100%',
  margin: '.75rem 0'
}

const Navbar = ({mode, DarkMode}) => {

  const [anchorEl, setAnchorEl] = useState(null);
  const openNav = Boolean(anchorEl);
  const handleClickNav = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseNav = () => {
    setAnchorEl(null);
  };

  return (
    <Container maxWidth={false}>
      {/* <Bounce direction="down"> */}
        <AppBar sx={navBarStyles}>
          <Toolbar sx={{padding: { md: '0 1rem', xs: '0'}, justifyContent: 'left'}}>

          {/* ==== NAVIGATION ON MOBILE === */}
          <Box sx={{display: 'flex'}}>
            <Tooltip title="CoolBikes">
              <IconButton sx={{margin: {md:  '0 -10px', xs: '0 -15px 0 5px'}, display:{md: 'none', xs: 'block'}}}>
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
            <Button 
              sx={{color: 'text.primary', display:{md: 'none', xs: 'block'}}}
              onClick={handleClickNav}
            >
              {openNav ? <ClearIcon sx={{color: 'text.primary'}} /> : <MenuIcon sx={{color: 'text.primary'}} />}
            </Button>
            <Popover
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left'}}
              open={openNav}
              onClose={handleCloseNav}
            >
              <Box 
                sx={{ p: '1.5rem', backgroundColor : 'primary.main'}}
                className={mode === 'light' ? 'lightBorder' : 'darkBorder'}
              >
                  {navLinks.map((link) => (
                      <ListItem key={link} sx={{p: '1rem 0'}}>
                        <Fade cascade delay={50} damping={0.15}>
                          <Box>
                              <Link
                                  style={{textDecoration: 'none'}}
                                  to={link.path}
                              >
                                <Typography 
                                  className="hover-underline-animation" //optional on mobile
                                  sx={{
                                    color: 'text.primary',
                                    fontSize: '1.1rem',
                                    fontWeight: '600'
                                  }}
                                  onClick={handleCloseNav}
                                >
                                    {link.name}
                                </Typography>
                              </Link>
                          </Box>
                        </Fade>
                      </ListItem>
                  ))}
              </Box>
            </Popover>
          </Box>

          {/* END NAVIGATION MOBILE */}


          <Box 
            sx={{
              display: { md: 'flex', xs: 'none'}, 
              gap: { 
                md:'1.5rem', 
                xs: '.25rem'
              }, 
              justifyContent: 'space-between', 
              alignItems: 'center'
            }}
          >
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

            {navLinks.map((link) => (
              <Box>
                <NavLink 
                  className={`navlinks ${mode === 'light' ? 'lightFont' : 'darkFont'}`} //font color set from DarkMode
                  style={({ isActive }) => ({
                    background: isActive ? '#ffffff1a' : '', //primary.main color slightly lighter
                    padding: '.35rem',
                    borderRadius: '3px',
                    textDecoration: 'none',  
                    fontWeight: '600',
                    caretColor: 'transparent',
                  })} 
                  to={link.path}
                >
                  {link.name}
                </NavLink>
              </Box>
            ))}

          </Box>

          </Toolbar>

          <Box>
            <DarkMode />
          </Box>
          
        </AppBar>
      {/* </Bounce> */}

    </Container>
  )
}

export default Navbar