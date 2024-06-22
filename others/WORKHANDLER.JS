const { calculateReminderTime } = require('../utils/dateUtils');
const Work = require('../models/Work');
const { generateAudioFromText } = require('../services/textToSpeechService');
const { sendNotification } = require('../services/fcmService');

// Function to register a new work assignment
async function registerWork(req, res) {
  try {
    const { work_id, work_title, work_description, assigned_to, assigned_by, start_time, end_time, due_date } = req.body;

    // Convert start_time to Date object
    const startTime = new Date(start_time);

    // Create a new work detail
    const workDetails = new Work({
      work_id,
      work_title,
      work_description,
      assigned_to,
      assigned_by,
      start_time: startTime, // Store startTime as a Date object
      end_time,
      due_date
***REMOVED***);

    // Save the work details to the database
    const savedWork = await workDetails.save();

    // Calculate reminder time 30 minutes before start_time
    const reminderTime = calculateReminderTime(startTime);

    // Generate audio from text message
    const reminderMessage = `You have a work assignment "${work_title}" starting in 30 minutes. Please be prepared.`;
    const audioFilePath = await generateAudioFromText(reminderMessage);

    // Schedule the notification using a task scheduler (e.g., setTimeout)
    const currentTime = new Date();
    const timeToNotify = reminderTime - currentTime.getTime(); // Time in milliseconds until reminderTime

    setTimeout(async () => {
      // Send notification using FCM
      await sendNotification(assigned_to, audioFilePath, reminderTime);
  ***REMOVED*** timeToNotify);

    res.status(201).json(savedWork);
  } catch (error) {
    console.error('Error registering work:', error);
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  registerWork,
};
