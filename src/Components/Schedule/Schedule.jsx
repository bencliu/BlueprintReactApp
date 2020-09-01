import React, { Component } from 'react';
import { withStyles, ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import blue from '@material-ui/core/colors/blue';
import './Schedule.css';
import Theme from "../Theme";


const styles = () => ({
  root: {
    display: "flex",
    marginLeft: 5
  },
  details: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexGrow: 1
  },
  content: {
    flex: "1 0 auto",
    alignItems: "center"
  }
});


class Schedule extends Component {
    constructor(props) {
        super(props);
    }

    dayElem = (dayNum, dayString) => {
        const { classes } = this.props;
        return (
            <div className="dayContainer">
                <div className="dayBox roundedBox">
                    Day {dayNum}
                </div>
                <div className="dayBox roundedBox">
                    {dayString}
                </div>
            </div>
        );
    }

    eventElem = (time, name, link) => {
        const { classes } = this.props;

        return (
                <div className="roundedBox eventBox">
                        <Typography component="h5" variant="h5">
                            {name}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary" align="center">
                            {time}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary" align="center">
                            {link}
                        </Typography>
                </div>
        );
    }
    
    render() {
        const { classes } = this.props;
        return (
            <ThemeProvider theme={Theme}>
                <div>
                    <div className="dayBound roundedBox">
                        {this.dayElem("1", "October 23, 2020")}
                        {this.eventElem("11:00", "Event Name", "Link")}
                    </div>
                    <div className="dayBound roundedBox">
                        {this.dayElem("2", "October 24, 2020")}
                        {this.eventElem("11:00", "Event Name", "Link")}
                    </div>
                    <div className="dayBound roundedBox">
                        {this.dayElem("3", "October 25, 2020")}
                        {this.eventElem("11:00", "Event Name", "Link")}
                    </div>
                </div>
            </ThemeProvider>
        )
    }
}

export default withStyles(styles)(Schedule);
