import React from 'react';
import {
    // Toolbar,
    Box,
    Container,
    Typography,
    Link,
  } from '@mui/material';
  import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
  import '../App.css';

const parallaxImage = process.env.PUBLIC_URL + '/images/parallax/banner.jpg'
const parallaxImageTablet = process.env.PUBLIC_URL + '/images/parallax/banner-tablet-test.jpg'
const parallaxImageMobile = process.env.PUBLIC_URL + '/images/parallax/banner-mobile.jpg'


const parallaxTextStyle = {
    position: 'relative',
    top: '35%',
    left: {
        md: '10%',
        xs: '0%'
    },
    backgroundColor:'#ffffff72',  
    fontWeight: '700', 
    width: {
        md: '36rem',
        sm: '25rem',
        xs: '17rem'
    },
    borderRadius: '10px'
}

const Welcome = () => {
  return (
    <Container maxWidth={false}>
      {/* <Toolbar sx={{height: 75}} /> */}
      <ParallaxBanner className="parallax-image">
        <ParallaxBannerLayer speed={-30}>
            <Box
                component="img"
                alt="parallax"
                sx={{content: {
                    md: `url(${parallaxImage})`,
                    sm: `url(${parallaxImageTablet})`,
                    xs: `url(${parallaxImageMobile})`
                }}}
            />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer speed={-30}>
            <Box component="div" sx={parallaxTextStyle}>
                <Link href="#styles" sx={{textDecoration: 'none', color: 'common.black'}}>
                    <Typography 
                        sx={{fontSize: { md: '1.5rem', sm: '1.2rem', xs: '1rem'}, margin: { md: '0 1rem', xs: '0 .5rem'}}}
                    >
                        We are the best in
                    </Typography>
                    <Typography sx={{fontSize: { md: '4.2rem', sm:'3rem',  xs: '2rem'}}}>
                        Performance Cycling
                    </Typography>
                </Link>
            </Box>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </Container>
  )
}

export default Welcome