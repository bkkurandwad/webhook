const textToSpeech = require('@google-cloud/text-to-speech');
const util = require('util');
const fs = require('fs');

console.log('GOOGLE_APPLICATION_CREDENTIALS:', process.env.GOOGLE_APPLICATION_CREDENTIALS);

require('dotenv').config();

// Initialize the Text-to-Speech API client
const client = new textToSpeech.TextToSpeechClient();

// Function to generate audio from text using Text-to-Speech API
async function generateAudioFromText(text) {
      const requestBody = {
        input: { text },
        voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
        audioConfig: { audioEncoding: 'MP3' },
***REMOVED***;
   
try {
  const [res] = await client.synthesizeSpeech(requestBody);
    const audioFilePath = 'file.mp3'; // Specify your file path to save audio
    const writeFile = util.promisify(fs.writeFile);
         await writeFile(audioFilePath, res.audioContent, 'binary');
         console.log('Audio content written to file: output.mp3');
    return audioFilePath;
  } catch (error) {
    console.error('Error generating audio:', error);
    throw error;
  }
}

module.exports = {
  generateAudioFromText,
};


// console.log('GOOGLE_APPLICATION_CREDENTIALS:', process.env.GOOGLE_APPLICATION_CREDENTIALS);

// require('dotenv').config();

// const textToSpeech = require('@google-cloud/text-to-speech');
// const util = require('util');
// const fs = require('fs');


// Creates a client
//const client = new textToSpeech.TextToSpeechClient();

// async function synthesizeText(text) {
//   const request = {
//     input: { text: text },
//     voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
//     audioConfig: { audioEncoding: 'MP3' },
//   };

//   try {
//     const [response] = await client.synthesizeSpeech(request);
//     const writeFile = util.promisify(fs.writeFile);
//     await writeFile('call.mp3', response.audioContent, 'binary');
//     console.log('Audio content written to file: output.mp3');
//   } catch (err) {
//     console.error('Error:', err);
//   }
// }

// Example usage
//synthesizeText('HI bhargav, I just called u to inform about your next work that is on 3.30pm.Hope u do it fast. Thank you');
