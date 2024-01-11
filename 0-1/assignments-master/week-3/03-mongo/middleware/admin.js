const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  let username = req.headers.username;
  let password = req.headers.password;
  let user = await Admin.findOne({ username: username, password: password });
  if (user) {
    res.status(200);
    next();
  } else {
    res.status(403).json({ msg: "You are not an admin" });
  }
}

module.exports = adminMiddleware;
