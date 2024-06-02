// external packages

const express = require('express');
const mongoose = require('mongoose');
const dialogflow = require('@google-cloud/dialogflow').v2beta1;

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

async function connectToMongoDB() {
  try {
    await mongoose.connect("mongodb+srv://bhargavkurandwad:q2Rz53OVvSkI3WmD@cluster0.qb3qmjd.mongodb.net/DIALOGUEFLOW?retryWrites=true&w=majority&appName=Cluster",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        socketTimeoutMS: 35000 // set socket timeout to 30 seconds
***REMOVED***);
    console.log('Connected to MongoDB successfully!');
    
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    
  }
}

async function insert(name, email){
    try {
      await User.create({
        name: name,
        email: email
***REMOVED***);
      console.log('User ' + name + ' with email ' + email + ' inserted successfully!');
      return 'User ' + name + ' with email ' + email + ' inserted successfully! ';

***REMOVED*** catch (err) {
      console.error(`Error inserting user ${name} with email ${email}:`, err);
      return 'Error inserting ' + name + ' with email ' + email + err;
***REMOVED***
  }
  
  // Call the function with name and email
  
connectToMongoDB();
  const User = require('./models/usermodel');

// Home route
webApp.get('/', (req, res) => {
    res.send(`Hello World.!`);
   
});

webApp.post('/webhook', async (req, res) => {
    console.log(JSON.stringify(req.body, 2, ''));
  
    const intent = req.body.queryResult.intent.displayName;
  
    switch (intent) {
      case 'calls':
        const Message = await insert("calls", "call@call.com");
res.send({
  fulfillmentText: Message
});
        break;
      case 'orders':
        const msg = await insert("new order","order@mail.com");
        res.send({
          fulfillmentText: msg
***REMOVED***);
        break;
      case 'work':
        const workmsg = await insert("new work", "work@workmail.com");
        res.send({
          fulfillmentText: workmsg
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


