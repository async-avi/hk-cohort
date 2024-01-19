const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const jwtSecret = "user-secret";

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

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  try {
    let findUser = await User.findOne({ username: req.body.username });
    if (!findUser) {
      res.status(404).json({ msg: "User not found" });
    } else {
      const token = jwt.sign({ username: findUser.username }, jwtSecret);
      res.status(200).json({
        Bearer: token,
      });
    }
  } catch (error) {
    res.status(500).json({ msg: "Something went wrong with our server" });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  try {
    let allCourses = await Course.find({});
    res.status(200).json({ allCourses });
  } catch (error) {
    res.status(500).json({ msg: "Something went wrong with our server" });
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  let id = req.params.courseId;
  const username = req.username;
  try {
    let findCourse = await Course.findOne({ _id: id });
    if (!findCourse) {
      res.status(404).json({
        msg: "Cant find the course you are trying to purchase",
      });
    } else {
      let userFound = await User.updateOne(
        { username: username },
        { $push: { purchased: findCourse._id } }
      );
      res.status(202).json({
        msg: "Course purchased successfully",
      });
    }
  } catch (error) {
    res.status(500).json({ msg: "Something went wrong with our server" });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.username;
  try {
    const userSearch = await User.findOne({ username: username });
    let purchasedCourses = [];
    for (let i = 0; i < userSearch.purchased.length; i++) {
      const elementId = userSearch.purchased[i]._id;
      const courseDetail = await Course.findById(elementId);
      purchasedCourses.push(courseDetail);
    }
    res.status(200).json({
      purchasedCourses: purchasedCourses,
    });
  } catch (error) {
    res.status(500).json({ msg: "Something went wrong with our server" });
  }
});

module.exports = router;
