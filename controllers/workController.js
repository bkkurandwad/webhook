// controllers/workController.js
const express = require('express');

//db
const Emp = require('../models/userdetails')
const Work = require('../models/workdetails');

const { calculateReminderTime } = require('../utils/dateUtils');

//services
const { generateAudioFromText } = require('../services/textToSpeechService');
const { sendNotification } = require('../services/fcmService');

const router = express.Router();

router.post('/reg', async (req, res) => {
  const eid = req.body.assigned_to;
  const wt = req.body.work_title;
  const wd = req.body.work_description;
  try {
    const { work_id, work_title, work_description, assigned_to, assigned_by, start_time, end_time, due_date } = req.body;
    
    const startTime = new Date(start_time);

    const workDetails = new Work({
      work_id,
      work_title,
      work_description,
      assigned_to,
      assigned_by,
      start_time: startTime,
      end_time,
      due_date
***REMOVED***);
    const savedWork = await workDetails.save();
    res.status(201).json(savedWork);
  } catch (error) {
    console.error('Error registering work:', error);
    res.status(500).json({ error: error.message });
  }

    notify_for_work(eid,wt, wd);
    

    
});

async function notify_for_work(assigned_to,work_title, msg) {
  //const reminderTime = calculateReminderTime(startTime);
// Fetch token from database using assigned_to (emp_id)
const employee = await Emp.findOne({ emp_id: assigned_to });

if (!employee) {
  throw new Error('Employee not found');
}

    const token = employee.emp_token; // Assuming emp_token is the field in your model
    const name = employee.emp_name;
    console.log(token);
    const reminderMessage = `Hi ${name}, I just called you to inform about the work "${work_title}" starting in 30 minutes. ${msg}. Please be prepared.`;
   const  audioC = await generateAudioFromText(reminderMessage);
    await sendNotification(token, work_title, msg);
    
   
}

async function registerWorkDetails(data) {
  // Your logic to register the work details goes here
  // For example, saving to the database
  const { work_id, work_title, work_description, assigned_to, assigned_by, start_time, end_time, due_date } = req.body;
  try{
  const workDetails = new Work({
    work_id,
    work_title,
    work_description,
    assigned_to,
    assigned_by,
    start_time: startTime,
    end_time,
    due_date
  });
  const savedWork = await workDetails.save();
  res.status(201).json(savedWork);
  console.log('added work from dialogueflow')
}
 catch (error) {
  console.error('Error registering work:', error);
  res.status(500).json({ error: error.message });
}
}

async function notify_for_announcements(work_title, work_msg, hr_name) {
  //const reminderTime = calculateReminderTime(startTime);
// Fetch token from database using assigned_to (emp_id)
const employee = await Emp.findOne({ emp_id: assigned_to });

if (!employee) {
  throw new Error('Employee not found');
}

    const token = employee.emp_token; // Assuming emp_token is the field in your model
    const reminderMessage = ` "${work_title}" is announced by "${hr_name}". Please be prepared for doing the work.${work_msg} `;
   const  base64String = await generateAudioFromText(reminderMessage);
    await sendNotification(token);
}

module.exports = { router, registerWorkDetails };


// const express = require('express');
// const router = express.Router();

// const { calculateReminderTime } = require('../utils/dateUtils');
// const Work = require('../models/workdetails');
// const { generateAudioFromText } = require('../services/textToSpeechService');
// const { sendNotification } = require('../services/fcmService');

// // Function to register a new work assignment
// router.post('/tok', async (req, res) => {
//   try {
//     const { work_id, work_title, work_description, assigned_to, assigned_by, start_time, end_time, due_date } = req.body;

//     // Convert start_time to Date object
//     const startTime = new Date(start_time);

//     // Create a new work detail
//     const workDetails = new Work({
//       work_id,
//       work_title,
//       work_description,
//       assigned_to,
//       assigned_by,
//       start_time: startTime, // Store startTime as a Date object
//       end_time,
//       due_date
// ***REMOVED***);

//     // Save the work details to the database
//     const savedWork = await workDetails.save();

//     // Calculate reminder time 30 minutes before start_time
//     const reminderTime = calculateReminderTime(startTime);

//     // Generate audio from text message
//     const reminderMessage = `You have a work assignment "${work_title}" starting in 30 minutes. Please be prepared.`;
//     const audioFilePath = await generateAudioFromText(reminderMessage);

//     // Schedule the notification using a task scheduler (e.g., setTimeout)
//     const currentTime = new Date();
//     const timeToNotify = reminderTime - currentTime.getTime(); // Time in milliseconds until reminderTime

//     setTimeout(async () => {
//       // Send notification using FCM
//       await sendNotification(assigned_to, audioFilePath, reminderTime);
//   ***REMOVED*** timeToNotify);

//     res.status(201).json(savedWork);
//   } catch (error) {
//     console.error('Error registering work:', error);
//     res.status(500).json({ error: error.message });
//   }
// });

// module.exports = router;

// module.exports = {
//   registerWork,
// };
