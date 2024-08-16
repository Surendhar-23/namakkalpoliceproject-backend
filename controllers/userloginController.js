const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { addUser, getUser } = require("../models/user");
async function userloginController(req, res) {
  const { username, password } = req.body;

  try {
    console.log("start");
    const user = await getUser({ username });
    console.log("user", user);
    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (err) {
    console.log(err);

    res.status(500).json({ error: "Error logging in" });
  }
}

async function userregisterController(req, res) {
  const { username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await addUser({ username, password: hashedPassword });
    return res.status(200).send(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred", error });
  }
}

module.exports = { userloginController, userregisterController };
