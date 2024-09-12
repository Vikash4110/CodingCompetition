const express = require("express");
const router = express.Router();
const teacherController = require("../controllers/teacher-controller");

// Route to create a new teacher
router.post("/create", teacherController.createTeacher);

// Route to get all teachers
router.get("/all", teacherController.getAllTeachers);

// Route to update a teacher by ID
router.put("/update/:id", teacherController.updateTeacherById);

// Route to delete a teacher by ID
router.delete("/delete/:id", teacherController.deleteTeacherById);

module.exports = router;
