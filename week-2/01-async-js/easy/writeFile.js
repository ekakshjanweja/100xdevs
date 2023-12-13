const fs = require("fs");

const content = "This is a test file.";

fs.writeFile("test.txt", content, function (err) {
  console.log(err);
});

console.log("Task Completed.");
