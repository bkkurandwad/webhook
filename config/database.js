// config/db.js
const mongoose = require('mongoose');
require('dotenv').config();

async function connectToMongoDB() {
  try {
    await mongoose.connect("mongodb+srv://bhargavkurandwad:q2Rz53OVvSkI3WmD@cluster0.qb3qmjd.mongodb.net/DIALOGUEFLOW?retryWrites=true&w=majority&appName=Cluster", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      socketTimeoutMS: 35000 // set socket timeout to 35 seconds
***REMOVED***);
    console.log('Connected to MongoDB successfully!');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit process with failure
  }
}

module.exports = connectToMongoDB;
