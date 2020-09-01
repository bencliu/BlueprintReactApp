import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { ThemeProvider } from "@material-ui/core/styles";
import './Resources.css';
import SmallFontTheme from '../SmallFontTheme';

//Override theme

class Resources extends Component {

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
            <div className="resContainer">
                <div className="resElem">
                    <h2 class="restHeader"> Competition Structure Overview </h2>
                </div>
                <div className="resElem">
                    <h2 class="restHeader"> Case 1: Economic and Social Infastructure </h2>
                    <iframe src="https://docs.google.com/document/d/e/2PACX-1vRPKg742TeLTPyxWU1NyePdcylQLAa1QrBTNEm8LdYBpAPpgG6UHxnY1ibcCbFDbYeqcW0wYw43dgoc/pub?embedded=true"
                    height="500px" width="95%">
                    </iframe>
                </div>
                <div className="resElem">
                    <h2 class="restHeader"> Case 2: Social Distancing and Human Mobility </h2>
                    <iframe src="https://docs.google.com/document/d/e/2PACX-1vTAv8yq_hz0u7hom3d63F-gZj7zI7tiPkrE1udoiXW3nUotB_pZ1eaTr_oBRBkUJo7tuWi04OZlReJ3/pub?embedded=true"
                    height="500px" width="95%">
                    </iframe>
                </div>
                <div className="resElem">
                    <h2 class="restHeader"> Case 3: Sufficient Healthcare Access </h2>
                    <iframe src="https://docs.google.com/document/d/e/2PACX-1vRUzjUXanQjTGPLzkjNFPcG-Q9-AQsEqXvHBjn4wFg7Yb0i3NXP_aMY1Z7AUix0x23NebNrsX252GFd/pub?embedded=true"
                    height="500px" width="95%">
                    </iframe>
                </div>
                <div className="resElem">
                    <h2 class="restHeader"> Data Access Instructions </h2>
                </div>
                <div className="resElem">
                    <h2 class="restHeader"> Submission Instructions </h2>
                </div>
                <div className="resElem">
                    <h2 class="restHeader"> Resource Guide </h2>
                    <iframe src="https://docs.google.com/document/d/e/2PACX-1vTZ_Ew4xnY0c0ffci2K6-3eUgRrEndJvUNCtMrAy289yqkyjU03vj04ILTczILeILc0QvirSmbk2TYd/pub?embedded=true"
                    height="500px" width="95%">
                    </iframe>
                </div>
                <div className="resElem">
                    <h2 class="restHeader"> Frequently Asked Questions </h2>
                    {this.questionElem("What is this?", "An orange")}
                    {this.questionElem("Where is the event?", "Virtual!")}
                    {this.questionElem("Where can I get help?", "Submit a contact form or ping a staff member on slack!")}
                </div>
            </div>
        )
    }
}

export default Resources
