const admin = require('firebase-admin');
const path = require('path');

require('dotenv').config();

process.env.GOOGLE_APPLICATION_CREDENTIALS = path.resolve(__dirname, '../dialogue-a08df-33ec38611656.json');

console.log('GOOGLE_APPLICATION_CREDENTIALS:', process.env.GOOGLE_APPLICATION_CREDENTIALS);



// Initialize Firebase Admin SDK with your service account credentials
//const serviceAccount = require('C:\Users\bharg\OneDrive\Desktop\6th sem\BACKEND\WEBHOOK\dialogue-a08df-33ec38611656.json'); // Path to your Firebase service account key
admin.initializeApp({
 /// credential: admin.credential.cert(serviceAccount),
});

// Function to send FCM notification to a device
async function sendNotification(deviceToken, base64mp3) {
  try {
    const message = {
      token: deviceToken,
      notification: {
        title: 'Work Reminder',
        body: 'You have a work assignment starting soon.',
        // actions: [
        //   { action: 'answer', title: 'Answer' },
        //   { action: 'reject', title: 'Reject' }
        // ],
    ***REMOVED***
      data: {
        audioFile: "retrive audio from server",
    ***REMOVED***
***REMOVED***;
    // const message = {
    //   token: deviceToken,
    //   notification: {
    //     title: 'Work Reminder',
    //     body: 'You have a work assignment starting soon.',
    // ***REMOVED***
    //   data: {
    //     audioFile: audioFilePath,
    //    // reminderTime: reminderTime.toISOString(),
    // ***REMOVED***
    // };

    const response = await admin.messaging().send(message);
    console.log('Successfully sent FCM message:', response);
  } catch (error) {
    console.error('Error sending FCM message:', error);
    throw error;
  }
}

module.exports = {
  sendNotification,
};

// console.log('GOOGLE_APPLICATION_CREDENTIALS:', process.env.GOOGLE_APPLICATION_CREDENTIALS);

// require('dotenv').config();

//const admin = require('firebase-admin');
//const serviceAccount = require('C:\Users\bharg\OneDrive\Desktop\6th sem\BACKEND\WEBHOOK\dialogue-a08df-33ec38611656.json'); // Path to your service account key file

// admin.initializeApp({
//  /// credential: admin.credential.cert(serviceAccount)
// });

// async function sendNotificationToToken(title, body, token) {
//     const message = {
//         notification: {
//             title: title,
//             body: body
//       ***REMOVED***
//         token: token
// ***REMOVED***;

//     try {
//         const response = await admin.messaging().send(message);
//         console.log('Successfully sent message:', response);
//         return response;
// ***REMOVED*** catch (error) {
//         console.error('Error sending message:', error);
//         throw error;
// ***REMOVED***
// }


// const title = 'Just a remainder call BHARGAV';
// const body = 'Go do SLEEP NOW.';
// const token = 'cvREsbRfQBC5AVuUlY_7AU:APA91bEkF_BwMB-GVou9Nd42SlMWDOhU5jyd3i4Wqcs1nxAyjA7j2UMs4Usj9-QrOK0olJWmWyvi73KltX29zrzAVQ-2sC4EfLSon3wP3LCWJZ4lQ4vw0w8Sr12A4JMbXPe2jXAVybro'; // The FCM token of the device you want to send the notification to

// sendNotificationToToken(title, body, token)
//     .then(response => {
//         console.log('Notification sent successfully:', response);
// ***REMOVED***)
//     .catch(error => {
//         console.error('Error sending notification:', error);
// ***REMOVED***);