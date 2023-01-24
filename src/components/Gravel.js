import React, {
    // useState
  } from 'react'
  import {
    Box,
    Container,
  } from '@mui/material';
  import { Swiper, SwiperSlide } from "swiper/react";
  import { 
    Navigation
} from "swiper";

import Banner from './modular/Banner';
import { gradientBgColors } from '../appStyles';
  
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