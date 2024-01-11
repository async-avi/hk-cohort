const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  let username = req.body.username;
  let password = req.body.password;
  let newAdmin = new Admin({
    username: username,
    password: password,
  });
  try {
    newAdmin.save();
    res.status(200).json({
      msg: "Admin created",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error ",
    });
  }
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
});

module.exports = router;
