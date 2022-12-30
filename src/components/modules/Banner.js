import React from 'react'
import {
    Container,
    Box,
    Typography,
    Paper,
    Button,
    Popover,
} from '@mui/material';
import { Slide } from "react-awesome-reveal";
import ExpandIcon from '@mui/icons-material/Expand';

import "../../App.css"

const buttonStyles = {
    color: 'text.primary',
    margin: '.5rem'
}

const leftMenuStyles = {
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
}

const rightMenuStyles = {
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
}


const Banner = ({section}) => {

    const [anchorEl1, setAnchorEl1] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);

    const open1 = Boolean(anchorEl1);
    const open2 = Boolean(anchorEl2);

    const handleClick1 = (event) => {
        setAnchorEl1(event.currentTarget);
    };
    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };

    const handleClose1 = () => {
        setAnchorEl1(null);
    };
    const handleClose2 = () => {
        setAnchorEl2(null);
    };

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

                <Slide direction="left" triggerOnce>
                    <Paper sx={leftMenuStyles}>
                                
                        <Typography variant="h5" sx={{m: '.5rem'}}>{section.title}</Typography>
                        <Typography>Coming soon!</Typography>
                        <Button sx={buttonStyles} onCLick={handleClick1}>
                            <ExpandIcon />
                        </Button>
                    </Paper>
                    <Popover 
                        open={open1}
                        anchorEl={anchorEl1}
                        onClose={handleClose1}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        <Box sx={{p: 2}}>
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
                        </Box>
                    </Popover>
                </Slide>

                <Slide direction="right" triggerOnce>
                    <Paper sx={rightMenuStyles}>
                        <Typography variant="h5" sx={{m: '.5rem'}}>{section.title}</Typography>
                        <Typography>Coming soon!</Typography> 
                        <Button sx={buttonStyles} onCLick={handleClick2}>
                            <ExpandIcon />
                        </Button>
                    </Paper>
                    <Popover 
                        open={open2}
                        anchorEl={anchorEl2}
                        onClose={handleClose2}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                    >
                        <Box sx={{p: 2}}>
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
                        </Box>
                    </Popover>
                </Slide>
                
            </Box>
        </Box>
    </Container>
  )
}

export default Banner