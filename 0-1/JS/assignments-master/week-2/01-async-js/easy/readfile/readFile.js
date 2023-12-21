const fs = require("fs");

function main(filename) {
  fs.readFile(filename, "utf-8", function (err, data) {
    if (err) {
      console.log("There was an error reading");
    }
    console.log(data);
  });
}

main("a.txt");

for (var i = 1; i <= 1000; i++) {
  console.log(i);
}
