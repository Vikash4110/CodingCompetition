const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
    required: true,
  },
  questions: [
    {
      question: { type: String, required: true },
      rating: { type: Number, min: 1, max: 5, required: true },
    },
  ],
  comment: {
    type: String,
    required: false,
  },
  averageRating: {
    type: Number,
    min: 1,
    max: 5,
    default: 0,
  },
  totalRating: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
