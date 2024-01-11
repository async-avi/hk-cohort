const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course, User } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  let username = req.body.username;
  let password = req.body.password;
  try {
    await Admin.create({
      username,
      password,
    });
    res.status(200).json({ success: true, msg: "User created successfully" });
  } catch (error) {
    res.status(500).json({
      msg: "Error ",
    });
    console.log(error);
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  let title = req.body.title;
  let description = req.body.description;
  let price = req.body.price;
  let adminUsername = req.headers.username;
  try {
    let newCourse = await Course.create({
      title: title,
      description: description,
      price: price,
      publisher: adminUsername,
    });
    try {
      await Admin.updateOne(
        { username: adminUsername },
        { $push: { courses: newCourse._id } }
      );
      res
        .status(202)
        .json({ success: true, msg: "Course created successfully" });
    } catch (error) {
      res.status(500).json({
        msg: "Something went wrong",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  try {
    await Course.find({}).then((courseArr) => {
      res.status(200).json({
        courses: courseArr,
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
