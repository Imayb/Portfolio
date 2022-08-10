const express = require('express');
const router = express.Router();
const Contact = require('./models/contact')

router.get('/', (req, res) => {
    res.render('index')
})

router.post('/submitContact', (req, res) => {
    const contact = new Contact ({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        reason: req.body.reason,
        comment: req.body.comment

    });

    Contact.collection.insertOne(contact)
    .then(result => {
        res.render('index')
    })
    .catch(err => console.log('err'))
})

module.exports = router;