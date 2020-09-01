import axios from 'axios';
import {
  Button,
  TextField,
  Typography
} from '@material-ui/core';
import React, { Component } from 'react'
import { withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue, yellow } from '@material-ui/core/colors/blue';
import './Contact.css';
import Theme from "../Theme";

const styles = () => ({
    buttonElem: {
        flexGrow: 1,
        width: '20%',
        color: 'cyan'
    },
    formElem: {
        height: 100
    }
});

export class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName: "",
            teamName: "",
            email: "",
            req: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleFullName = (e) => {
        this.setState({
            fullName: e.target.value
        });
    }

    handleTeamName = (e) => {
        this.setState({
             teamName: e.target.value
        });
    }

    handleEmail = (e) => {
        this.setState({
             email: e.target.value
        });
    }

    handleReq = (e) => {
        this.setState({
             req: e.target.value
        });
    }

    handleSubmit() {
        let formObject = {
            'entry.1140922342': this.state.fullName,
            'entry.690266039': this.state.teamName,
            'entry.397641815': this.state.email,
            'entry.1613355198': this.state.req
        };
        axios.post(
            'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdkgxI9hQhGfGHqbS-HKCMVrYV-RuvfsoBH_OcSN0q1MdRCyg/formResponse', 
            JSON.stringify(formObject),
            {
                headers: {
                    'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                  }
            }
        )
        .then(res => {
             if (res.status == 200) {
                 alert("Form submitted successfully");
                 this.setState({
                     fullName: "",
                     teamName: "",
                     email: "",
                     req: ""
                 });
             }
        })
        .catch(error => {
             console.log("Form submitted failure:", error);
        })
    }
    
    render() {
        const { classes } = this.props;
        return (
            <ThemeProvider theme={Theme}>
                <div className="formContainer">
                <div className="formElem">
                    <h1 class="formHeader"> Contact Us </h1>
                </div>
                <div className="formElem">
                    <TextField
                        id = "Sign name field"
                        label = "Full Name"
                        variant = "outlined"
                        color = "primary"
                        value = {this.state.fullName}
                        onChange = {this.handleFullName}
                        fullWidth = 'true'
                    />
                </div>   
                <div className="formElem">
                    <TextField
                        id = "Team name field"
                        label = "Team Name"
                        variant = "outlined"
                        color = "primary"
                        value = {this.state.teamName}
                        onChange = {this.handleTeamName}
                        fullWidth = 'true'
                    />
                </div>   
                <div className="formElem">
                    <TextField
                        id = "email field"
                        label = "Email address"
                        variant = "outlined"
                        color = "primary"
                        value = {this.state.email}
                        onChange = {this.handleEmail}
                        fullWidth = 'true'
                    />
                </div>   
                <div className="formElem">
                    <TextField
                        id = "req field"
                        label = "Request"
                        variant = "outlined"
                        color = "primary"
                        value = {this.state.req}
                        onChange = {this.handleReq}
                        fullWidth = 'true'
                        multiline={true}
                        rows={5}
                    />
                </div>   
                <div className="formElem">
                    <Button className={classes.buttonElem} variant="contained" color="primary" onClick = {this.handleSubmit}>
                        Submit
                    </Button>
                </div> 
                </div>
            </ThemeProvider>
        )
    }
}

export default withStyles(styles)(Contact);

