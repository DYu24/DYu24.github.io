import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#1c8db8',
        },
    },
    typography: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          'Raleway',
          'Montserrat',
          'Poppins',
          'Lora',
          'Manrope',
          'IBM Plex Sans',
          'Merriweather',
        ].join(','),
    },
});