const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    questionTitle: String,
    questionUrl: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    answers: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "answers"
    }
})

module.exports = mongoose.model("questions", questionSchema)