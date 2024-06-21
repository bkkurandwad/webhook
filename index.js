// external packages
const path = require('path');
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

async function insert(id, name , dur){
    try {
      await User.create({
        workid: id,
        workname: name,
        workdurration: dur
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

webApp.get('/app' , (req, res) => {
  const data = { "value" : "5"};
  res.json(data);
});

webApp.get('/call' , (req, res) => {
  const filePath = path.join(__dirname, 'public', 'call.mp3');
 
  // Send the file to the client
  res.sendFile(filePath, (err) => {
      if (err) {
          console.error('Error sending file:', err);
          res.status(500).send('An error occurred while sending the file');
***REMOVED***
  });
});

webApp.post('/posttoken' , (req, res) => {
  const token = req.body.token;
    console.log('Received FCM token:', token);
    res.status(200).send('FCM token received successfully');
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
        case 'AddWorkDetailsbyHR' : {
          const workId = req.body.queryResult.parameters.work_id;
          const workName = req.body.queryResult.parameters.work_name;
          const workDuration = req.body.queryResult.parameters.work_duration;
          await insert(workId, workName, workDuration);
          // Add logic to store the work details in your database
          // e.g., database.saveWorkDetails(workId, workName, workDuration);
  
          res.json({
              fulfillmentText: `Work ID: ${workId}, Work Name: ${workName}, Work Duration: ${workDuration} has been added successfully.`
  ***REMOVED***);
***REMOVED*** break;
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


