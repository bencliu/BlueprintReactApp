import React, { Component } from 'react';
import { Typography, Button } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
    typography: {
        // Use the system font instead of the default Roboto font.
        "fontFamily": [
          'Courier New',
          'Courier', 
          'monospace'
        ].join(','),
        "fontSize": 14
    }
});

class About extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Typography>
            Hello There
        </Typography>
        <Button>
            Button
        </Button>
      </ThemeProvider>
    )
  }
}

export default About;

