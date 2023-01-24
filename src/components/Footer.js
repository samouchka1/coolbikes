import React from 'react';
import { HashLink } from 'react-router-hash-link';
import {
    AppBar,
    Container,
    Link,
    List,
    ListItem,
    Toolbar,
    Tooltip,
    Typography,
    Box
} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RedditIcon from '@mui/icons-material/Reddit';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import '../App.css'; //for logo spin, underline effect

const socialMedia = [
    {
        name: 'Twitter',
        icon: <TwitterIcon fontSize="large" />,
        url: 'https://twitter.com/i/flow/login'
    },
    {
        name: 'Youtube',
        icon: <YouTubeIcon fontSize="large" />,
        url: 'https://www.youtube.com/'
    },
    {
        name: 'Reddit',
        icon: <RedditIcon fontSize="large" />,
        url: 'https://www.reddit.com/'
    }
]
// const customerService = [
//     {
//         name: 'Contact\u00A0Us',
//         href: '#abc'
//     },
//     {
//         name: 'Help',
//         href: '#abc'
//     },
//     {
//         name: 'Shipping\u00A0Policy',
//         href: '#abc'
//     },
//     {
//         name: 'Return\u00A0Policy',
//         href: '#abc'
//     },
//     {
//         name: 'Discounts',
//         href: '#abc'
//     },
//     {
//         name: 'Feedback',
//         href: '#abc'
//     }
    
// ]

const ourPages =[
    {
        name: 'Fixed\u00A0Gear',
        href: '#abc'
    },
    {
        name: 'Gravel',
        href: '#abc'
    },
    {
        name: 'Road',
        href: '#abc'
    },
]

//STYLES

const componentStyles = {
    margin: '0 auto',
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
}

const footerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    boxShadow: 'none',
    backgroundColor: 'primary.main' //bgcolor
}

const footerTitleStyles = {
    fontSize: {
        md: '28px',
        xs: '25px'
    },
    fontFamily: '\'Noto Sans Display\', sans-serif',
    fontWeight: '600'
}

const footerLinkStyles = {
    fontSize: {
        md: '.9rem',
        xs: '.8rem'
    },
    lineHeight: '.25',
    textDecoration: 'none',
    color: 'text.primary'
}

const footerSectionStyles = {
    // width: '100%',
    padding: '1rem',
    color: 'text.primary'
    
}

const signatureStyles = {
    margin: '3rem 0 1rem',
    fontSize: '12px',
    caretColor: 'transparent'
}

const backToTopButtonStyle = {
    alignSelf: 'flex-end', 
    caretColor: 'transparent', 
    margin: '0 0 0 2rem', 
    display: {md: 'block', xs: 'none'},
}

const Footer = ({mode}) => {

  return (
    <Container maxWidth={false} sx={{margin: '.75rem 0'}}>
        <Box sx={componentStyles}>
            <AppBar sx={footerStyles}>
                <Toolbar>
                    <List sx={{display: 'flex'}}>
                        {socialMedia.map( link => (
                            <ListItem key={link} sx={{ margin: '0 .5rem'}}>
                            <Tooltip title={link.name}>
                                <Link 
                                    alt={link.name}
                                    href={link.url}
                                    target="_blank"
                                    sx={{color: 'text.primary'}}
                                >
                                    {link.icon}
                                </Link>
                            </Tooltip>
                            </ListItem>
                        ))}
                    </List>
                </Toolbar>
            

                {/* SECTION */}
                <Box sx={{display: 'flex', justifyContent: 'center', width: {md: '50%', xs:'100%'}, margin: '0 auto'}}>

                    <Box sx={{alignSelf: 'center', margin: '2rem 4rem', display: {md: 'block', xs: 'none'}}} /*desktop view*/>
                        <Tooltip title="CoolBikes">
                            <Link href="/" sx={{textDecoration: 'none'}}>
                                <Box 
                                    // className="App-logo"
                                    component="img" 
                                    alt="CoolBikes logo" 
                                    height="7rem" 
                                    // eslint-disable-next-line
                                    src={process.env.PUBLIC_URL + '/images/' + `${mode === 'light' ? 'icon-home-black.png' : 'icon-home-white.png'}`}
                                />
                            </Link>
                        </Tooltip>
                    </Box>
                    {/* <Box sx={footerSectionStyles}>
                        <Typography variant="body2" sx={{fontWeight: '600'}}>
                            Customer Service
                        </Typography>
                        <Typography variant="subtitle2">
                            <List>
                                {customerService.map((link) => (
                                    <ListItem key={link} sx={{margin: {md: '.5rem', xs: '.3rem'}}}>
                                        <Link 
                                            href={link.href} 
                                            sx={footerLinkStyles}
                                            // className="hover-underline-animation"
                                        >
                                            {link.name}
                                        </Link>
                                    </ListItem>
                                ))}
                            </List>
                        </Typography>
                    </Box> */}
                    <Box sx={footerSectionStyles}>
                        <Typography variant="body2" sx={{fontWeight: '600'}}>
                            Our&nbsp;Pages
                        </Typography>
                        <Typography variant="subtitle2">
                            <List>
                                {ourPages.map((link) => (
                                    <ListItem key={link} sx={{margin: {md: '.5rem', xs: '.3rem'}}}>
                                        <Link 
                                            href={link.href} 
                                            sx={footerLinkStyles}
                                            // className="hover-underline-animation"
                                        >
                                            {link.name}
                                        </Link>
                                    </ListItem>
                                ))}
                            </List>
                        </Typography>
                    </Box>

                    <Box sx={backToTopButtonStyle}>
                        <HashLink
                            scroll={(element) => element.scrollIntoView({ behavior: 'smooth' })}
                            to="#top"
                        >
                            <Tooltip title="Back to top">
                                <ArrowUpwardIcon fontSize="large" sx={{ color: 'text.primary'}} />
                            </Tooltip>
                        </HashLink>
                    </Box>

                </Box>

                <Tooltip title="CoolBikes">
                    <Link href="/" sx={{textDecoration: 'none', color: 'text.primary'}}>
                        <Box 
                            // className="App-logo"
                            component="img"
                            alt="CoolBikes"
                            // eslint-disable-next-line
                            src={process.env.PUBLIC_URL + '/images/' + `${mode === 'light' ? 'icon-home-black.png' : 'icon-home-white.png'}`}
                            height="5rem"
                            sx={{display: {md: 'none', xs: 'block'}, margin: '0 auto'}} //mobile view
                        />
                    </Link>
                </Tooltip>
                
                <Box sx={{textAlign: 'center', margin: '1rem 0', color: 'text.primary'}}>
                    <Typography sx={footerTitleStyles}>CoolBikes</Typography>
                    <Typography sx={{fontSize: '15px'}}>1234 Cool St, GreatCity, State</Typography>

                    <Typography sx={signatureStyles}>
                        &copy; {new Date().getFullYear()} samouchka
                    </Typography>
                </Box>

            </AppBar>
        </Box>

    </Container>
  )
}

export default Footer;
