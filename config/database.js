// config/db.js
const mongoose = require('mongoose');

async function connectToMongoDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
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
