// controllers/workController.js
const express = require('express');

//db
const Emp = require('../models/userdetails')
const Work = require('../models/workdetails');
const {registerWorkDetails} = require('../controllers/workController')
const router = express.Router();

async function registerwork(data){
    try {
        const { work_id, work_title, work_description, assigned_to, assigned_by, start_time, end_time, due_date } = data;
        
        const startTime = new Date(start_time);
    
        const workDetails = new Work({
          work_id,
          work_title,
          work_description,
          assigned_to,
          assigned_by,
          start_time: startTime,
          end_time,
          due_date
***REMOVED***);
        const savedWork = await workDetails.save();
        const some = savedWork;
***REMOVED*** catch (error) {
        console.error('Error registering work:', error);
        const some =  error.message;
***REMOVED***
      return some;
}

router.post('/webhook', async (req, res) => {
    console.log(JSON.stringify(req.body, 2, ''));
  
    const intent = req.body.queryResult.intent.displayName;
  
    switch (intent) {
      case 'calls':
        const Message = await insert("calls", "call@call.com");
res.send({
  fulfillmentText: Message
});
        break;
      case 'orders':
        const msg = await insert("new order","order@mail.com");
        res.send({
          fulfillmentText: msg
***REMOVED***);
        break;
        case 'AddWorkDetailsbyHR' : {
          const work_id = req.body.queryResult.parameters.work_id;
          const work_title = req.body.queryResult.parameters.work_title;
          const work_description = req.body.queryResult.parameters.work_des;
          const assigned_to = req.body.queryResult.parameters.emp_id;
          const assigned_by = req.body.queryResult.parameters.hr_id;
          const start_time = req.body.queryResult.parameters.st;
          const end_time = req.body.queryResult.parameters.et;
          const due_date = req.body.queryResult.parameters.due_date;
          const data = {work_id, work_title, work_description, assigned_to, assigned_by, start_time, end_time, due_date};
          const status = await registerwork(data);
          console.log(status);
         // await insert(workId, workName, workDuration);
          // Add logic to store the work details in your database
          // e.g., database.saveWorkDetails(workId, workName, workDuration);
  
          res.json({
              fulfillmentText: `Work ID: ${workId}, Work Name: ${workName}, Work Duration: ${workDuration} has been added successfully.`
  ***REMOVED***);
***REMOVED*** break;
      case 'work':
        const workmsg = await insert("new work", "work@workmail.com");
        res.send({
          fulfillmentText: workmsg
***REMOVED***);
        break;
      default:
        res.send({
          fulfillmentText: 'Simple response from webhook.'
***REMOVED***);
***REMOVED***
  });

module.exports = router;