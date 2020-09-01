import React from "react";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { blue, cyan } from "@material-ui/core/colors";
import { Link } from "react-router-dom";

const theme = createMuiTheme({
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

const useStyles = makeStyles((theme) => ({
  buttonElem: {
    flexGrow: 1,
    width: '20%',
    color: 'cyan'
  }
}));

function Topbar() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
          <div className={classes.root}>
          <AppBar position="static">
              <Toolbar>
              <Button className={classes.buttonElem} component={ Link } to= "/about">About</Button>
              <Button className={classes.buttonElem} component={ Link } to= "/resources">Resources</Button>
              <Button className={classes.buttonElem} component={ Link } to= "/schedule">Schedule</Button>
              <Button className={classes.buttonElem} component={ Link } to= "/contact">Contact Us</Button>
              </Toolbar>
          </AppBar>
          </div>
        </ThemeProvider>
    );
}

export default Topbar
