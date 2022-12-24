import React from 'react'
import {
    Container,
    Box,
    Typography,
    Paper,
    Button,
} from '@mui/material';
import LoopIcon from '@mui/icons-material/Loop';
import { Slide } from "react-awesome-reveal";

import "../../App.css"

const buttonStyles = {
    color: 'text.primary'
}


const Banner = ({section}) => {

    // const [open1, setOpen1] = React.useState(false)
    // const [open2, setOpen2] = React.useState(false)


    // //**use conditional for 'unflip' effect**

    // const flipBox1 = () => {
    //     setOpen1(!open1)
    // }
    // const flipBox2 = () => {
    //     setOpen2(!open2)
    // }

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
                    {/* <Paper 
                        className={open1 ? 'flip-horizontal-bottom' : null}
                        sx={{
                            margin: '1rem 0 .75rem 0',
                            padding: {
                                md :'2rem',
                                xs: '.50rem'
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
                            overflowY: 'auto' //overflowY
                    }}>
                        <Typography variant="h5">
                            {section.title}
                        </Typography>
                        <Typography sx={{
                            fontSize: {
                                md: '1rem',
                                xs: '.85rem'
                            },
                            margin: '.50rem 0',
                            
                        }}>
                            {section.description}
                        </Typography>
                        <Button onClick={flipBox1}>
                            <LoopIcon sx={buttonStyles} fontSize="small" />
                        </Button>
                    </Paper> */}

                    <Popover 
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    >
                        <Typography variant="h5">
                            {section.title}
                        </Typography>
                        <Typography sx={{
                            fontSize: {
                                md: '1rem',
                                xs: '.85rem'
                            },
                            margin: '.50rem 0',
                            
                        }}>
                            {section.description}
                        </Typography>
                    </Popover>

                </Slide>

                <Slide direction="right" triggerOnce>
                    {/* <Paper 
                        className={open2 ? 'flip-horizontal-bottom' : null}
                        sx={{
                            margin: '1rem 0 .75rem 0',
                            padding: {
                                md :'2rem',
                                xs: '.50rem'
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
                            },
                            margin: '.50rem 0'
                            
                        }}>
                            {section.description}
                        </Typography>
                        <Button onClick={flipBox2}>
                            <LoopIcon sx={buttonStyles} fontSize="small" />
                        </Button>
                    </Paper> */}

                    <Popover 
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                          }}
                          transformOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                          }}
                    >
                        <Typography variant="h5">
                            {section.title}
                        </Typography>
                        <Typography sx={{
                            fontSize: {
                                md: '1rem',
                                xs: '.85rem'
                            },
                            margin: '.50rem 0',
                            
                        }}>
                            {section.description}
                        </Typography>
                       
                    </Popover>

                </Slide>
                
            </Box>
        </Box>
    </Container>
  )
}

export default Banner