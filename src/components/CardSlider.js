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
import { Swiper, SwiperSlide } from "swiper/react";
import { 
    Pagination,
    Navigation
} from "swiper";

import "../App.css"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { roadBikes } from './Road';
import { gravelBikes } from './Gravel';
import { fixedGearBikes } from './FixedGear'

const slideStyles = {
    width: '100%',
    height: 'auto',
    display: 'flex'
}

const CardSlider = () => {

    const allBikes = [
        ...roadBikes,
        ...gravelBikes,
        ...fixedGearBikes
    ]

  return (
    <Container maxWidth={false} sx={{marginTop: '.5rem'}}>
        <Box>
            <Swiper
                modules={[Pagination, Navigation]} 
                navigation={true}
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
                    <SwiperSlide style={slideStyles} key={bike}>
                        <Card sx={{ width: 345, margin: '.5rem 0' }}>
                            <CardActionArea>
                                <Link to={bike.route}>
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
                                        <Typography variant="body2" color="text.secondary">
                                        {bike.info}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Share</Button>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
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