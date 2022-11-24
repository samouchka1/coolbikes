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
} from '@mui/material';
import '../App.css'; //Animista effects


const About = () => {

  const setA = { 
    title: "Fixed Gear",
    text: "Some riders prefer the unique ride fixed gear bikes offer.",
    image: "fixedgear.jpg",
  }
  const setB = { 
    title: "Gravel", 
    text: "Gravel bikes are built for speed, maneuverability and verstility.", 
    image: "gravel.jpg", 
  }
  const setC = { 
    title: "Road", 
    text: "The road bike reigns supreme in speed and efficiency on the road.",
    image: "road.jpg", 
  }

  const [section, setSection] = useState(setA)

  const {title,text,image} = section

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
          justifyContent: 'center'
        }}
      >
        <Box sx={{ marginRight: {md: '1rem', xs: '0'}, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Box 
            sx={{
              display: 'flex', 
              flexDirection: 'row',
              gap: '.5rem',
              alignItems: 'center', 
              backgroundColor: 'background.default', 
              margin: '1rem 0'
            }}
          >
              <Button onClick={()=>setSection(setA)} variant="outlined">Fixed&nbsp;Gear</Button>
              <Button onClick={()=>setSection(setB)} variant="outlined">Gravel</Button>
              <Button onClick={()=>setSection(setC)} variant="outlined">Road</Button>
          </Box>
          <Paper
            className="animation slide-in-blurred-left" //Animista classes
            sx={{
              textAlign: 'left', 
              fontWeight: '800', 
              padding: '1rem',
              width: {
                md: '20rem',
                xs: 'auto'
              },
            }}
          >
            <Typography sx={{fontSize: {md: '2rem', xs: '1.6rem'}}}>{title}</Typography>
            <Typography>{text}</Typography>
          </Paper>
        </Box>
        
        <Paper sx={{padding: '1rem'}}>
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