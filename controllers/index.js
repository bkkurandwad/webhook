// controllers/index.js
const express = require('express');
const employeeController = require('./empController');
const hrController = require('./HrController');

const router = express.Router();

router.use('/emp', employeeController);
router.use('/hr', hrController);

module.exports = router;
