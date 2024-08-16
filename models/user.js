const User = require("./schema/userSchema");

async function addUser(userData) {
  const newUser = new User(userData);
  const newUserData = await newUser.save();
  return newUserData;
}

async function getUser(username) {
  console.log(username);

  const user = await User.findOne(username);
  console.log(user);

  return user;
}

module.exports = { addUser, getUser };
