const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const taskController = require('../controllers/taskController');

router.get('/', userController.addUserForm);
router.post('/add-user', userController.addUser);

router.get('/add-task', taskController.addTaskForm);
router.post('/add-task', taskController.addTask);

router.get('/tasks/:id', taskController.getUserTasks);
router.get('/export', taskController.exportToExcel);

module.exports = router;
