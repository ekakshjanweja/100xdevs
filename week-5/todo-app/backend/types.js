const zod = require("zod");

const todoSchema = zod.object({
  title: zod.string(),
  description: zod.string(),
});

const updatedTodoSchema = zod.object({
  id: zod.string(),
});

module.exports = {
  todoSchema: todoSchema,
  updatedTodoSchema: updatedTodoSchema,
};
