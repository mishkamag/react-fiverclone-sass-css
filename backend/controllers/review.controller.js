const { createError } = require("../helpers/createEror");
const Review = require("../models/review.model");
const Gig = require("../models/gig.model");

const createReview = async (req, res, next) => {
  if (req.isSeller)
    return next(createError(403, "Seller cant create a review"));

  const newReview = new Review({
    userId: req.userId,
    gigId: req.body.gigId,
    desc: req.body.desc,
    star: req.body.star,
  });

  try {
    const review = await Review.findOne({
      gigId: req.body.gigId,
      userId: req.userId,
    });
    if (review)
      return next(
        createError(403, "You have already created a review for this gig!")
      );
    await Gig.findByIdAndUpdate(req.body.gigId, {
      $inc: { totalStars: req.body.star, starNumber: 1 },
    });
    const savedReview = await newReview.save();
    res.status(201).send(savedReview);
  } catch (err) {
    next(err);
  }
};

const getReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find({ gigId: req.params.gigId });
    res.status(200).send(reviews);
  } catch (err) {
    next(err);
  }
};

const deleteReview = () => {};

module.exports = {
  createReview,
  getReviews,
  deleteReview,
};
