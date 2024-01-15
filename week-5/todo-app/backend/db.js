const mongoose = require("mongoose");
const { boolean } = require("zod");

// mongodb+srv://admin:ekaksh31@cluster0.rw0dfnm.mongodb.net/

mongoose.connect(
  "mongodb+srv://admin:ekaksh31@cluster0.rw0dfnm.mongodb.net/?retryWrites=true&w=majority"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
