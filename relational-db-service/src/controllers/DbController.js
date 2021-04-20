const { v4: uuidv4 } = require('uuid');
const User = require('../model/User');

async function login(req, res) {
  const username = req.body.username;

  const user = await User.findOne({
    where: {
      username: username
    }
  });

  return res.json(user ? user : null);
}

async function signup(req, res) {
  const userDb = await User.findOne({
    where: {
      username: req.body.username
    }
  });
  if (userDb) {
    return res.json({ action: 'error', message: 'User already exists' });
  } else {
    const newUser = {
      id: uuidv4(),
      username: req.body.username,
      password: req.body.password,
    }
    const user = await User.create(newUser);

    return res.json({ user, action: 'signup' });
  }
}

module.exports = {
  login,
  signup
}