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
  import { Pagination } from "swiper";
  
  import "../App.css"
  import "swiper/css";
  import "swiper/css/pagination";
  
  
  const gravelBikes = [
    {
      name: 'gravel1.jpg',
      info: 'Great comfort yet formidable for the outdoor.',
    },
    {
      name: 'gravel2.jpg',
      info: 'A good medium between speed and off-road capability.',
    },
    {
      name: 'gravel3.jpg',
      info: 'This versatile bike will ride through any obsctable.',
    },
    {
      name: 'gravel4.jpg',
      info: 'Designed for maximum speed in rough terrain.',
    }
  ]
  
  const slideStyles = {
    width: '100%',
    height: 'auto',
  }
  
  const Gravel = () => {
  
    const [ hide, setHide ] = useState(false);
    const toggleClick =() => {
      setHide(!hide)
    }
  
    return (
      <Container maxWidth={false}>
        <Box sx={{backgroundColor: 'background.default'}}>
          <Swiper modules={[Pagination]} loop={true} style={{marginBottom: '-4px'}}>
            {gravelBikes.map((bike) => (
              <SwiperSlide style={slideStyles} key={bike}>
                <Box 
                  component="img" 
                  alt={bike.name} 
                  sx={{
                    height: 'auto', 
                    width: '100%', 
                    textAlign: 'center',
                    zIndex: 0,
                  }} 
                  src={process.env.PUBLIC_URL + '/images/gravel/' + bike.name} 
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
                      md: 110.25,
                      sm: 65.75,
                      xs: 11.65
                    },
                    left: {
                      md: 120.5,
                      sm: 9,
                      xs: 8.25
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
                      md: 115,
                      sm: 3,
                      xs: 2
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
                      sm: 93,
                      xs: 5
                    },
                    left: {
                      md: 152,
                      sm: 55,
                      xs: 52
                    },
                    // overflowY: { md:'hidden', xs: 'scroll'}
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
    )
  }
  
  export default Gravel;