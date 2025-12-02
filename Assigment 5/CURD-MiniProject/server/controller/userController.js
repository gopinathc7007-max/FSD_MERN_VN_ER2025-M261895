const User = require("../model/userSchema");

const getUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.send({ msg: "This is from GET-users", allUsers });
  } catch (error) {
    console.log(error);
    res.send({ msg: "Internal Server Error", error });
  }
};
const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.send({ msg: "This is from CREATE-user", newUser });
  } catch (error) {
    console.log(error);
    res.send({ msg: "Internal Server Error", error });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUser = await User.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.send({ msg: "This is from UPDATE-user", updatedUser });
  } catch (error) {
    console.log(error);
    res.send({ msg: "Internal Server Error", error });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findOneAndDelete({ _id: id });
    res.send({ msg: "This is from DELETE-user", deletedUser });
  } catch (error) {
    console.log(error);
    res.send({ msg: "Internal Server Error", error });
  }
};

module.exports = { getUsers, createUser, updateUser, deleteUser };
