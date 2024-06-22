const express = require('express');
const bodyParser = require('body-parser');
const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const util = require('util');

const app = express();
const port = 3000;

// Creates a client
const client = new textToSpeech.TextToSpeechClient();

app.use(bodyParser.json());

// Endpoint to receive text and generate audio
app.post('/synthesize', async (req, res) => {
  const text = req.body.text;

  const request = {
    input: { text: text },
    voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
    audioConfig: { audioEncoding: 'MP3' },
  };

  try {
    const [response] = await client.synthesizeSpeech(request);
    const writeFile = util.promisify(fs.writeFile);
    const fileName = `output_${Date.now()}.mp3`;
    await writeFile(fileName, response.audioContent, 'binary');
    console.log('Audio content written to file:', fileName);
    
    // Optionally, you can stream the audio back to the client
    res.download(fileName, err => {
      if (err) {
        console.error('Error sending audio:', err);
        res.status(500).send('Error sending audio');
***REMOVED***
      fs.unlinkSync(fileName); // Delete the file after sending
***REMOVED***);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('Error synthesizing speech');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
