const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    workid: String,
    workname: String,
    workduration: String
***REMOVED***
  { collection: 'users' }
);

module.exports = mongoose.model('User', userSchema, 'DIALOGUEFLOW.USERNOW');