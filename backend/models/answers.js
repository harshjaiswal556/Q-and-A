const mongoose = require('mongoose');

const answerSchema = mongoose.Schema({
    answer: String,
    questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "questions"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("answers", answerSchema)