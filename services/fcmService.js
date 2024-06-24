const admin = require('firebase-admin');
const path = require('path');

require('dotenv').config();

process.env.GOOGLE_APPLICATION_CREDENTIALS = path.resolve(__dirname, '../dialogue-a08df-33ec38611656.json');

console.log('GOOGLE_APPLICATION_CREDENTIALS:', process.env.GOOGLE_APPLICATION_CREDENTIALS);

admin.initializeApp({
 /// credential: admin.credential.cert(serviceAccount),
});

// Function to send FCM notification to a device
async function sendNotification(deviceToken, Title, body) {
  try {
    const message = {
      token: deviceToken,
      notification: {
        title: Title,
        body: body
    ***REMOVED***
***REMOVED***;
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