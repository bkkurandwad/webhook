const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
***REMOVED***
  { collection: 'users' }
);

module.exports = mongoose.model('User', userSchema, 'DIALOGUEFLOW.USERNOW');