const express = require('express');
const router = express.Router();

const questionDB = require('../models/question')

router.post('/', async (req, res) => {
    console.log(req.body);
    try {
        await questionDB.create({
            questionTitle: req.body.questionTitle,
            questionUrl: req.body.questionUrl,
        }).then(() => {
            res.status(201).send("Question added");
        }).catch(err => {
            res.status(400).send(err.message);
        })
    } catch (e) {
        res.status(500).send(e.message);
    }
})

module.exports = router;