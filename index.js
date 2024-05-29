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
      case 'calls':
        res.send({
          fulfillmentText: 'called him.'
***REMOVED***);
        break;
      case 'orders':
        res.send({
          fulfillmentText: 'Order received thank you.'
***REMOVED***);
        break;
      case 'work':
        res.send({
          fulfillmentText: 'This is ur work.'
***REMOVED***);
        break;
      default:
        res.send({
          fulfillmentText: 'Simple response from webhook.'
***REMOVED***);
***REMOVED***
  });

// Start the server
webApp.listen(PORT, () => {
    console.log(`Server is up and running at ${PORT}`);
});
