const express = require("express");
const rootRouter = require("./routes/routes");
const cors = require("cors");

const PORT = 5050;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
