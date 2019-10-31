const express = require('express');
const Member = require('../models/scanner')
const router = express.Router();


//Verify authentication
router.get("/scanner", async(req, res, next) => {
    const data = Member.find({});
    res.json(data);
});

router.post("/scanner", function(req, res, next) {
    Member.create(req.body).then(function(member) {
        res.send(member);
    }).catch(next);
});

router.put("/scanner/:id", function(req, res, next) {
    Member.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function(member) {
        Member.findOne({ _id: req.params.id }).then(function(member) {
            res.send(member)
        })
    });
});

router.delete("/scanner/:id", function(req, res, next) {
    Member.findByIdAndDelete({ _id: req.params.id }).then(function(member) {
        res.send(member)
    });
});

module.exports = router