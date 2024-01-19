const jwt = require("jsonwebtoken");
const jwtSecret = "user-secret";

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  try {
    const authorization = req.headers["authorization"];
    const verify = jwt.verify(authorization, jwtSecret);
    req.username = await verify.username;
    next();
  } catch (error) {
    res.status(400).json({
      msg: "Unauthenticated user",
    });
  }
}

module.exports = userMiddleware;
