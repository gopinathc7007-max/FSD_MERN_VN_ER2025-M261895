const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const userRoute = require("./routes/userRoutes");

const app = express();

const PORT = 8000;

app.use(cors())
app.use(express.json()); //Middleware

mongoose
  .connect("mongodb://localhost:27017/MYDB")
  .then(() => {
    console.log("Connected to DB 🍃");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello 👋");
});

app.use(userRoute);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
