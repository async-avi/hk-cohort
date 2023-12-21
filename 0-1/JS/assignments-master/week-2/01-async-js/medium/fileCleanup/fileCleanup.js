const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, data) {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
});
