const Order = require("../models/order.model");
const Gig = require("../models/gig.model");
const stripe = require("stripe")('sk_test_51MzgAODEiWKSrwTBLsg3b0TjGwCv87wkmjafzWPuZYyQA0f3smOU9emOnP0VnEFIqDEL0zZtiKbJllzUSqffvxZw00KXYHj2YX');


const intent = async (req, res, next) =>{
  const gig = await Gig.findById(req.params.id)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: gig.price * 100,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });
  const newOrder = new Order({
    gigId: gig._id,
    img: gig.cover,
    title: gig.title,
    buyerId: req.userId,
    sellerId: gig.userId,
    price: gig.price,
    payment_intent: paymentIntent.id,
  });

  await newOrder.save();
  res.status(200).send({
    clientSecret: paymentIntent.client_secret,
  });
}

const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({
      ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
      isCompleted: true,
    });
    res.status(200).send(orders);
  } catch (err) {
    next(err);
  }
};



module.exports = {
  getOrders,
  intent
};
