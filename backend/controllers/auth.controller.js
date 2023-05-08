const User = require("../models/user.model");

const userRegister = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).send("User has been created");
  } catch (error) {
    res.status(500).send("Some error");
  }
};

const userLogin = (req, res) => {};

const userLogout = (req, res) => {};

module.exports = {
  userRegister,
  userLogin,
  userLogout,
};
