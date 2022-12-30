import React, {
  useState
} from 'react'
import {
  Box,
  Container,
  Card,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CloseIcon from '@mui/icons-material/Close';
import ShareIcon from '@mui/icons-material/Share';
import { Swiper, SwiperSlide } from "swiper/react";
import {  
  Navigation,
  HashNavigation //test
} from "swiper";

import Banner from './modules/Banner';
import { gradientBgColors, iconStyles, pingStyles, cardStyles, cardContentStyles } from '../Styles';

import "../App.css"
import "swiper/css";
import "swiper/css/navigation";

export const fixedGearBikes = [
  {
    name: 'fixed1.jpg',
    info: 'The Affinity road bike is a beast of a cycling machine.',
    route: '/fixedgear#fixed1',
    hash: '#fixed1',
    type: 'fixed'
  },
  {
    name: 'fixed2.jpg',
    info: 'This bike is comfortable to ride, yet fast. AKA "Toucan Sam"',
    route: '/fixedgear#fixed2',
    hash: '#fixed2',
    type: 'fixed'
  },
  {
    name: 'fixed3.jpg',
    info: 'Beautiful color on frame, this bike is a dream to ride.',
    route: '/fixedgear#fixed3',
    hash: '#fixed3',
    type: 'fixed'
  },
  {
    name: 'fixed4.jpg',
    info: 'Designed to keep you moving fast, efficiently.',
    route: '/fixedgear#fixed4',
    hash: '#fixed4',
    type: 'fixed'
  }
]


const FixedGear = ({mode}) => {

  const slideStyles = {
    width: '100%',
    height: 'auto',
    background: `${ mode === 'light' ? gradientBgColors.fixed.light : gradientBgColors.fixed.dark }`
  }

  const [ section, setSection ] = useState({
    title: 'Fixed gear bikes',
    description: 'This is descriptive text. Meant to create filler words used as a template to any potential text. It is worth mentioning this text should be longer.',
    bgImg: 'cyclingfixed.jpg'
  })

  const [ hide, setHide ] = useState(false);
  const toggleClick =() => {
    setHide(!hide)
  }

  return (

    <>

    <Container maxWidth={false}>
      <Box sx={{backgroundColor: 'background.default'}}>
        <Swiper 
          modules={[Navigation, HashNavigation]} //test
          navigation={true}
          hashNavigation={{ //test
            watchState: true,
          }}
          loop={true} 
          style={{marginBottom: 0}}
        >
          {fixedGearBikes.map((bike) => (
            <SwiperSlide 
              style={slideStyles} 
              key={bike} 
              data-hash={bike.hash}  
              id={bike.hash}/*test*/ 
            >
              <Box 
                component="img" 
                alt={bike.name} 
                sx={{
                  height: 'auto', 
                  width: {
                    md: '75%',
                    xs: '100%',
                  }, 
                  textAlign: 'center',
                  zIndex: 0,
                }} 
                src={process.env.PUBLIC_URL + '/images/' + bike.name} 
              />


              <Box 
                // === PING ===
                className="ping"
                sx={pingStyles}
              />
              <IconButton 
                // === ICON ===
                aria-label="view info"
                onClick={toggleClick}
                sx={iconStyles}
              >
                { hide ? <CloseIcon fontSize="large" /> : <AddCircleIcon fontSize="large" />}
              </IconButton>

              <Card 
                className={ hide ? 'fade-in' : 'fade-out'}
                sx={cardStyles}
              >
                  <Typography sx={{ fontSize: { md: '1.6rem', xs: '1.2rem'}}}>
                    {bike.info}
                  </Typography>

                  <CardActions disableSpacing sx={{padding: {md: 'auto', xs:'0'}}}> {/*actions*/}
                    <IconButton aria-label="share" sx={{margin: '0 auto', padding: 0}}>
                      <ShareIcon />
                    </IconButton>
                  </CardActions>

                  <CardContent 
                    sx={cardContentStyles}
                  >
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus maxime, asperiores mollitia
                        distinctio esse aspernatur cum ullam itaque sed, ipsa dignissimos quae.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates ad recusandae quibusdam,
                        soluta architecto cupiditate rerum quos magnam quam dolor.
                    </Typography>
                  </CardContent>
                
              </Card>
              
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>

    <Banner section={section} setSection={setSection} />

    </>
    
  )
}

export default FixedGear