import React from 'react';
import './App.css';
import {
  HashRouter, Route, Switch, Redirect
} from 'react-router-dom';
import {
  Grid, Typography, Paper
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import StarfieldAnimation from 'react-starfield-animation';
import axios from 'axios';

//Import necessary components
import Topbar from './Components/Topbar/Topbar';
import Schedule from './Components/Schedule/Schedule';
import Resources from './Components/Resources/Resources';
import Contact from './Components/Contact/Contact';
import Image from './Components/starImage.jpeg';
import About from './Components/About/About';
import Questions from './Components/Questions/Questions';

//Custom Material UI Styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: 100,
    paddingRight: 100,
    paddingTop: 50,
    paddingBottom: 100,
    height: '100%',
    backgroundImage: `url(${Image})`
  },
  paperTop: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  paperBottom: {
    minHeight: 700
  }
}));

function App() {
  const classes = useStyles();

  return (
    <HashRouter>
    <StarfieldAnimation
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
      />
    <div className={classes.root}>
      <Grid container spacing={3} alignItems="stretch">
        <Grid item xs={12}>
          <Paper className={classes.paperTop}>
            <div className="logoDiv"/>
            <Topbar/>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={ clsx(classes.paperTop, classes.paperBottom) }>
            <Switch>
              {
                <Route exact path="/"
                     render={() =>
                      <About/>}
                   />
              }
              {
                <Route exact path="/about"
                     render={() =>
                      <About/>}
                   />
              }
              {
                <Route exact path="/resources"
                     render={() =>
                      <Resources/>}
                   />
              }
              {
                <Route exact path="/schedule"
                     render={() =>
                      <Schedule/>}
                   />
              }
              {
                <Route exact path="/contact"
                     render={() =>
                      <Contact/>}
                   />
              }
              {
                <Route exact path="/sig"
                     render={() =>
                      <div>
                        <div id='signature'>
                          ESignature
                        </div>
                      </div>}
                   />
              }
            </Switch>
          </Paper>
        </Grid>
      </Grid>
    </div>
    </HashRouter>
  );
}
                

export default App;
