export const gradientBgColors = {
    fixed : {
      dark: 'radial-gradient(circle, rgba(0,15,143,1) 30%, rgba(0,0,0,1) 100%)',
      light: 'radial-gradient(circle, rgba(0,15,143,1) 30%, rgba(255,255,255,1) 100%)'
    },
    gravel: {
      dark: 'radial-gradient(circle, rgba(0,143,19,1) 30%, rgba(0,0,0,1) 100%)',
      light: 'radial-gradient(circle, rgba(0,143,19,1) 30%, rgba(255,255,255,1) 100%)'
    },
    road: {
      dark: 'radial-gradient(circle, rgba(195,0,0,1) 30%, rgba(0,0,0,1) 100%)',
      light: 'radial-gradient(circle, rgba(195,0,0,1) 30%, rgba(255,255,255,1) 100%)'
    }
  }

export const pingStyles = {
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
}

export const iconStyles = {
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
}

export const cardStyles = {
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
}

export const cardContentStyles = {
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
}