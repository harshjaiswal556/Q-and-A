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

router.get('/', async (req, res) => {
    try {
        await questionDB.aggregate([
            {
                $lookup: {
                    from: "answers",
                    localField: "_id",
                    foreignField: "questionId",
                    as: "allAnswer"
                }
            }
        ]).exec().then((doc) => {
            res.status(200).send(doc);
        }).catch(err => {
            res.status(500).send(err.message);
        })
    } catch (e) {
        console.log(e);
    }
})

module.exports = router;