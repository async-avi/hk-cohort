import express from "express";
import multer from "multer";
import path from "path";
import cors from "cors";

const app = express();
const port = 3000;
app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "working",
  });
});

app.post("/new", upload.single("image"), (req, res) => {
  res.json({
    msg: "Image uploaded successfully",
  });
});

app.listen(port, () => console.log(`Listening on ${port}`));
