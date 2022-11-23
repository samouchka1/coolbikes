import React from 'react'
import {
  // Toolbar,
  Box,
  Typography,
  Container,
  Paper,
} from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const fixedGearBikes = [
  {
    name: 'fixedaffinity.jpg',
    info: 'The Affinity road bike is a beast of a cycling machine.',
  },
  {
    name: 'fixednozz.jpg',
    info: 'This bike is comfortable to ride, yet fast.',
  },
  {
    name: 'fixedgearnice.jpg',
    info: 'Beautiful color on frame, this bike is a dream to ride.',
  },
  {
    name: 'fixedspecial.jpg',
    info: 'Designed to keep you moving fast, efficiently.',
  }
]

const slideStyles = {
  width: '100vw',
  height: 'auto',
}

const slideTextStyles = {
  backgroundColor: '#ffffffa0',
  width: {
    md: '270px',
    sm: '230px',
    xs: '130px'
  }, 
  color: 'common.black', 
  padding: '.5rem', 
  position: 'absolute', 
  bottom: {
    md: '80%',
    sm: '76%',
    xs: '70%'
  },
  left: '6%'
}

const FixedGear = () => {

  return (
    <Container maxWidth={false}>
      {/* <Toolbar sx={{height: 75}} /> */}
      <Box sx={{backgroundColor: 'background.default'}}>
        <Swiper modules={[Pagination]} loop={true} style={{marginBottom: '-4px'}}>
          {fixedGearBikes.map((bike) => (
            <SwiperSlide style={slideStyles} key={bike}>
              <Box 
                component="img" 
                alt="bike" 
                sx={{height: 'auto', 
                width: '100vw', 
                textAlign: 'center'}} 
                src={process.env.PUBLIC_URL + '/images/' + bike.name} 
              />
                <Paper sx={slideTextStyles}>
                  <Typography variant="h4"
                    sx={{
                      fontSize: {
                        md: '1.6rem',
                        sm: '1.2rem',
                        xs: '.9rem'
                      }, 
                    }}
                  >
                    {bike.info}
                  </Typography>
                </Paper>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  )
}

export default FixedGear