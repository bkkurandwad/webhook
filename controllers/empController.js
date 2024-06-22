// controllers/employeeController.js
const express = require('express');
const bcrypt = require('bcrypt');
const EmployeeDetails = require('../models/userdetails');

const router = express.Router();

// POST route to register an employee
router.post('/reg', async (req, res) => {
  try {
    const { id, name, token, num, email, pswrd } = req.body;

    // Encrypt the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(pswrd, saltRounds);

    // Create a new employee detail with the hashed password
    const employee = new EmployeeDetails({
      emp_id: id,
      emp_name: name,
      emp_token: token,
      emp_phnnum: num,
      emp_emailid: email,
      emp_pswrd: hashedPassword
***REMOVED***);

    // Save the employee details to the database
    const status = await employee.save();
    console.log(status);

    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST route to log in an employee
router.post('/log', async (req, res) => {
  try {
    const { email, pswrd } = req.body;

    // Find the employee by email
    const employee = await EmployeeDetails.findOne({ emp_emailid: email });

    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
***REMOVED***

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(pswrd, employee.emp_pswrd);

    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
***REMOVED***

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/tok', async (req, res) => {
try {
  const { id, token } = req.body;

  // Find employee by id and update token
  const updatedEmployee = await EmployeeDetails.findOneAndUpdate(
***REMOVED*** emp_id: id },
***REMOVED*** emp_token: token },
***REMOVED*** new: true }
  );

  if (!updatedEmployee) {
    return res.status(404).json({ error: 'Employee not found' });
  }

  res.status(200).json(updatedEmployee);
} catch (error) {
  res.status(500).json({ error: error.message });
}

});


module.exports = router;
