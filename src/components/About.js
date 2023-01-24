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
    text: "Some riders prefer the unique ride fixed gear bikes offer.",
    image: "fixedgear.jpg",
    bgcolor: `${ mode === 'light' ? gradientBgColors.fixed.light : gradientBgColors.fixed.dark }`
  }
  const setB = { 
    title: "Gravel", 
    text: "Gravel bikes are built for speed, maneuverability and verstility.", 
    image: "gravel.jpg",
    bgcolor: `${ mode === 'light' ? gradientBgColors.gravel.light : gradientBgColors.gravel.dark }`
  }
  const setC = { 
    title: "Road", 
    text: "The road bike reigns supreme in speed and efficiency on the road.",
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
            }}
          >
            <Typography sx={{fontSize: {md: '2rem', xs: '1.6rem'}}}>{title}</Typography>
            <Typography>{text}</Typography>
            <Divider sx={{margin: '.5rem 0'}}/>
            <Typography sx={{color: 'text.secondary'}}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore ab corporis inventore debitis
              placeat accusamus magni labore accusantium obcaecati possimus.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore ab corporis inventore debitis
              placeat accusamus magni labore accusantium obcaecati possimus.
            </Typography>
          </Paper>
        </Box>
        
        <Paper sx={{padding: '.5rem'}}>
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