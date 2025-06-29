const Task = require('../models/Task');
const User = require('../models/User');
const ExcelJS = require('exceljs');

exports.addTaskForm = async (req, res) => {
  const users = await User.query();
  res.render('addTask', { users });
};

exports.addTask = async (req, res) => {
  const { user_id, task_name, task_status } = req.body;
  await Task.query().insert({ user_id, task_name, task_status });
  res.redirect('/add-task');
};

exports.getUserTasks = async (req, res) => {
  const tasks = await Task.query().where('user_id', req.params.id);
  res.json(tasks);
};

exports.exportToExcel = async (req, res) => {
  const users = await User.query();
  const tasks = await Task.query().withGraphFetched('user');

  const workbook = new ExcelJS.Workbook();
  const userSheet = workbook.addWorksheet('Users');
  const taskSheet = workbook.addWorksheet('Tasks');

  userSheet.columns = [
    { header: 'ID', key: 'id' },
    { header: 'Name', key: 'name' },
    { header: 'Email', key: 'email' },
    { header: 'Mobile', key: 'mobile' }
  ];
  users.forEach(u => userSheet.addRow(u));

  taskSheet.columns = [
    { header: 'ID', key: 'id' },
    { header: 'User ID', key: 'user_id' },
    { header: 'Task Name', key: 'task_name' },
    { header: 'Status', key: 'task_status' }
  ];
  tasks.forEach(t => taskSheet.addRow(t));

  const filePath = './exports/users_tasks.xlsx';
  await workbook.xlsx.writeFile(filePath);
  res.download(filePath);
};
