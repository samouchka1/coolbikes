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
    Navigation
} from "swiper";

import Banner from './modular/Banner';
import { gradientBgColors, iconStyles, pingStyles, cardStyles, cardContentStyles } from '../Styles';
  
  import "../App.css"
  import "swiper/css";
  import "swiper/css/navigation";
  
  
  export const gravelBikes = [
    {
      name: 'gravel1.jpg',
      info: 'Great comfort yet formidable for the outdoor. Tested true.',
      route: '/gravel#gravel1',
      hash: '#gravel1',
      type: 'gravel'
    },
    {
      name: 'gravel2.jpg',
      info: 'A good medium between speed and off-road capability.',
      route: '/gravel#gravel2',
      hash: '#gravel2',
      type: 'gravel'
    },
    {
      name: 'gravel3.jpg',
      info: 'This versatile bike will ride through any obsctable.',
      route: '/gravel#gravel3',
      hash: '#gravel3',
      type: 'gravel'
    },
    {
      name: 'gravel4.jpg',
      info: 'Designed for maximum speed in rough terrain.',
      route: '/gravel#gravel4',
      hash: '#gravel4',
      type: 'gravel'
    }
  ]
  
  
  
  const Gravel = ({mode}) => {

    const slideStyles = {
      width: '100%',
      height: 'auto',
      background: `${ mode === 'light' ? gradientBgColors.gravel.light : gradientBgColors.gravel.dark }`
    }

    const [ section, setSection ] = React.useState({
      title: 'Gravel bikes',
      description: 'Gravel bikes are designed to be ridden on a variety of surfaces including pavement, gravel roads and even light off-road trails. They have a relaxed geometry with a longer wheelbase and relaxed head angle which provides a stable and comfortable ride. They also have clearance for wider tires that give better traction and comfort on rough surfaces. They often have a wide range of gears and disc brakes that provide better stopping power and control in wet or muddy conditions. The key benefits of gravel biking include the ability to explore new roads and trails, getting a workout and enjoying the great outdoors. They are perfect for tackling any terrain, and a great option for anyone looking for a versatile and capable bicycle that can take you on adventures beyond the pavement.',
      bgImg: 'cyclinggravel.jpg'
    });
  
    const [ hide, setHide ] = useState(false);
    const toggleClick =() => {
      setHide(!hide)
    }
  
    return (
      
      <>

      <Container maxWidth={false}>
        <Box sx={{backgroundColor: 'background.default'}}>
          <Swiper 
            modules={[Navigation]} 
            navigation={true}
            loop={true} 
            style={{marginBottom: 0}}
          >
            {gravelBikes.map((bike) => (
              <SwiperSlide style={slideStyles} key={bike}>
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
                    display: 'block',
                    margin: '0 auto'
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
  
  export default Gravel;