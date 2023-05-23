const express = require("express");
const {
  deleteReview,
  getReviews,
  createReview,
} = require("../controllers/review.controller");
const { verifyToken } = require("../middleware/jwt");
const router = express.Router();

router.post("/", verifyToken, createReview);
router.get("/:gigId", getReviews);
router.delete("/:id", deleteReview);

module.exports = router;
