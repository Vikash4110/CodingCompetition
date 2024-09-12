const User = require('../models/user-model');
// const Contact = require('../models/contact-model');


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



module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  getAllContacts,
  deleteContactById,
};
