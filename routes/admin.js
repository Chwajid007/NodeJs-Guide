const express = require('express');

const router = express.Router();

const products = [];

router.get('/add-data',(req, res, next) => {
    res.send("<form action='/admin/submit-data' method='POST'> <input type='text' name='message'/> <button type='submit'>Send</button></form>");
})

router.post('/submit-data',(req, res) => {
    console.log('response: ' + JSON.stringify(req.body));
    products.push({title : req.body.message});
    //res.send('POST request to the homepage');
    res.redirect('/');
})

exports.routes = router;
exports.products = products;