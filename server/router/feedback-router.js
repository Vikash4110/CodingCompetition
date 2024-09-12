const express = require("express");
const router = express.Router();
const feedbackController = require("../controllers/feedback-controller");

// Route to submit feedback
router.post("/submit", feedbackController.createFeedback);

// Route to get feedback by teacher ID
router.get("/teacher/:teacherId", feedbackController.getFeedbackByTeacherId);

module.exports = router;
