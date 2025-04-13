const express = require("express");
const mongoose = require("mongoose");
const userModel = require("./models/user.model.js");

mongoose.connect("mongodb://localhost:27017/TravelBusiness");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await userModel.create({ username, email, password });
  } catch (error) {
    console.log("error while signup:", error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
