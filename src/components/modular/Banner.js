import React from 'react'
import {
    Container,
    Box,
    Typography,
    Paper,
} from '@mui/material';
import { Fade } from "react-awesome-reveal";

import "../../App.css"

const Banner = ({section}) => {

    const menuStyles = {
        margin: '5rem auto',
        padding: {
            md :'2rem',
            xs: '1rem'
        }, 
        width: {
            md: '60%',
            xs: '80%'
        },
        '&:hover': {
            boxShadow: '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)'
        }
    }
    
    const descriptionStyles = {
        fontSize: '1.15rem',
        textAlign: 'left',
        lineHeight: '1.6',
    }

  return (
    <Container maxWidth={false} sx={{margin: '.50rem 0'}}>
        <Box 
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 'auto', 
                height: 'contain',
                background: `center url(${process.env.PUBLIC_URL + '/images/banner/' + section.bgImg})` // lifted state from FixedGear / Gravel / Road
        }}>
            <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
            }}>

                <Fade triggerOnce>
                    <Paper sx={menuStyles}>
                        {/* <Fade triggerOnce delay="30"> */}
                            <Typography sx={descriptionStyles}>{section.description}</Typography>
                        {/* </Fade> */}
                    </Paper>
                </Fade>
                
            </Box>
        </Box>
    </Container>
  )
}

export default Banner