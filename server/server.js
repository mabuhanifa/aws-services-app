const express = require("express");

const app = express();

const cors = require("cors");
const foodRouter = require("./routes/foodRoutes");
const connectDB = require("./config/db");

const port = process.env.PORT || 3000;

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());
app.use(cors());

app.use("/api/foods", foodRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
