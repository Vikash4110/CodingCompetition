const Feedback = require("../models/feedback-model");
const Teacher = require("../models/teacher-model");

// Create new feedback
exports.createFeedback = async (req, res) => {
  try {
    const { teacherId, questions, comment } = req.body;

    // Calculate total rating and average rating
    const totalRating = questions.reduce((sum, q) => sum + q.rating, 0);
    const averageRating = totalRating / questions.length;

    // Save new feedback
    const feedback = new Feedback({
      teacherId,
      questions,
      comment,
      averageRating,
      totalRating,
    });
    await feedback.save();

    // Update teacher's overall rating by recalculating based on all feedback
    const allFeedbacks = await Feedback.find({ teacherId });
    const totalFeedbackRatings = allFeedbacks.reduce((sum, fb) => sum + fb.averageRating, 0);
    const updatedTeacherRating = totalFeedbackRatings / allFeedbacks.length;

    const teacher = await Teacher.findById(teacherId);
    if (teacher) {
      teacher.rating = updatedTeacherRating;
      await teacher.save();
    }

    res.status(201).json({ message: "Feedback submitted successfully", data: feedback });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get feedback for a specific teacher
exports.getFeedbackByTeacherId = async (req, res) => {
  try {
    const { teacherId } = req.params;
    const feedback = await Feedback.find({ teacherId });
    res.status(200).json(feedback);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all feedback
exports.getAllFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().populate("teacherId");
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
