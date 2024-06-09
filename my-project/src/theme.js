import { createTheme } from '@mui/material/styles';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#000000', // Change primary color
    },
    secondary: {
      main: '#a9a9a9', // Change secondary color
    },
    background: {
      default: '#a9a9a9', // Change default background color
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Change default font family
    h1: {
      fontSize: '2.5rem', // Customize heading 1 font size
      fontWeight: 700, // Customize heading 1 font weight
      lineHeight: 1.2, // Customize heading 1 line height
    },
    h2: {
      fontSize: '2rem', // Customize heading 2 font size
      fontWeight: 700, // Customize heading 2 font weight
      lineHeight: 1.2, // Customize heading 2 line height
    },
    // Add more typography customizations as needed
  },
  // Add more customizations such as spacing, breakpoints, etc.
});

export default theme;