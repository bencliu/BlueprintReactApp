import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { ThemeProvider } from "@material-ui/core/styles";
import './Resources.css';
import SmallFontTheme from '../SmallFontTheme';
import Questions from '../Questions/Questions';

//Override theme

class Resources extends Component {

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
                <Questions/>
            </div>
        )
    }
}

export default Resources;
