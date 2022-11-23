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
import {faker} from '@faker-js/faker';

import "swiper/css";
import "swiper/css/pagination";

const fixedGearBikes = [
  {
    name: 'fixedaffinity.jpg',
    info: faker.lorem.sentence(5),
  },
  {
    name: 'fixednozz.jpg',
    info: faker.lorem.sentence(5),
  },
  {
    name: 'fixedgearnice.jpg',
    info: faker.lorem.sentence(5),
  },
  {
    name: 'fixedspecial.jpg',
    info: faker.lorem.sentence(5),
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
    md: '75%',
    sm: '75%',
    xs: '70%'
  },
  left: '10%'
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