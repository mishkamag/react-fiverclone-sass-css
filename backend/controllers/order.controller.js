const Order = require("../models/order.model");
const Gig = require("../models/gig.model");

const createOrder = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.gigId);

    const newOrder = new Order({
      gigId: gig._id,
      img: gig.cover,
      title: gig.title,
      buyerId: req.userId,
      sellerId: gig.userId,
      price: gig.price,
      payment_intent: "temporary",
    });

    await newOrder.save();
    res.status(200).send("success");
  } catch (err) {
    next(err);
  }
};

const getOrders = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createOrder,
  getOrders,
};
