import React, { Component } from 'react';
import axios from 'axios';
import HelloSign from 'hellosign-embedded';
import Button from "@material-ui/core/Button";

class Sig extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            signatureTransMessage: "Click to Sign Contract"
        }
    }

    fetchEmbedding() {
        console.log("Hello there");
        axios.get('/sig')
        .then(res => {
            let sigUrl = res.data;
            const client = new HelloSign();
            client.open(sigUrl, {
                clientId: '8f4a4ca0b5a4e56603d264202402f256',
                skipDomainVerification: true
            });
            this.setState({signatureTransMessage: "Thank you for signing!"})
        })
        .catch(err => {
            console.log(err);
        }); 
    }

    render() {
        return (
            <div id='signature'>
                <Button color="primary" onClick={this.fetchEmbedding.bind(this)}>
                    {this.state.signatureTransMessage}
                </Button>
            </div>
        )
    }
}

export default Sig;
