const express = require("express");
const {
  getOrders,
  intent,
  confirm,
} = require("../controllers/order.controller");
const { verifyToken } = require("../middleware/jwt");
const router = express.Router();

router.get("/", verifyToken, getOrders);
router.post("/create-payment-intent/:id", verifyToken, intent);
router.put("/", verifyToken, confirm);

module.exports = router;
