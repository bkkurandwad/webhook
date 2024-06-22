// external packages
const path = require('path');
const express = require('express');

// internal packages
const bodyParser = require('body-parser'); // Middleware to parse incoming request bodies
//const workController = require('./controllers/workController');
const controllers = require('./controllers');
const connectToMongoDB = require('./config/database');

// TESTING
const User = require('./models/usermodel');

require('dotenv').config();

// Start the webapp
const webApp = express();

webApp.use(bodyParser.json());

// Webapp settings
webApp.use(express.urlencoded({
    extended: true
}));
webApp.use(express.json());

// Server Port
const PORT = process.env.PORT;

//connect to db
connectToMongoDB();
  
webApp.use('/api', controllers);

// Home route
webApp.get('/', (req, res) => {
    res.send(`Hello.. The Server is running...!`);
   
});

//webApp.post('/regwork', workController.registerWork);

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

async function insert(emailid, token){
  try {
    await User.create({
      emailid: emailid,
      tokenid: token
***REMOVED***);
    console.log('User ' + emailid + ' with token ' + token + ' inserted successfully!');
    return 'User ' + emailid + ' with token ' + token + ' inserted successfully! ';

  } catch (err) {
    console.error(`Error inserting user ${emailid} with token ${token}:`, err);
    return 'Error inserting ' + emailid + ' with token ' + token + err;
  }
}

webApp.post('/posttoken' ,async (req, res) => {
  const tokens = req.body.token;
  const id1 = req.body.id;
    console.log('Received FCM token and id:', id1 );
   
    console.log('inserted successfully');
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

// // Define your POST route to register a work
// webApp.post('/regwork', async (req, res) => {
//   try {
//     const { work_id, work_title, work_description, assigned_to, assigned_by, start_time, end_time, due_date } = req.body;

//     // Create a new work detail
//     const workDetails = new WorkDetails({
//       work_id,
//       work_title,
//       work_description,
//       assigned_to,
//       assigned_by,
//       start_time,
//       end_time,
//       due_date
// ***REMOVED***);

//     // Save the work details to the database
//     const status = await workDetails.save();
//     console.log(status);

//     const reminderTime = calculateReminderTime(start_time); // Example function from dateUtils

//     // Generate audio from text message
//     const reminderMessage = `You have a work assignment "${work_title}" starting in 30 minutes. Please be prepared.`;
//     const audioFilePath = await generateAudioFromText(reminderMessage);

//     // Send notification using FCM
//     sendNotification(assigned_to, audioFilePath, reminderTime);

//     res.status(201).json(workDetails);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// async function insert(id, name, token, num, email, pswrd){
//   try {
//     await Emp.create({
//       emp_id: id,
//       emp_name: name,
//       emp_token: token,
//       emp_phnnum: num,
//       emp_emailid: email,
//       emp_pswrd: pswrd
// ***REMOVED***);
//     console.log('User ' + emailid + ' with token ' + token + ' inserted successfully!');
//     return 'User ' + emailid + ' with token ' + token + ' inserted successfully! ';

//   } catch (err) {
//     console.error(`Error inserting user ${emailid} with token ${token}:`, err);
//     return 'Error inserting ' + emailid + ' with token ' + token + err;
//   }
// }

// async function connectToMongoDB() {
//   try {
//     await mongoose.connect("mongodb+srv://bhargavkurandwad:q2Rz53OVvSkI3WmD@cluster0.qb3qmjd.mongodb.net/DIALOGUEFLOW?retryWrites=true&w=majority&appName=Cluster",{
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         socketTimeoutMS: 35000 // set socket timeout to 30 seconds
// ***REMOVED***);
//     console.log('Connected to MongoDB successfully!');
    
//   } catch (err) {
//     console.error('Error connecting to MongoDB:', err);
    
//   }
// }

// webApp.post('/regemp', async (req, res) => {
//   try {
//     const { id, name, token, num, email, pswrd } = req.body;

//     // Encrypt the password
//     const saltRounds = 10;
//     const hashedPassword = await bcrypt.hash(pswrd, saltRounds);

//     // Create a new user detail with the hashed password
//     const userdet = new Userdetails({
//       emp_id: id,
//       emp_name: name,
//       emp_token: token,
//       emp_phnnum: num,
//       emp_emailid: email,
//       emp_pswrd: hashedPassword
// ***REMOVED***);

//     // Save the user details to the database
//     const status = await userdet.save();
//     console.log(status);

//     res.status(201).json(userdet);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Define your POST route to log in a user
// webApp.post('/logemp', async (req, res) => {
//   try {
//     const { email, pswrd } = req.body;

//     // Find the user by email
//     const user = await Userdetails.findOne({ emp_emailid: email });

//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
// ***REMOVED***

//     // Compare the provided password with the stored hashed password
//     const isMatch = await bcrypt.compare(pswrd, user.emp_pswrd);

//     if (!isMatch) {
//       return res.status(401).json({ error: 'Invalid credentials' });
// ***REMOVED***

//     res.status(200).json({ message: 'Login successful' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });


// // Define your POST route to register an HR
// webApp.post('/reghr', async (req, res) => {
//   try {
//     const { id, name, token, num, email, pswrd } = req.body;

//     // Encrypt the password
//     const saltRounds = 10;
//     const hashedPassword = await bcrypt.hash(pswrd, saltRounds);

//     // Create a new HR detail with the hashed password
//     const hrDetails = new HrDetails({
//       hr_id: id,
//       hr_name: name,
//       hr_token: token,
//       hr_phnnum: num,
//       hr_emailid: email,
//       hr_pswrd: hashedPassword
// ***REMOVED***);

//     // Save the HR details to the database
//     const status = await hrDetails.save();
//     console.log(status);

//     res.status(201).json(hrDetails);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Define your POST route to log in an HR
// webApp.post('/loghr', async (req, res) => {
//   try {
//     const { email, pswrd } = req.body;

//     // Find the HR by email
//     const hr = await HrDetails.findOne({ hr_emailid: email });

//     if (!hr) {
//       return res.status(404).json({ error: 'HR not found' });
// ***REMOVED***

//     // Compare the provided password with the stored hashed password
//     const isMatch = await bcrypt.compare(pswrd, hr.hr_pswrd);

//     if (!isMatch) {
//       return res.status(401).json({ error: 'Invalid credentials' });
// ***REMOVED***

//     res.status(200).json({ message: 'Login successful' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });


// extras
// const mongoose = require('mongoose');
// const WorkDetails = require('../WEBHOOK/models/workdetails');
// const { calculateReminderTime } = require('../utils/dateUtils');
// const { sendNotification } = require('../services/fcmService');
//const dialogflow = require('@google-cloud/dialogflow').v2beta1;
// const { generateAudioFromText } = require('../services/textToSpeechService');