const express = require("express");
const zod = require("zod");
const app = express();

const PORT = 3000;

app.use(express.json());

const loginSchema = zod.object({
  username: zod.string().min(3).max(100),
  password: zod.string().min(6).max(100),
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  try {
    loginSchema.parse({ username, password });
    res
      .status(200)
      .json({ message: "Login successful -> proceeding with auth logic" });
  } catch (error) {
    res.status(400).json({ error: "Invalid Input", details: error.errors });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
