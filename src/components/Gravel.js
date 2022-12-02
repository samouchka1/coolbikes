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
    // Paper,
    // Button,
  } from '@mui/material';
  import AddCircleIcon from '@mui/icons-material/AddCircle';
  import CloseIcon from '@mui/icons-material/Close';
  import ShareIcon from '@mui/icons-material/Share';
  import { Swiper, SwiperSlide } from "swiper/react";
  import { 
    Navigation
} from "swiper";

import Banner from './module/Banner';
  
  import "../App.css"
  import "swiper/css";
  import "swiper/css/navigation";
  
  
  export const gravelBikes = [
    {
      name: 'gravel1.jpg',
      info: 'Great comfort yet formidable for the outdoor.',
      route: '/gravel#gravel1',
      hash: '#gravel1'
    },
    {
      name: 'gravel2.jpg',
      info: 'A good medium between speed and off-road capability.',
      route: '/gravel#gravel2',
      hash: '#gravel2'
    },
    {
      name: 'gravel3.jpg',
      info: 'This versatile bike will ride through any obsctable.',
      route: '/gravel#gravel3',
      hash: '#gravel3'
    },
    {
      name: 'gravel4.jpg',
      info: 'Designed for maximum speed in rough terrain.',
      route: '/gravel#gravel4',
      hash: '#gravel4'
    }
  ]
  
  const slideStyles = {
    width: '100%',
    height: 'auto',
  }
  
  const Gravel = () => {

    const [ section, setSection ] = React.useState('radial-gradient(circle, rgba(33,199,31,1) 0%, rgba(102,216,100,1) 50%, rgba(255,255,255,1) 100%)');
  
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
            style={{marginBottom: '-4px'}}
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
                  }} 
                  src={process.env.PUBLIC_URL + '/images/' + bike.name} 
                />


                <Box 
                  // === PING ===
                  className="ping"
                  sx={{ 
                    backgroundColor: 'background.default',
                    borderRadius: '50px',
                    padding: '1.2rem',
                    zIndex: 1,
                    position: 'absolute', 
                    top: {
                      md: 110.50,
                      sm: 65.75,
                      xs: 11.65
                    },
                    left: {
                      md: 305.75,
                      sm: 65.75,
                      xs: 11.65
                    }
                  }}
                />
                <IconButton 
                  // === ICON ===
                  aria-label="view info"
                  onClick={toggleClick}
                  sx={{
                    "&:hover": {
                      backgroundColor: '#ffffff70' //bgcolor
                    },
                    padding: '.45rem',
                    backgroundColor: '#ffffff70', //bgcolor
                    zIndex: 2,
                    position: 'absolute', 
                    top: {
                      md: 105,
                      sm: 60,
                      xs: 6
                    },
                    left: {
                      md: 300,
                      sm: 60,
                      xs: 6
                    }
                  }}
                >
                  { hide ? <CloseIcon fontSize="large" /> : <AddCircleIcon fontSize="large" />}
                </IconButton>

                <Card 
                  className={ hide ? 'fade-in' : 'fade-out'}
                  sx={{ 
                    maxWidth: {
                      md: 345,
                      xs: 240
                    },
                    height: {
                      md: 'auto',
                      xs: 235
                    },
                    padding: {md: '1rem', xs: '0'},
                    borderRadius: '4px',
                    position: 'absolute', 
                    top: {
                      md: 150,
                      sm: 115,
                      xs: 5
                    },
                    left: {
                      md: 340,
                      sm: 82,
                      xs: 58
                    },
                  }}
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
                    sx={{ 
                        padding: {
                            md: 'auto', 
                            xs: '0 5'
                        }, 
                        height: { 
                            md: 'auto', 
                            xs: 150
                        }, 
                        overflowY: { 
                            md:'hidden', 
                            xs: 'scroll'
                        }
                    }}
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