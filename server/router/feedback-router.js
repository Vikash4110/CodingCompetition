const express = require("express");
const router = express.Router();
const feedbackController = require("../controllers/feedback-controller");

// Route to submit feedback
router.post("/submit", feedbackController.createFeedback);

// Route to get feedback by teacher ID
router.get("/teacher/:teacherId", feedbackController.getFeedbackByTeacherId);

// Route to get all feedback
router.get("/all", feedbackController.getAllFeedback);
module.exports = router;