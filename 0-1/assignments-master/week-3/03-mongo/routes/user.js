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

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  let username = req.headers.username;
  let courseId = req.params.courseId;
  try {
    let courseFound = await Course.findById(courseId);
    try {
      await User.updateOne(
        { username: username },
        { $push: { purchased: courseFound._id } }
      );
      res.status(202).json({
        msg: "Course purchased",
        Course: courseFound.title,
      });
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    res.status(400).json({ error: "Could not find Course with this id" });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  let username = req.headers.username;
  let purchasedCourses = [];
  let purchasedCourseDetails;
  let user = await User.findOne({ username: username });
  let purchasedCoursesByUser = user.purchased;
  for (let i = 0; i < purchasedCoursesByUser.length; i++) {
    purchasedCourseDetails = await Course.findOne({
      _id: purchasedCoursesByUser[i],
    });
    // console.log(purchasedCourseDetails);
    purchasedCourses.push(purchasedCourseDetails);
  }
  res.status(200).json({
    purchasedCourses: purchasedCourses,
  });
});

module.exports = router;
