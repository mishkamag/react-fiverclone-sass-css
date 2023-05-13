const Gig = require("../models/gig.model");
const { createError } = require("../helpers/createEror");

const createGig = async (req, res, next) => {
  if (!req.isSeller)
    return next(createError(403, "Only sellers can create a Gig"));

  const newGig = new Gig({
    userId: req.userId,
    ...req.body,
  });

  try {
    const savedGig = await newGig.save();
    res.status(201).json(savedGig);
  } catch (err) {
    next(err);
  }
};

const deleteGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);
    if (gig.userId !== req.userId)
      return next(createError)(403, "You can delete only your gig");

    await Gig.findByIdAndDelete(req.params.id);
    res.status(200).send("Gig has been deeleted");
  } catch (err) {
    next(err);
  }
};

const getGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);
    if (!gig) return next(createError)(404, "Gig not found");

    res.status(200).send(gig);
  } catch (err) {
    next(err);
  }
};

const getGigs = async (req, res, next) => {
  const q = req.query;
  const filters = {};

  if (q.userId) {
    filters.userId = q.userId;
  }

  if (q.cat) {
    filters.cat = q.cat;
  }

  if (q.min || q.max) {
    filters.price = {};

    if (q.min) {
      filters.price.$gt = q.min;
    }

    if (q.max) {
      filters.price.$lt = q.max;
    }
  }

  if (q.search) {
    filters.title = { $regex: q.search, $options: "i" };
  }

  try {
    const gigs = await Gig.find(filters);
    if (!gigs) return next(createError)(404, "No Gigs in db");

    res.status(200).send(gigs);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createGig,
  deleteGig,
  getGig,
  getGigs,
};
