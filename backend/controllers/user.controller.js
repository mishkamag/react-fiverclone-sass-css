const User = require("../models/user.model");
const { createError } = require("../helpers/createEror");

const deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (req.userId !== user._id.toString()) {
    return next(createError(403, "You only can delete you acc"));
  }
  await User.findOneAndDelete(req.params.id);
  res.status(200).send("Acc has been deleted");
};

module.exports = {
  deleteUser,
};
