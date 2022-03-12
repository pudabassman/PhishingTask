const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EmailRequest = new Schema(
    {
        email: { type: String, required: true },
        content: { type: String, required: true },
        clicked: { type: Boolean, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('emailRequests', EmailRequest)