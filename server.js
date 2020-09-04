const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.post('/', function (req, res) {
  console.log("Backend post");
  res.status(200).send("Hello API Event Received");
});

app.get('/sig', function (req, response) {
  console.log("Executed");
  //HelloSign Server Code

  const hellosign = require('hellosign-sdk')({ key: 'f520c697e3d20af3883f44ed434ad2493134da6eddc7bbdd2a2d7214ed9895bc' });

  const opts = {
    test_mode: 1,
    clientId: '8f4a4ca0b5a4e56603d264202402f256',
    subject: 'NDA with Acme Co.',
    message: 'Please sign this NDA and then we can discuss more.?',
    signers: [
      {
        email_address: 'bennliu01@gmail.com',
        name: 'Jack'
      },
      {
        email_address: 'benliu2001@yahoo.com',
        name: 'Jill'
      }
    ],
    files: ['NDA.pdf']
  };

  hellosign.signatureRequest.createEmbedded(opts).then((res) => {
    const signature = res.signature_request.signatures[0];
    const signatureId = signature.signature_id;
    return hellosign.embedded.getSignUrl(signatureId);
  }).then((res) => {
    console.log('The sign url: ' + res.embedded.sign_url);
    console.log("THIS IS THE END");
    response.status(200).send(res.embedded.sign_url);
  }).catch((err) => {
    // handle error
  });
});

app.listen(process.env.PORT || 8080);

