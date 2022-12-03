import React from 'react'
import {
    Container,
    Box,
    Typography,
    Paper,
} from '@mui/material';
import { Slide } from "react-awesome-reveal";


const Banner = ({section}) => {

  return (
    <Container maxWidth={false} sx={{margin: '.50rem 0'}}>
        <Box 
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 'auto', 
                height: 'contain',
                // height: {
                //     md: '65vh',
                //     xs: '80vh'
                // }, 
                background: `center url(${process.env.PUBLIC_URL + '/images/banner/' + section.bgImg})` // lifted state from FixedGear / Gravel / Road
        }}>
            <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
            }}>
                <Slide direction="left" triggerOnce>
                    <Paper 
                        sx={{
                            margin: '1rem 0 .75rem 0',
                            padding: {
                                md :'2rem',
                                xs: '.75rem'
                            }, 
                            width: {
                                md: 350,
                                sm: 225,
                                xs: 150
                            },
                            position: 'relative',
                            right: {
                                md: '65%',
                                sm: '60%',
                                xs: '30%'
                            },
                    }}>
                        <Typography variant="h5">
                            {section.title}
                        </Typography>
                        <Typography sx={{
                            fontSize: {
                                md: '1rem',
                                xs: '.85rem'
                            }
                        }}>
                            {section.description}
                        </Typography>
                    </Paper>
                </Slide>

                <Slide direction="right" triggerOnce>
                    <Paper 
                        sx={{
                            margin: '.75rem 0 1rem 0',
                            padding: {
                                md :'2rem',
                                xs: '.75rem'
                            },  
                            width: {
                                md: 350,
                                sm: 225,
                                xs: 150
                            },
                            position: 'relative',
                            left: {
                                md: '65%',
                                sm: '60%',
                                xs: '30%'
                            },
                    }}>
                        <Typography variant="h5">
                           {section.title}
                        </Typography>
                        <Typography sx={{
                            fontSize: {
                                md: '1rem',
                                xs: '.85rem'
                            }
                        }}>
                            {section.description}
                        </Typography>
                    </Paper>
                </Slide>
                
            </Box>
        </Box>
    </Container>
  )
}

export default Banner