const express = require("express");
const mongoose = require("mongoose");

app.use(express.json());

mongoose.connect("mongodb+srv://admin:ekaksh31@cluster0.rw0dfnm.mongodb.net/");

const User = mongoose.model("users", {
  name: String,
  email: String,
  password: String,
});

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  const exsistingUser = await User.findOne({ email: email });

  if (exsistingUser) {
    return res.status(400).send("User already exists");
  }

  const user = new User({
    name: username,
    email: email,
    password: password,
  });

  user.save();

  res.json({
    success: true,
    message: "User created successfully!",
    user: user,
  });
});
