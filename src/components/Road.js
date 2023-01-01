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
  } from '@mui/material';
  import AddCircleIcon from '@mui/icons-material/AddCircle';
  import CloseIcon from '@mui/icons-material/Close';
  import ShareIcon from '@mui/icons-material/Share';
  import { Swiper, SwiperSlide } from "swiper/react";
  import { 
    Navigation
} from "swiper";
  
  import "../App.css"
  import "swiper/css";
  import "swiper/css/pagination";
  import "swiper/css/navigation";


import Banner from './modules/Banner';
import { gradientBgColors, iconStyles, pingStyles, cardStyles, cardContentStyles } from '../Styles';
  
  
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
      description: 'This is descriptive text. Meant to create filer words used as a template to any potential text. It is worth mentioning this text should be longer.',
      bgImg: 'cyclingroad.jpg'
    });
  
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


                <Box 
                  // === PING ===
                  className="ping"
                  sx={pingStyles}
                />
                <IconButton 
                  // === ICON ===
                  aria-label="view info"
                  onClick={toggleClick}
                  sx={iconStyles}
                >
                  { hide ? <CloseIcon fontSize="large" /> : <AddCircleIcon fontSize="large" />}
                </IconButton>

                <Card 
                  className={ hide ? 'fade-in' : 'fade-out'}
                  sx={cardStyles}
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
                      sx={cardContentStyles}
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
  
  export default Road;