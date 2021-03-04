const User = require("../models/user");
const express = require("express");
const router = express.Router();

//@Api http:localhost:9000/api/users
//@desc Add new user
//@access public
router.post("/", (req, res) => {
  const newUser = new User({ ...req.body });
  newUser
    .save()
    .then(() => res.send("user has been added with success"))
    .catch((err) => res.send(err));
});

//@Api http:localhost:9000/api/users
//@desc Get all users
//@access public
router.get("/", (req, res) => {
  User.find()
    .then((users) => res.send(users))
    .catch((err) => res.send(err));
});

//@Api http:localhost:9000/api/users/id
//@desc Get user by id
//@access public
router.get("/:_id", (req, res) => {
  let { _id } = req.params;
  //   let id = req.params._id;
  User.find({ _id })
    .then((user) => res.send(user))
    .catch((err) => res.send(err));
});

//@Api http:localhost:9000/api/users/id
//@desc Delete user by id
//@access public
router.delete("/:_id", (req, res) => {
  // console.log(req.params)
  let { _id } = req.params;
  User.findByIdAndDelete({ _id })
    .then(() => res.send("User has been deleted"))
    .catch((err) => res.send(err));
});

//@Api http:localhost:9000/api/users/id
//@desc Update user by id
//@access public
router.put("/:_id", (req, res) => {
  let { _id } = req.params;
  User.findByIdAndUpdate({ _id }, { $set: { ...req.body } })
    .then(() => res.send("User has been updated"))
    .catch((err) => res.send(err));
});

module.exports = router;
