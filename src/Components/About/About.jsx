import React, { Component } from 'react';
import { Typography, Button, Grid, Paper } from '@material-ui/core'
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@material-ui/lab/';
import Theme from "../Theme";
import Questions from "../Questions/Questions";
import './About.css';
import '../Resources/Resources.css';

//Custom Material UI Styles
const styles = () => ({
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
      padding: Theme.spacing(2),
      textAlign: 'center',
      color: Theme.palette.text.secondary
    },
    paperBottom: {
      minHeight: 700
    }
});

class About extends Component {

  timelineElem = () => {
      return (
        <Timeline>
            <TimelineItem>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Eat</TimelineContent>
            </TimelineItem>
            <TimelineItem>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Code</TimelineContent>
            </TimelineItem>
            <TimelineItem>
            <TimelineSeparator>
                <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>Sleep</TimelineContent>
            </TimelineItem>
        </Timeline>
      )
  }

  announceElem = (title, time, content) => {
    return (
        <div class="announce-container">
            <div class="horiz-container">
                <div class="announce-header">
                    {title}
                </div>
                <div class='announce-header'>
                    {time}
                </div>
            </div>
            <div class="announce-content">
                {content}
            </div>
        </div>
    );
  }
    
  render() {
    const { classes } = this.props;
    return (
      <ThemeProvider theme={Theme}>
        <div class="grid-container">
            <Grid container spacing={3} alignItems="stetch">
                <Grid item xs={3}>

                    <h3 class="restHeader"> Quick Links </h3>
                    {this.timelineElem()}

                </Grid>
                <Grid item xs={6}>

                    <h2 class="restHeader"> Announcements </h2>
                    {this.announceElem("Title", "15:01, Oct. 24th", "This is a sample announcement (1)")}
                    {this.announceElem("Title", "15:02, Oct. 25th", "This is a sample announcement (2)")}
                    {this.announceElem("Title", "15:03, Oct. 26th", "This is a sample announcement (3)")}
                </Grid>
                <Grid item xs={3}>

                    <h3 class="restHeader"> Calendar </h3>
                    
                </Grid>
            </Grid>
        </div>
        <Questions/>
      </ThemeProvider>
    )
  }
}

export default withStyles(styles)(About);

