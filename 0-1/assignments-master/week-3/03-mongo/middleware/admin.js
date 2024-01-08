const { Admin, User } = require("../db");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const email = req.headers.email;
  const password = req.headers.password;
  function adminAuth(req, res, next) {
    let userFound = null;
    User.find({ email: email }).then(async (user) => {
      userFound = await user;
    });
  }
}

module.exports = adminMiddleware;
