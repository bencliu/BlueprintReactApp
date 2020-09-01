import React, { Component } from 'react';
import { Typography, Button } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import Theme from "../Theme";

class About extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
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

