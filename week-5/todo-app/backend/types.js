const zod = require("zod");

const todoSchema = zod.object({
  title: zod.string(),
  description: zod.string(),
});

const updatedTodoSchema = zod.object({
  id: zod.string(),
});

mondule.exports = {
  todoSchema: todoSchema,
  updatedTodoSchema: updatedTodoSchema,
};
