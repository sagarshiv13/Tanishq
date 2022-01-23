const express = require("express");

const Product = require("../models/product.model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await Product.find().lean().exec();
    return res.status(200).send(products);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const products = await Product.create(req.body);
    return res.status(201).send(products);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const products = await Product.findByIdAndDelete(req.params.id);
    return res.status(201).send(products);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const products = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(201).send(products);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

module.exports = router;
