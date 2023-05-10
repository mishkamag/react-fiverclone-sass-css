const User = require("../models/user.model");

const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (req.userId !== user._id.toString()) {
    return res.status(403).send("You only can delete you acc");
  }
  await User.findOneAndDelete(req.params.id);
  res.status(200).send("Acc has been deleted");
};

module.exports = {
  deleteUser,
};
