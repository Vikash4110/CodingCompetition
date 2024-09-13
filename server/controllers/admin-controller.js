const User = require('../models/user-model');
const Contact = require('../models/contact-model');
const Teacher = require('../models/teacher-model');
const Feedback = require('../models/feedback-model');

// User Controllers
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, { password: 0 });
    if (!users.length) return res.status(404).json({ message: 'No users found' });
    res.status(200).json({ users });
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ _id: id }, { password: 0 });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// const updateUserById = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const updatedUserData = req.body;
//     const updatedData = await User.updateOne({ _id: id }, { $set: updatedUserData });
//     if (!updatedData.nModified) return res.status(404).json({ message: 'User not found or data unchanged' });
//     res.status(200).json({ message: 'User updated successfully' });
//   } catch (error) {
//     next(error);
//   }
// };

const updateUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedUserData = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, { $set: updatedUserData }, { new: true });

    if (!updatedUser) return res.status(404).json({ message: 'User not found or data unchanged' });
    res.status(200).json({ message: 'User updated successfully', updatedUser });
  } catch (error) {
    next(error);
  }
};

const deleteUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await User.deleteOne({ _id: id });
    if (!result.deletedCount) return res.status(404).json({ message: 'User not found' });
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    next(error);
  }
};

// Contact Controllers
const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    if (!contacts.length) return res.status(404).json({ message: 'No contacts found' });
    res.status(200).json({ contacts });
  } catch (error) {
    next(error);
  }
};

const deleteContactById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Contact.deleteOne({ _id: id });
    if (!result.deletedCount) return res.status(404).json({ message: 'Contact not found' });
    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (error) {
    next(error);
  }
};



// Teacher Controllers
const getAllTeacher = async (req, res, next) => {
    try {
      const teacher = await Teacher.find();
      if (!teacher.length) return res.status(404).json({ message: 'No teacher found' });
      res.status(200).json(teacher);
    } catch (error) {
      next(error);
    }
  };
  
  const getTeacherById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const teacher = await Teacher.findOne({ _id: id });
      if (!teacher) return res.status(404).json({ message: 'teacher not found' });
      res.status(200).json(teacher);
    } catch (error) {
      next(error);
    }
  };
  const addTeacher = async (req, res, next) => {
    try {
      const { teacher_name, father_name, mobile_no, email, department, subject_name, subject_code } = req.body;
  
      // Check for missing fields
      if (!teacher_name || !father_name || !mobile_no || !email || !department || !subject_name || !subject_code) {
        return res.status(400).json({ message: 'All fields are required' });
      }
  
      const newTeacher = new Teacher({
        teacher_name,
        father_name,
        mobile_no,
        email,
        department,
        subject_name,
        subject_code
      });
  
      await newTeacher.save();
      res.status(201).json({ message: 'Teacher added successfully' });
    } catch (error) {
      console.error('Error in addTeacher controller:', error.message);  // Log error message
      next(error); // Pass error to middleware
    }
  };
  
  
  const updateTeacherById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedTeacherData = req.body;
  
      // Find the syllabus first
      const teacher = await Teacher.findOne({ _id: id });
      if (!teacher) {
        return res.status(404).json({ message: 'Teacher not found' });
      }
  
      // Update the syllabus
      await Teacher.updateOne({ _id: id }, { $set: updatedTeacherData });
      res.status(200).json({ message: 'Teacher updated successfully' });
    } catch (error) {
      next(error);
    }
  };
  const deleteTeacherById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await Teacher.deleteOne({ _id: id });
      if (!result.deletedCount) return res.status(404).json({ message: 'Teacher not found' });
      res.status(200).json({ message: 'Teacher deleted successfully' });
    } catch (error) {
      next(error);
    }
  };


  const getAllFeedback = async (req, res, next) => {
    try {
      const feedbacks = await Feedback.find().populate('teacherId'); // Populate teacherId field
      if (!feedbacks.length) return res.status(404).json({ message: 'No feedback found' });
      res.status(200).json(feedbacks);
    } catch (error) {
      next(error);
    }
  };
  
  const getFeedbackById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const feedback = await Feedback.findById(id).populate('teacherId'); // Populate teacherId field
      if (!feedback) return res.status(404).json({ message: 'Feedback not found' });
      res.status(200).json(feedback);
    } catch (error) {
      next(error);
    }
  };
  
module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  getAllContacts,
  deleteContactById,
  getAllTeacher,
  getTeacherById,
  addTeacher,
  updateTeacherById,
  deleteTeacherById,
  getAllFeedback,
  getFeedbackById
};
