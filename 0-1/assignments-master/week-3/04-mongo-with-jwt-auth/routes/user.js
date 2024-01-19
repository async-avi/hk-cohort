const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../db");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  try {
    await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    res.status(200).json({
      msg: "User created successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: "Something went wrong with our server",
    });
  }
});

router.post("/signin", (req, res) => {
  // Implement admin signup logic
});

router.get("/courses", (req, res) => {
  // Implement listing all courses logic
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
});

module.exports = router;
