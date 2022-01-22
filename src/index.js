const express = require('express');


const productController= require("./controllers/product.controller")
const userController= require("./controllers/user.controller")

const app = express();
app.use(express.json())



// app.use(require('body-parser').json())


app.use("/products", productController)
app.use("/users", userController)

module.exports = app
