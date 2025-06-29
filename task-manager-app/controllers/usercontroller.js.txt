const User = require('../models/User');

exports.addUserForm = (req, res) => {
  res.render('addUser');
};

exports.addUser = async (req, res) => {
  const { name, email, mobile } = req.body;
  await User.query().insert({ name, email, mobile });
  res.redirect('/');
};
