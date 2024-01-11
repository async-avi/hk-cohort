const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic
  let username = req.body.username;
  let password = req.body.password;
  let newUser = new User({
    username: username,
    password: password,
  });
  try {
    newUser.save();
    res.status(200).json({
      msg: "User saved successfully",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Something went wrong in our server",
    });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  let allCourses = Course.find();
  allCourses.then((course) =>
    res.status(200).json({
      courses: course,
    })
  );
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
});

module.exports = router;
