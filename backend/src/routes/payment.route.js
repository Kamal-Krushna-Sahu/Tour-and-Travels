import express from "express";
import { getKey, processPayment } from "../controllers/payment.controller.js";

const router = express.Router();

router.route("/payment/process").post(processPayment);
router.route("/getkey").get(getKey);

export default router;
