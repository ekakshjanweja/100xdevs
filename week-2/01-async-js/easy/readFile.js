const fs = require("fs");

fs.readFile("test.txt", "utf-8", function (err, data) {
  console.log(err);
  console.log(data);
});

console.log("Task Completed.");
