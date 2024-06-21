const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    emailid: String,
    tokenid: String
***REMOVED***
  { collection: 'users' }
);

module.exports = mongoose.model('User', userSchema, 'DIALOGUEFLOW.USERTOKEN');