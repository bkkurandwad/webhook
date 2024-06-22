// dateUtils.js
function calculateReminderTime(startTime) {
    const thirtyMinutes = 30 * 60 * 1000; // 30 minutes in milliseconds
    return new Date(startTime.getTime() - thirtyMinutes);
  }
  
  module.exports = {
    calculateReminderTime,
  };
  