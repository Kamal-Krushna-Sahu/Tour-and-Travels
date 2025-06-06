import { instance } from "../index.js";

export const processPayment = async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100), //(*100 to convert into cents)
    currency: "INR",
  };

  const order = await instance.orders.create(options);

  res.status(200).json({
    success: true,
    order,
  });
};

export const getKey = async (req, res) => {
  res.status(200).json({
    key: process.env.RAZORPAY_API_KEY,
  });
};
