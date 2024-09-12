const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  teacher_name: {
    type: String,
    required: true,
  },
  father_name: {
    type: String,
    required: true,
  },
  mobile_no: {
    type: String,
    required: true,
    match: [/^[0-9]{10}$/, "Please enter a valid 10-digit mobile number"],
  },
  email: {
    type: String,
    required: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
  department: {
    type: String,
    required: true,
  },
  subject_name: {
    type: String,
    required: true,
  },
  subject_code: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5, // Assuming a rating scale of 1 to 5
    default: 0, // Initial default rating
  },
}, { timestamps: true }); // To add createdAt and updatedAt fields

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;
