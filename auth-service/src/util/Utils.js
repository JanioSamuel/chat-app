const bcrypt = require('bcrypt')

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
}

async function comparePassword(password, basePassword) {
  const isSame = await bcrypt.compare(password, basePassword);
  return isSame;
}

module.exports = {
  hashPassword,
  comparePassword
}