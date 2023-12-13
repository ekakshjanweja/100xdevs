const fs = require("fs");

function cleanFile(path) {
  try {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) throw err;

      const cleanedContent = data.replace(/\s+/g, " ");

      fs.writeFile(path, cleanedContent, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
      });

      console.log("The file has been cleaned and saved!");
    });
  } catch (error) {
    console.log(error);
  }
}

const filePath = "./test.txt";

cleanFile(filePath);
