const express = require("express");

const User = require("../models/user.model");

const router = express.Router();

require("dotenv").config();
const jwt = require("jsonwebtoken");

const newToken = (user) => {
  return jwt.sign({ user: user }, process.env.JWT_SECRET_KEY);
};

router.post("/signup", async (req, res) => {
  try {
    // first check if the email provided is already given to another user
    let user = await User.findOne({ email: req.body.email }).lean().exec();

    // if yes then throw an error 400 Bad Request
    if (user)
      return res
        .status(400)
        .send({ message: "User with that email already exists" });

    // if not then we will create the user
    // we will hash the password for the user
    user = await User.create(req.body);

    // we will create the token for the user
    const token = newToken(user);

    // return the token and the user details
    return res.status(201).send({ user, token });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/", async(req, res)=>{
    try{
        const products = await User.find().lean().exec()
        return res.status(200).send(products)

    } catch (e){
        return res.status(500).send(e.message)
    }
} )

module.exports = router;
