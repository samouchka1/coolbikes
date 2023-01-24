import React, {
  useState,
  useEffect,
} from 'react'
import {
  Box,
  Container,
  Button,
  Typography,
  Paper,
  Divider,
} from '@mui/material';
import '../App.css'; //Animista effects

import { gradientBgColors } from '../appStyles';

const buttonStyles= {
  color: 'text.primary',
  backgroundColor: 'background.default',
  '&:hover': {
    backgroundColor: '#ffffffa1'
  }
}

const About = ({mode}) => {

  const setA = { 
    title: "Fixed Gear",
    text: 'Fixed gear bikes, also known as "fixies," have a single gear and no freewheel mechanism, which means that the pedals are always in motion when the bike is moving. They have a minimalistic design with a few components and a sleek and clean look. They are versatile and can be ridden on a variety of surfaces and in different conditions, from city commutes to track racing. The key benefits of riding a fixed gear bike include the feeling of connectedness to the bike and the road, improvement of pedaling efficiency and leg strength. They are a unique and simple riding experience, and provide a direct connection to the bike and the road. They are a fantastic option for anyone looking for a new and exciting way to ride.',
    image: "fixedgear.jpg",
    bgcolor: `${ mode === 'light' ? gradientBgColors.fixed.light : gradientBgColors.fixed.dark }`
  }
  const setB = { 
    title: "Gravel", 
    text: 'Gravel bikes are designed to be ridden on a variety of surfaces including pavement, gravel roads and even light off-road trails. They have a relaxed geometry with a longer wheelbase and relaxed head angle which provides a stable and comfortable ride. They also have clearance for wider tires that give better traction and comfort on rough surfaces. They often have a wide range of gears and disc brakes that provide better stopping power and control in wet or muddy conditions. The key benefits of gravel biking include the ability to explore new roads and trails, getting a workout and enjoying the great outdoors. They are perfect for tackling any terrain, and a great option for anyone looking for a versatile and capable bicycle that can take you on adventures beyond the pavement.', 
    image: "gravel.jpg",
    bgcolor: `${ mode === 'light' ? gradientBgColors.gravel.light : gradientBgColors.gravel.dark }`
  }
  const setC = { 
    title: "Road", 
    text: 'Road bikes are designed for riding on paved roads, they are lightweight, fast, and efficient. They have narrow tires, drop handlebars, and multiple gears which allows for speed and agility on the road. They have an aggressive riding position that allows for better power transfer from the rider to the bike which makes them ideal for racing and long-distance riding. They also have lightweight frames and components, and multiple gears which allow riders to tackle steep inclines and descents. The benefits of road biking include the ability to cover long distances quickly and efficiently, perfect for commuting, racing, and touring. They are also a great way to get in a workout and improve fitness while enjoying the great outdoors. If you\'re looking for a bike that will help you cover ground quickly and efficiently, a road bike may be just what you need.',
    image: "road.jpg",
    bgcolor: `${ mode === 'light' ? gradientBgColors.road.light : gradientBgColors.road.dark }`
  }

  const [section, setSection] = useState(setA)

  const {title,text,image, bgcolor} = section

  useEffect(() => {
    document.querySelector(".animation").classList.remove("slide-in-blurred-left")
    setTimeout(() => {
      document.querySelector(".animation").classList.add("slide-in-blurred-left")
    }, 5);
  }, [section.text])

  return (
    <Container maxWidth={false}>
      <Box 
        sx={{
          display: 'flex', 
          flexDirection:{ md: 'row', xs: 'column-reverse'}, 
          alignItems: 'center', 
          justifyContent: 'center',
          background: `${bgcolor}`,
          padding: {
            md: '1rem 0',
            xs: '0'
          }
        }}
      >
        <Box sx={{ 
            marginRight: {
              md: '1rem', 
              xs: '0'
            }, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center'
        }}>
          <Box 
            sx={{
              display: 'flex', 
              flexDirection: 'row',
              gap: '.5rem',
              alignItems: 'center', 
              backgroundColor: 'inherit', 
              margin: '1rem 0'
            }}
          >
              <Button sx={buttonStyles} onClick={()=>setSection(setA)} variant="outlined">Fixed&nbsp;Gear</Button>
              <Button sx={buttonStyles} onClick={()=>setSection(setB)} variant="outlined">Gravel</Button>
              <Button sx={buttonStyles} onClick={()=>setSection(setC)} variant="outlined">Road</Button>
          </Box>
          <Paper
            className="animation slide-in-blurred-left" //Animista class
            sx={{
              textAlign: 'left', 
              fontWeight: '800', 
              padding: {
                md: '1rem',
                xs: '1rem .5rem',
              },
              width: {
                md: '20rem',
                xs: 'auto'
              },
              margin: {
                md: '0',
                xs: '0 1rem'
              }
            }}
          >
            <Typography sx={{fontSize: {md: '2rem', xs: '1.6rem'}}}>{title}</Typography>
            <Divider sx={{margin: '.5rem 0'}}/>
            <Typography sx={{fontSize: '1.15rem', textAlign: 'left', lineHeight: '1.6'}}>{text}</Typography>
          </Paper>
        </Box>
        
        <Paper sx={{p: '.5rem'}}>
          <Box
            sx={{dislay: {md: 'block', xs: 'none'}, width: {md: '650px', xs: '300px'}, height: 'auto'}}
            component="img"
            alt={title}
            src={process.env.PUBLIC_URL + '/images/section/' + image}
          />
        </Paper>

      </Box>

    </Container>
  )
}

export default About