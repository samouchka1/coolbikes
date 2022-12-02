import React from 'react'
import {
    Container,
    Box,
    Card,
    CardContent,
    CardActions,
    CardMedia,
    Button,
    Typography,
    CardActionArea
} from '@mui/material';
import { Link } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
import { Swiper, SwiperSlide } from "swiper/react";
import { 
    Navigation,
    HashNavigation
} from "swiper";

import "../App.css";
import "swiper/css";
import "swiper/css/navigation";

import { roadBikes } from './Road';
import { gravelBikes } from './Gravel';
import { fixedGearBikes } from './FixedGear'

const slideStyles = {
    width: '100%',
    height: 'auto',
    display: 'flex'
}

export const allBikes = [
    ...roadBikes,
    ...gravelBikes,
    ...fixedGearBikes
]

const CardSlider = () => {

  return (
    <Container maxWidth={false} sx={{marginTop: '.5rem'}}>
        <Box sx={{backgroundColor: '#e0e0e074'}}>
            <Swiper
                modules={[Navigation, HashNavigation]} 
                navigation={true}
                hashNavigation={{
                    watchState: true,
                  }}
                loop={true} 
                breakpoints={{
                    600: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    800: {
                      slidesPerView: 4,
                      spaceBetween: 10,
                    },
                }}
            >
                {allBikes.map((bike) => (
                    <SwiperSlide 
                        style={slideStyles} 
                        key={bike} 
                        data-hash={bike.hash}
                    >
                        <Card sx={{ width: 345, margin: '.25rem 0' }}>
                            <CardActionArea>
                                <Link to={bike.route} style={{textDecoration: 'none'}}>
                                    {/* <HashLink
                                        scroll={(element) => element.scrollIntoView({ behavior: 'smooth' })}
                                        to={bike.hash}
                                        style={{textDecoration: 'none'}}
                                    > */}
                                        <CardMedia
                                            component="img"
                                            alt={bike.name}
                                            height="auto"
                                            image={process.env.PUBLIC_URL + '/images/' + bike.name}
                                        />
                                        <CardContent>
                                            {/* <Typography gutterBottom variant="h5" component="div">
                                                CoolBikes
                                            </Typography> */}
                                            <Typography variant="body1" color="text.secondary">
                                            {bike.info}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Share</Button>
                                            <Button size="small">Learn More</Button>
                                        </CardActions>
                                    {/* </HashLink> */}
                                </Link>
                            </CardActionArea>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>



    </Container>
  )
}

export default CardSlider