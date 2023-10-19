const express = require('express');

const router = express.Router();

const questionRouter = require('./question');
const answerRouter = require('./answer');

router.get('/', (req, res) => {
    res.send("Hello this API is working fine!");
})

router.use('/questions', questionRouter);
// router.use('/answer', answerRouter);

module.exports = router;