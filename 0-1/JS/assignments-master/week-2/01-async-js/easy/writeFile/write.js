const fs = require("fs");

async function main(content) {
  let newData = await content.toString();
  fs.readFile("a.txt", "utf8", function (err, data) {
    if (err) {
      console.log("Error reading");
    }
    fs.writeFile("a.txt", newData, function (err, data) {
      console.log("File have been edited");
    });
  });
}

main("my name is abhinav");
