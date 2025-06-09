import mongoose from "mongoose";

const childSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Parent",
    },
    location: {
      type: String,
      enum: ["BBSR", "BERHAMPUR"],
    },
    fee: {
      type: Number,
      enum:[1200, 1300],
      default: 1200,
    },
  },
  { timestamps: true }
);

export const Child = mongoose.model("Child", childSchema);
