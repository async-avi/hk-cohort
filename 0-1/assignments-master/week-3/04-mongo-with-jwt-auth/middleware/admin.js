const jwt = require("jsonwebtoken");
const jwtsecret = "mumbojumbo";
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  try {
    const bearer = req.headers["authorization"];
    const verification = jwt.verify(bearer, jwtsecret);
    req.username = await verification.username;
    res;
    next();
  } catch (error) {
    res.status(404).json({
      msg: "Unauthorized access",
    });
  }
}

module.exports = adminMiddleware;
