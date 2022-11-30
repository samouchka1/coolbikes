import React from 'react'
import {
    Container,
    Box,
    Typography,
    Paper
} from '@mui/material';
import { Slide } from "react-awesome-reveal";

const Banner = () => {
  return (
    <Container maxWidth={false} sx={{margin: '.50rem 0'}}>
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 'auto', 
            height: '100vh', 
            border: 'black 1px solid', //test
            background: 'radial-gradient(circle, rgba(149,149,149,1) 0%, rgba(255,255,255,1) 100%)'
        }}>
            <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
            }}>
                <Slide direction="left" delay="50" triggerOnce>
                    <Paper sx={{
                        padding: '2rem', 
                        width: {
                            md: 350,
                            xs: 175
                        },
                        position: 'relative',
                        right: '75%'
                    }}>
                        <Typography>
                            This is a test
                        </Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab reprehenderit, aliquam praesentium ipsam officiis illo quod ducimus temporibus sint suscipit aperiam accusantium nobis?
                        </Typography>
                    </Paper>
                </Slide>

                <Slide direction="right" delay="80" triggerOnce>
                    <Paper sx={{
                        padding: '2rem', 
                        width: {
                            md: 350,
                            xs: 175
                        },
                        position: 'relative',
                        left: '75%'
                    }}>
                        <Typography>
                            This is a test
                        </Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab reprehenderit, aliquam praesentium ipsam officiis illo quod ducimus temporibus sint suscipit aperiam accusantium nobis?
                        </Typography>
                    </Paper>
                </Slide>
                
            </Box>
        </Box>
    </Container>
  )
}

export default Banner