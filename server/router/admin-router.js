const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin-controller');
const authMiddleware = require('../middlewares/auth-middleware');
const adminMiddleware = require('../middlewares/admin-middleware');
// User Panel
router.route('/user').get(authMiddleware, adminMiddleware, adminController.getAllUsers);
router.route('/user/:id').get(authMiddleware, adminMiddleware, adminController.getUserById);
router.route('/user/update/:id').patch(authMiddleware, adminMiddleware, adminController.updateUserById);
router.route('/user/delete/:id').delete(authMiddleware, adminMiddleware, adminController.deleteUserById);
// Contact Panel
// router.route('/contacts').get(authMiddleware, adminMiddleware, adminController.getAllContacts);
// router.route('/contacts/delete/:id').delete(authMiddleware, adminMiddleware, adminController.deleteContactById);
// Teacher Panel
router.route('/teacher').get(authMiddleware, adminMiddleware, adminController.getAllTeacher);
router.route('/teacher/delete/:id').delete(authMiddleware, adminMiddleware, adminController.deleteTeacherById);
router.route('/teacher/add').post(authMiddleware, adminMiddleware, adminController.addTeacher);
router.route('/teacher/:id').get(authMiddleware, adminMiddleware, adminController.getTeacherById);
router.route('/teacher/update/:id').patch(authMiddleware, adminMiddleware, adminController.updateTeacherById);

module.exports = router;

