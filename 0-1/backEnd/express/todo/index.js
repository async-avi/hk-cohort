import express from "express";
import fs from "fs";

const port = 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  fs.readFile("tasks.txt", "utf-8", function (err, data) {
    if (err) throw err;
    res.send(`<h3>Tasks</h3>${data}`);
  });
});

app.post("/addTask", (req, res) => {
  async function update() {
    let reqData = req.body.task;
    let addedData = await reqData.toString();
    fs.readFile("tasks.txt", "utf8", (err, data) => {
      if (err) console.log(`Error reading file: ${err}`);
      let newData = data + addedData;
      fs.writeFile("tasks.txt", newData, (err, data) => {
        if (err) console.log(`Error writing file: ${err}`);
        console.log("Done editing");
      });
    });
  }
  update();
  res.redirect("/");
});

app.listen(port, () => console.log(`Listening on ${port}`));
