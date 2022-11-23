import React, {
  useState,
  // useEffect,
  // useRef,
} from 'react'
import {
  // Toolbar,
  Box,
  Container,
  Button,
  Typography,
  Paper,
} from '@mui/material';
// import { CSSTransition } from 'react-transition-group';
import '../App.css';

const About = () => {

  const setA = { 
    title: "Fixed Gear",
    text: "Some riders prefer the unique ride fixed gear bikes offer.",
    image: "fixedgear.jpg",
    // imageMobile: "testImage1Mobile.jpg" 
  }
  const setB = { 
    title: "Gravel", 
    text: "Gravel bikes are built for speed, maneuverability and verstility.", 
    image: "gravel.jpg", 
    // imageMobile: "testImage2Mobile.jpg" 
  }
  const setC = { 
    title: "Road", 
    text: "The road bike reigns supreme in speed and efficiency on the road.",
    image: "road.jpg", 
    // imageMobile: "testImage3Mobile.jpg" 
  }

  const [section, setSection] = useState(setA)

  const {title,text,image} = section

  // const nodeRef = useRef(null);

  return (
    <Container maxWidth={false}>
      {/* <Toolbar sx={{height: 75}} /> */}
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Box sx={{width: '22vw', margin: '1rem'}}>
          <Box sx={{display: 'flex', flexDirection: 'column', 
          alignItems: 'center', backgroundColor: 'background.default', 
          margin: '0',
          }}>
              <Button onClick={()=>setSection(setA)}>Fixed Gear</Button>
              <Button onClick={()=>setSection(setB)}>Gravel</Button>
              <Button onClick={()=>setSection(setC)}>Road</Button>
          </Box>
          <Box 
            sx={{
              position:'relative', 
              // left: '110%'
            }}
          >
            {/* <CSSTransition
              in={section}
              nodeRef={nodeRef}
              timeout={1000}
              // className="slide-from-left"
            > */}
              <Paper sx={{
                textAlign: 'left', 
                color: 'common.black', 
                fontWeight: '800', 
                backgroundColor: '#ffffffa0', //bgcolor
                padding: '1rem',
                margin: '1rem 0'
              }}>
                <Typography variant="h4">{title}</Typography>
                <Typography>{text}</Typography>
              </Paper>
            {/* </CSSTransition> */}
          </Box>
        </Box>

        <Paper sx={{padding: '1rem'}}>
          <Box
            sx={{dislay: {md: 'block', xs: 'none'}, width: '650px', height: 'auto'}}
            component="img"
            alt={title}
            src={process.env.PUBLIC_URL + '/images/section/' + image}
          />
          {/* <Box
            sx={{display: {md: 'none', xs: 'block'}}}
            component="img"
            alt={`${title}`}
            src={process.env.PUBLIC_URL + '/images/section/' + `${imageMobile}`}
          /> */}
        </Paper>
      </Box>

    </Container>
  )
}

export default About