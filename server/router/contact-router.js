const express = require('express');
const router = express.Router();
const { contactForm } = require('../controllers/contact-controller'); // Ensure this path is correct

router.post('/contact', contactForm);

module.exports = router;
