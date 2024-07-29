const express = require('express');
const router= express.Router();

const adminRouter = require('./admin');

router.get('/',(req, res, next) => {
    // console.log("In another middleware");
    // console.log("products in shop.js",adminRouter.products)
    //  res.send("<h1>Hello from express!!!</h1>");
    res.render('shop',{shopName : "Adidas"})

})

module.exports = router