import React, { Component } from 'react'
import '../Resources/Resources.css';
import SmallFontTheme from '../SmallFontTheme';
import { Typography } from '@material-ui/core';
import { ThemeProvider } from "@material-ui/core/styles";

class faq extends Component {
    questionElem = (question, answer) => {
        return (
            <ThemeProvider theme={SmallFontTheme}>
                <div className="questionBox">
                    <Typography component="h5" variant="h5">
                        {question}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" align="center">
                        {answer}
                    </Typography>
                </div>
            </ThemeProvider>
        );
    }
    
    render() {
        return (
            <div className="resElem">
                <h2 class="restHeader"> Frequently Asked Questions </h2>
                {this.questionElem("What is this?", "An orange")}
                {this.questionElem("Where is the event?", "Virtual!")}
                {this.questionElem("Where can I get help?", "Submit a contact form or ping a staff member on slack!")}
            </div>
        )
    }
}

export default faq;
