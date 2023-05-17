const express = require("express");
const { createOrder, getOrders } = require("../controllers/order.controller");
const { verifyToken } = require("../middleware/jwt");
const router = express.Router();

router.post("/:gigId", verifyToken, createOrder);
router.get("/", verifyToken, getOrders);

module.exports = router;
