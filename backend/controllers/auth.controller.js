const User = require("../models/user.model");
const bcrypt = require('bcrypt');

const userRegister = async (req, res) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 5)
    const newUser = new User({
      ...req.body,
      password: hash,
    });
    await newUser.save();
    res.status(201).send("User has been created");
  } catch (error) {
    res.status(500).send("Some error");
  }
};

const userLogin = async(req, res) => {
  try {
    const user =  await User.findOne({username:req.body.username})
    if(!user) return res.status(404).send("User not found")

    const correctUser = bcrypt.compareSync(req.body.password, user.password)
    if(!correctUser) return res.status(400).send("Wrong password or username")

    const {password, ...other} = user._doc
    res.status(200).send(other)

  } catch (error) {
    res.status(500).send("Some error")
  }
};

const userLogout = (req, res) => {};

module.exports = {
  userRegister,
  userLogin,
  userLogout,
};
