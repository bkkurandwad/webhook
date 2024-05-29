const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
***REMOVED***
        name : String,
        email : String
***REMOVED***
);

module.exports = mongoose.model('CONTENT',userSchema);