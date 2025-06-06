const express = require("express");
const mongoose = require("mongoose");
const userModel = require("./models/user.model.js");
const cors = require("cors");
// const jwt = require("jsonwebtoken");

mongoose.connect("mongodb://localhost:27017/TravelBusiness");

const app = express();
const port = "3000";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/signup", (req, res) => {
  const { username, email, password } = req.body;
  userModel
    .create({ username, email, password })
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

// app.post("/", (req, res) => {
//   const { email, password } = req.body;
//   userModel
//     .findOne({ email })
//     .then((user) => {
//       if (user) {
//         if (user.password === password) {
//           let token = jwt.sign({ email: user.email }, "secret");
//           res.cookie("token", token);
//         } else {
//           res.json("Either the email or password is incorrect");
//         }
//       } else {
//         res.json("Either the email or password is incorrect");
//       }
//     })
//     .catch((err) => res.json(err));
// });

app.post("/", (req, res) => {
  const { email, password } = req.body;
  userModel
    .findOne({ email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json("success");
        } else {
          res.json("Either the email or password is incorrect");
        }
      } else {
        res.json("Either the email or password is incorrect");
      }
    })
    .catch((err) => res.json(err));
});

app.listen(port, "0.0.0.0", () => {
  // Use 0.0.0.0 for Broad Accessibility (If you want your server accessible from any network interface (e.g., for easy testing across multiple devices), you can let Express listen on all interfaces by passing 0.0.0.0 as the host)
  console.log(`Example app listening on port ${port}`);
});
