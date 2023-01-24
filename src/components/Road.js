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
  
  import "../App.css"
  import "swiper/css";
  import "swiper/css/pagination";
  import "swiper/css/navigation";


import Banner from './modular/Banner';
import { gradientBgColors } from '../appStyles';
  
  
  export const roadBikes = [
    {
      name: 'road1.jpg',
      info: 'Built for speed. A legendary machine. AKA "Vino Tinto"',
      route: '/road#road1',
      hash: '#road1',
      type: 'road'
    },
    {
      name: 'road2.jpg',
      info: 'This bike re-defines what swift means. AKA "The Ninja"',
      route: '/road#road2',
      hash: '#road2',
      type: 'road'
    },
    {
      name: 'road3.jpg',
      info: 'Only for the brave. Knows no limits. AKA "Balerion"',
      route: '/road#road3',
      hash: '#road3',
      type: 'road'
    },
    {
      name: 'road4.jpg',
      info: 'Riding this bike must be what it\'s like to ride a dragon.',
      route: '/road#road4',
      hash: '#road4',
      type: 'road'
    }
  ]
  
  
  const Road = ({mode}) => {

    const slideStyles = {
      width: '100%',
      height: 'auto',
      background: `${ mode === 'light' ? gradientBgColors.road.light : gradientBgColors.road.dark }`
    }

    const [ section, setSection ] = React.useState({
      title: 'Road bikes',
      description: 'Road bikes are designed for riding on paved roads, they are lightweight, fast, and efficient. They have narrow tires, drop handlebars, and multiple gears which allows for speed and agility on the road. They have an aggressive riding position that allows for better power transfer from the rider to the bike which makes them ideal for racing and long-distance riding. They also have lightweight frames and components, and multiple gears which allow riders to tackle steep inclines and descents. The benefits of road biking include the ability to cover long distances quickly and efficiently, perfect for commuting, racing, and touring. They are also a great way to get in a workout and improve fitness while enjoying the great outdoors. If you\'re looking for a bike that will help you cover ground quickly and efficiently, a road bike may be just what you need.',
      bgImg: 'cyclingroad.jpg'
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
            {roadBikes.map((bike) => (
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
  
  export default Road;