const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/route-handler", (req, res) => {
  res.json({
    name: "Ekaksh Janweja",
    age: 21,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.post("/conversations", (req, res) => {
  console.log(req.headers["authorization"]);
  console.log(req.body.message);

  res.send("<b>Hello, World!</b>");
});
