import { instance } from "../index.js";
import crypto from "crypto";

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

export const paymentVerification = async (req, res) => {
  // console.log(req.body);
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;
  
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest("hex");
  // console.log(`razorpay signature, ${razorpay_signature}`)
  // console.log(`expected signature, ${expectedSignature}`)

  const isPaymentSuccessful = expectedSignature === razorpay_signature;

  if (isPaymentSuccessful) {
    return res.redirect(
      `http://localhost:5173/paymentsuccess?reference=${razorpay_payment_id}`
    );
  } else {
    res.status(404).json({
      success: false,
    });
  }
};
