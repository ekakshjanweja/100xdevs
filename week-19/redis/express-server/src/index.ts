import express from "express";
import { createClient } from "redis";

const app = express();
app.use(express.json());

const client = createClient();

client.on("error", (error) => {
  console.log("Redis Client Error", error);
});

app.post("/submit", async (req, res) => {
  const problemId = req.body.problemId;
  const code = req.body.code;
  const language = req.body.language;

  try {
    await client.lPush(
      "problems",
      JSON.stringify({
        problemId,
        code,
        language,
      })
    );
    res.status(200).send("Submission stored successfully.");
  } catch (error) {
    console.log("Redis Error: ", error);
    res.status(500).send("Failed to store submission.");
  }
});

const startServer = async () => {
  try {
    await client.connect();
    console.log("Connected to Redis");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (error) {
    console.log("Error starting server: ", error);
  }
};

startServer();
