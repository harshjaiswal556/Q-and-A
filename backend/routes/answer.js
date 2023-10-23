const express = require('express');
const router = express.Router();

const answerDb = require('../models/answer')

router.post('/', async (req, res) => {
    try {
        await answerDb.create({
            answer: req.body.answer,
            questionId: req.body.questionId,
        }).then(() => {
            res.status(201).send("Answer added");
        }).catch(err => {
            res.status(500).send(err);
        })
    } catch (e) {
        console.log(e);
    }
})

module.exports = router