import { createTheme } from '@material-ui/core/styles';
import "@fontsource/teko";

const DefaultTheme = createTheme({
    props: {
      MuiButtonBase: {
        disableRipple: true,
        TouchRippleProps: { style: { display: 'none' } },
      },
      MuiSwitch: {
        disableRipple: false,
        TouchRippleProps: { style: { display: 'block' } },
      }
    },
  
    breakpoints: {
      values: {
        xs: 0,
        sm: 720,
        md: 1024,
        lg: 1366,
        xl: 1920,
      },
    },
    overrides: {
      MuiButton: {
        root: {
          textTransform: 'initial', 
        },
        outlinedPrimary: {
          borderColor: '#FAE2E5',
        },
      },
      MuiIconButton: {
        root: {
          color: '#2E343B',
          '&:focus': {
            backgroundColor: '#EFEFEF',
            outline: '2px solid black'
          },
        },
      },
    },
    typography: {
      fontFamily: 'Teko',
      body1: {
        fontSize: 20,
      },
      h5: {
        fontSize: '26px',
        letterSpacing: '4px',
      },
      h2: {
          fontWeight: 500,
          lineHeight: '1em',
        '@media (max-width:767px)': {
           fontSize: '36px'
          },
          fontSize: '100px',
      },

      h4: {
          fontSize: '24px',
          letterSpacing: '6px',
          fontWeight: 600,
          lineHeight: '1.6rem',
          textTransform: 'uppercase',
      },
      h1: {
        fontSize: '10vw',
        textShadow: '0em 0.18em 0.27em rgb(0 0 0 / 38%)',
        letterSpacing: '0.05em',
        lineHeight: '0.9em',
        fontWeight: 500,
        textTransform: 'uppercase',
      },
      subtitle1: {
        fontWeight: 700
      },
      subtitle2: {
        fontWeight: 700
      },
    },
  });
  export default DefaultTheme;
  