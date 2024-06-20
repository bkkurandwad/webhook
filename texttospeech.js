
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
    await writeFile('output.mp3', response.audioContent, 'binary');
    console.log('Audio content written to file: output.mp3');
  } catch (err) {
    console.error('Error:', err);
  }
}

// Example usage
synthesizeText('Hello, world!');
