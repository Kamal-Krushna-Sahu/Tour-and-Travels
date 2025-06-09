// import mongoose from "mongoose";
// // const bcrypt = require("bcrypt");
// // const jwt = require("jsonwebtoken");

// const userSchema = new mongoose.Schema({
//   username: String,
//   email: String,
//   password: String,
// });

// // userSchema.pre("save", async function (next) {
// //   if (!this.isModified("password")) return next();

// //   this.password = bcrypt.hash(this.password, 10);
// //   next();
// // });

// // userSchema.methods.isPasswordCorrect = async function (password) {
// //   return await bcrypt.compare(password, this.password);
// // };

// // userSchema.methods.generateAccessToken = function () {
// //   return jwt.sign(
// //     {
// //       email: this.email,
// //     },
// //     process.env.ACCESS_TOKEN_SECRET,
// //     {
// //       expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
// //     }
// //   );
// // };

// // userSchema.methods.generateRefreshToken = function () {
// //   return jwt.sign(
// //     {
// //       email: this.email,
// //     },
// //     process.env.REFRESH_TOKEN_SECRET,
// //     {
// //       expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
// //     }
// //   );
// // };

// export const userModel = mongoose.model("userModel", userSchema);

import mongoose from "mongoose";

const parentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
    children: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Child",
      },
    ],
  },
  { timestamps: true }
);

export const Parent = mongoose.model("Parent", parentSchema);
