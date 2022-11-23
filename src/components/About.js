import React, {
  useState,
  // useEffect,
  // useRef,
} from 'react'
import {
  Toolbar,
  Box,
  Container,
  Button,
  Typography,
  Paper,
} from '@mui/material';
// import { CSSTransition } from 'react-transition-group';
import {faker} from '@faker-js/faker';
import '../App.css';

const About = () => {

  const setA = { 
    title: "Fixed Gear",
    text: faker.lorem.sentence(5),
    image: "fixedgear.jpg",
    // imageMobile: "testImage1Mobile.jpg" 
  }
  const setB = { 
    title: "Gravel", 
    text: faker.lorem.sentence(5), 
    image: "gravel.jpg", 
    // imageMobile: "testImage2Mobile.jpg" 
  }
  const setC = { 
    title: "Road", 
    text: faker.lorem.sentence(5),
    image: "road.jpg", 
    // imageMobile: "testImage3Mobile.jpg" 
  }

  const [section, setSection] = useState(setA)

  const {title,text,image} = section

  // const nodeRef = useRef(null);

  return (
    <Container maxWidth={false}>
      <Toolbar sx={{height: 75}} />
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Box>
          <Box sx={{display: 'flex', flexDirection: 'column', backgroundColor: 'background.default', margin: '1rem 3rem'}}>
              <Button onClick={()=>setSection(setA)}>Fixed Gear</Button>
              <Button onClick={()=>setSection(setB)}>Gravel</Button>
              <Button onClick={()=>setSection(setC)}>Road</Button>
          </Box>
          <Box sx={{position:'absolute', right: '33%', bottom: '10%'}}>
            {/* <CSSTransition
              in={section}
              nodeRef={nodeRef}
              timeout={1000}
              // className="slide-from-left"
            > */}
              <Paper sx={{textAlign: 'right', color: 'common.black', fontWeight: '800', backgroundColor: '#ffffffa0', padding: '1rem'}}>
                <Typography variant="h4">{title}</Typography>
                <Typography>{text}</Typography>
              </Paper>
            {/* </CSSTransition> */}
          </Box>
        </Box>

        <Box component="div">
          <Box
            sx={{dislay: {md: 'block', xs: 'none'}, width: { md: '35vw'}, height: { md: 'auto'}}}
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
        </Box>
      </Box>

    </Container>
  )
}

export default About