const express = require("express");
const { getOrders , intent } = require("../controllers/order.controller");
const { verifyToken } = require("../middleware/jwt");
const router = express.Router();


router.get("/", verifyToken, getOrders);
router.post("/create-payment-intent/:id", verifyToken, intent);



module.exports = router;
