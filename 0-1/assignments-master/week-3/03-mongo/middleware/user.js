const { User } = require("../db");

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  let username = req.headers.username;
  let password = req.headers.password;
  let user = await User.findOne({ username: username, password: password });
  if (user) {
    res.status(200);
    next();
  } else {
    res.status(403).json({ msg: "You are not a user" });
  }
}

module.exports = userMiddleware;
