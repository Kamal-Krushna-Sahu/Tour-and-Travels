import express from "express";
import mongoose from "mongoose";
import { Parent } from "./models/parent.model.js";
import cors from "cors";
// import jwt from "jsonwebtoken";
import Razorpay from "razorpay";
import router from "../src/routes/payment.route.js";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

mongoose.connect("mongodb://localhost:27017/TravelBusiness");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/signup", (req, res) => {
  const { name, contactNumber, password, address } = req.body;
  Parent
    .create({ name, contactNumber, password, address })
    .then((Parent) => res.json(Parent))
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
