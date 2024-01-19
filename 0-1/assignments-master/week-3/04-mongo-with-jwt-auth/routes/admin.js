const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course, User } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken");

const jwtsecret = "mumbojumbo";
// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  try {
    await Admin.create({
      username: req.body.username,
      password: req.body.password,
    });
    res.status(200).json({
      msg: "Admin created successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: "Something went wrong with our Server",
    });
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  try {
    let adminFound = await Admin.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    if (!adminFound) {
      res.status(404).json({
        msg: "Admin with username and password does not exist. Mind your inputs",
      });
    } else {
      const token = jwt.sign({ username: req.body.username }, jwtsecret);
      res.status(200).json({
        Bearer: token,
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Something went wrong with our Server" });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  try {
    let username = req.username;
    const newCourse = await Course.create({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      publisher: username,
    });
    await Admin.updateOne(
      { username: username },
      { $push: { courses: newCourse._id } }
    );
    res.status(202).json({
      msg: "course created successfully",
    });
  } catch (error) {
    res.json({
      msg: "Something went wrong",
    });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  try {
    const username = req.username;
    let adminSearch = await Admin.findOne({ username: username });
    let coursesPublished = [];
    for (let i = 0; i < adminSearch.courses.length; i++) {
      let elementId = adminSearch.courses[i]._id;
      let findCourse = await Course.findOne({ _id: elementId });
      coursesPublished.push(findCourse);
    }
    res.status(200).json({
      Courses: coursesPublished,
    });
  } catch (error) {
    res.json({
      msg: "something went wrong",
    });
  }
});

module.exports = router;
