const User = require("../models/user.model");
const { createError } = require("../helpers/createEror");
// const cloudinary = require('cloudinary').v2

// cloudinary.config({
//   cloud_name: "dayas7n42",
//   api_key: "857154711538518",
//   api_secret: "IpVGMzzmt1IMsIVg3cL6K3ju23g"
// });

const deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (req.userId !== user._id.toString()) {
    return next(createError(403, "You only can delete you acc"));
  }

  // if (user.imagePublicId) {
  //   await cloudinary.uploader.destroy(user.imagePublicId);
  // }

  await User.findOneAndDelete(req.params.id);
  res.status(200).send("Acc has been deleted");
};

const getUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).send(user);
};

module.exports = {
  deleteUser,
  getUser,
};
