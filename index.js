// external packages

const express = require('express');
require('dotenv').config();

// Start the webapp
const webApp = express();

// Webapp settings
webApp.use(express.urlencoded({
    extended: true
}));
webApp.use(express.json());

// Server Port
const PORT = process.env.PORT;

// Home route
webApp.get('/', (req, res) => {
    res.send(`Hello World.!`);
   
});

webApp.post('/webhook', (req, res) => {
    console.log(JSON.stringify(req.body, 2, ''));
  
    const intent = req.body.queryResult.intent.displayName;
  
    switch (intent) {
      case 'webhook':
        res.send({
          fulfillmentText: 'Response from web.'
***REMOVED***);
        break;
      case 'intent2':
        res.send({
          fulfillmentText: 'Response for intent 2.'
***REMOVED***);
        break;
      case 'intent3':
        res.send({
          fulfillmentText: 'Response for intent 3.'
***REMOVED***);
        break;
      default:
        res.send({
          fulfillmentText: 'I didn\'t understand that intent.'
***REMOVED***);
***REMOVED***
  });

// Start the server
webApp.listen(PORT, () => {
    console.log(`Server is up and running at ${PORT}`);
});
