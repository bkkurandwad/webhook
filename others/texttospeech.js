
console.log('GOOGLE_APPLICATION_CREDENTIALS:', process.env.GOOGLE_APPLICATION_CREDENTIALS);

require('dotenv').config();

const textToSpeech = require('@google-cloud/text-to-speech');
const util = require('util');
const fs = require('fs');


// Creates a client
const client = new textToSpeech.TextToSpeechClient();

async function synthesizeText(text) {
  const request = {
    input: { text: text },
    voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
    audioConfig: { audioEncoding: 'MP3' },
  };

  try {
    const [response] = await client.synthesizeSpeech(request);
    const writeFile = util.promisify(fs.writeFile);
    const filePath = 'call2.mp3';
    await writeFile(filePath, response.audioContent, 'binary');
    //const base64String = audioFile.toString('base64');
    console.log(`Audio content written to file: ${filePath}`);
  } catch (err) {
    console.error('Error:', err);
  }
}

// Example usage
//synthesizeText('HI bhargav,do it fast . Thank you');
//I just called u to inform about your next work that is on 3.30pm.Hope u do it fast