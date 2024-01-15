const mongoose = require("mongoose");
const { boolean } = require("zod");

// mongodb+srv://admin:ekaksh31@cluster0.rw0dfnm.mongodb.net/

mongoose.connect("mongodb+srv://admin:ekaksh31@cluster0.rw0dfnm.mongodb.net/");

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: boolean,
});

const todo = mongoose.model("todos", todoSchema);

mondule.exports = {
  todo,
};
