const express = require("express");
const cors = require("cors");
const { todoSchema, updatedTodoSchema } = require("./types");
const { todo } = require("./db");

const app = express();
app.use(cors());

const PORT = 3000;

app.use(express.json());

app.post("/todo", async (req, res) => {
  try {
    const payload = req.body;
    const parsedPayload = todoSchema.safeParse(payload);

    if (!parsedPayload.success) {
      res.status(400).json({ error: parsedPayload.error });
      return;
    }

    await todo.create({
      title: payload.title,
      description: payload.description,
      completed: false,
    });

    res.status(201).json({ message: "Todo created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/todo", async (req, res) => {
  try {
    const todos = await todo.find({});

    res.status(200).json({ todos });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/completed", async (req, res) => {
  try {
    const payload = req.body;
    const parsedPayload = updatedTodoSchema.safeParse(payload);

    if (!parsedPayload.success) {
      res.status(400).json({ error: parsedPayload.error });
      return;
    }

    await todo.update({ _id: payload.id }, { completed: true });

    res.status(200).json({ message: "Todo updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
